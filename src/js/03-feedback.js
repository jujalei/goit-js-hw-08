import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormInput, 300));
formEl.addEventListener('submit', cleanForm);

const formData = {};

function onFormInput(e) {
  const { name, value } = e.target;
  formData[name] = value;

  try {
    const stringifyData = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, stringifyData);
  } catch (error) {}
}

reedLocalStor();

function reedLocalStor() {
  const getData = localStorage.getItem(STORAGE_KEY);

  if (!getData) {
    return;
  }

  try {
    const parseData = JSON.parse(getData);

    Object.entries(parseData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  } catch (error) {}
}

function cleanForm(e) {
  e.preventDefault();

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
}
