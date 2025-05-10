import './handlers/tasks-modal.js';
import './ui/render-tasks.js';
import './handlers/input.js';
import './ui/task-marked.js';
import './ui/editing-tasks.js';
import { tasksTotalContainer } from './core/dom-elements.js';
import { renderTasksToPage } from './core/custom-events.js';
import { setItemToLocalStorage, getItemFromLocalStorage } from './core/helpers.js';
import { getAndToggleElements, taskAccomplishedChangeBackground } from './core/functions.js';

export let tasks = getItemFromLocalStorage('tasks') || [];

if (tasks.length > 0) {
  const event = renderTasksToPage(tasks);
  document.dispatchEvent(event);
}

taskAccomplishedChangeBackground();

tasksTotalContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('b-delete')) {
    const taskDiv = e.target.closest('.task-1-for-styles');
    taskDiv.classList.add('fade-out');
    const taskId = +taskDiv.dataset.id;

    tasks = tasks.filter((task) => task.id !== taskId);
    tasks = tasks.map((task, index) => ({
      ...task,
      numTask: `Task-${index + 1}`,
    }));
    setItemToLocalStorage('tasks', tasks);

    taskDiv.addEventListener('animationend', () => {
      taskDiv.remove();
      tasksTotalContainer.innerHTML = '';

      const event = renderTasksToPage(tasks);
      document.dispatchEvent(event);
    });
  }
});
