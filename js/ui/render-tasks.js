import { createLeftContainerTable } from './create-left-container.js';
import { createRightContainerTable } from './create-right-container.js';
import { getAndToggleElements } from '../core/functions.js';
import { tasksTotalContainer } from '../core/dom-elements.js';

export const renderTask = (obj) => {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-1-for-styles');
  taskContainer.dataset.id = obj.id;

  if (obj.status === 'Done') {
    obj.icon = './images-svg/line/check.svg';
  } else {
	  obj.icon = './images-svg/Clock.svg';
  }

  const leftContainerTable = createLeftContainerTable(obj.numTask, obj.toDoText, obj.buttonText);
  const rightContainerTable = createRightContainerTable(obj.status, obj.priority, obj.icon);

  taskContainer.append(leftContainerTable);
  taskContainer.append(rightContainerTable);

  tasksTotalContainer.append(taskContainer);

  if (obj.isCompleted === true) {
    const checkboxTarget = taskContainer.querySelector('.task-checkbox');
    if (checkboxTarget) checkboxTarget.checked = true;

    getAndToggleElements(taskContainer, true);
  }
};

document.addEventListener('eventRenderToPage', (e) => {
  console.log('Задача вот такая :', e.detail);

	if (Array.isArray(e.detail)) {
	  tasksTotalContainer.innerHTML = '';
    e.detail.forEach(renderTask);
  } else {
    renderTask(e.detail);
  }
});
