import { tasks } from '../core/tasks.js';
import { getDatesCreationAndCustomExpiration } from '../core/functions.js';
import { renderTasksToPage } from '../core/custom-events.js';
import { setItemToLocalStorage } from '../core/helpers.js';

const input = document.querySelector('.filter');

const trySymbol = function () {
  const value = input.value;
  const regex = /[^a-zA-Z0-9\s]/g;

  input.value = value.replace(regex, '');
};
input.addEventListener('input', trySymbol);

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    createNewTaskForInput(input.value);
    input.value = '';
  }
});

function createNewTaskForInput(inputText) {
  const { dataCreation, dataExpiration } =
    getDatesCreationAndCustomExpiration();
  const trimText = inputText.trim();

  if (trimText === '') return;

  const newTaskInputObject = {
    numTask: `Task-${tasks.length + 1}`,
    toDoText: trimText,
    status: 'In Progress',
    priority: 'medium',
    createDate: dataCreation,
    expDate: dataExpiration,
  };

  tasks.push(newTaskInputObject);
  setItemToLocalStorage('tasks', tasks);

  const event = renderTasksToPage(newTaskInputObject);
  document.dispatchEvent(event);
}
