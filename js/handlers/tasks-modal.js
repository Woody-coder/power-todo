import { tasks } from '../core/tasks.js';
import { getDatesCreationAndCustomExpiration } from '../core/functions.js';
import { renderTasksToPage } from '../core/custom-events.js';
import { setItemToLocalStorage } from '../core/helpers.js';

const buttonNewTask = document.querySelector('.b-new-task');
const modal = document.querySelector('.modal');
const modalCreationDate = document.querySelector('.creation-date');
const modalExpirationDate = document.querySelector('.expiration-date');
const overlay = document.querySelector('.overlay');
const buttonSave = document.querySelector('.b-save');
const buttonCancel = document.querySelector('.b-cancel');
const textArea = document.querySelector('.modal-textarea');

const openModalWindow = () => {
  modal.classList.add('show');
  overlay.style.display = 'block';
  const { dataCreation, dataExpiration } =
    getDatesCreationAndCustomExpiration();
  [modalCreationDate.value, modalExpirationDate.value] = [
    dataCreation,
    dataExpiration,
  ];
};

const removeInfo = () => {
  modal.classList.remove('show');
  overlay.style.display = 'none';
  textArea.value = '';
};

const savingDataUsingTheButton = () => {
  const createDateValue = modalCreationDate.value;
  const expDateValue = modalExpirationDate.value;
  const taskTextInfo = textArea.value;

  if (taskTextInfo === '') return removeInfo();

  const newTaskModalObject = {
    numTask: `Task-${tasks.length + 1}`,
    toDoText: taskTextInfo,
    status: 'In Progress',
    priority: 'medium',
    createDate: createDateValue,
    expDate: expDateValue,
  };

  tasks.push(newTaskModalObject);
  setItemToLocalStorage('tasks', tasks);

  const event = renderTasksToPage(newTaskModalObject);
  document.dispatchEvent(event);
  removeInfo();
};

buttonNewTask.addEventListener('click', openModalWindow);
buttonSave.addEventListener('click', savingDataUsingTheButton);
buttonCancel.addEventListener('click', () => removeInfo());
