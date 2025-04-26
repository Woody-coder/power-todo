import './handlers/tasks-modal.js';
import './ui/render-tasks.js';
import './handlers/input.js';

import { tasks } from './core/tasks.js';
import { renderTasksToPage } from './core/custom-events.js';


if (tasks.length > 0) {
  const event = renderTasksToPage(tasks);
  document.dispatchEvent(event);
}


const getAndToggleElements = (element, stateCheckbox) => {
  element.classList.toggle('task-accomplished-background-color', stateCheckbox);
  element.querySelector('.all-tasks').classList.toggle('task-accomplished-text', stateCheckbox);
  element.querySelector('.to-do-text').classList.toggle('task-accomplished-text', stateCheckbox);
  element.querySelector('.b-tag').classList.toggle('task-accomplished-b-tag', stateCheckbox);
};

const taskAccomplished = () => {
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-checkbox')) {
      const toDoItemElement = e.target.closest('.task-1-for-styles');
      getAndToggleElements(toDoItemElement, e.target.checked);
    }
  });
};
taskAccomplished();


