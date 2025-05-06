import { createLeftContainerTable } from './create-left-container.js';
import { createRightContainerTable } from './create-right-container.js';

export const renderTask = (obj) => {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-1-for-styles');

  const leftContainerTable = createLeftContainerTable(obj.numTask, obj.toDoText, obj.buttonText);
  const rightContainerTable = createRightContainerTable(obj.status, obj.priority);

  taskContainer.append(leftContainerTable);
  taskContainer.append(rightContainerTable);

  const mainContainerTasksList = document.querySelector('.tasks-list');
  mainContainerTasksList.append(taskContainer);
};

document.addEventListener('eventRenderToPage', (e) => {
  console.log('Задача вот такая :', e.detail);

  if (Array.isArray(e.detail)) {
    e.detail.forEach(renderTask);
  } else {
    renderTask(e.detail);
  }
});
