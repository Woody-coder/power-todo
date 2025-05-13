import { tasks } from '../main.js';
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

let editTaskId = null;

export const openModalWindow = (targetTask) => {
  modal.classList.add('show');
  overlay.style.display = 'block';

  if (targetTask) {
    textArea.value = targetTask.toDoText;
    modalCreationDate.value = targetTask.createDate;
    modalExpirationDate.value = targetTask.expDate;
    editTaskId = targetTask.id;
  } else {
    const { dataCreation, dataExpiration } = getDatesCreationAndCustomExpiration();
    [modalCreationDate.value, modalExpirationDate.value] = [dataCreation, dataExpiration];
  }
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

  if (editTaskId) {
    const targetTask = tasks.find((task) => task.id === editTaskId);
    targetTask.toDoText = taskTextInfo;
    targetTask.createDate = createDateValue;
    targetTask.expDate = expDateValue;
  } else {
    const newTaskModalObject = {
      id: Date.now(),
      isCompleted: false,
      numTask: `Task-${tasks.length + 1}`,
      toDoText: taskTextInfo,
      icon: './images-svg/Clock.svg',
      status: 'In Progress',
      priority: 'medium',
      createDate: createDateValue,
      expDate: expDateValue,
    };

    tasks.push(newTaskModalObject);
  }

  setItemToLocalStorage('tasks', tasks);
  const event = renderTasksToPage(tasks);
  document.dispatchEvent(event);
  removeInfo();
};

buttonNewTask.addEventListener('click', () => openModalWindow(null));
buttonSave.addEventListener('click', savingDataUsingTheButton);
buttonCancel.addEventListener('click', removeInfo);
