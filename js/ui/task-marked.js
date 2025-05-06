import { tasks } from '../main.js';
import { tasksTotalContainer } from '../core/dom-elements.js';
import { renderTasksToPage } from '../core/custom-events.js';
import { setItemToLocalStorage } from '../core/helpers.js';

tasksTotalContainer.addEventListener('change', (e) => {
  if (e.target.classList.contains('task-checkbox')) {
    const toDoElement = e.target.closest('.task-1-for-styles');
    const taskId = +toDoElement.dataset.id;
    const targetCheckbox = e.target;

    toDoElement.classList.add('task-fade-out');

    setTimeout(() => {
      const targetTaskIndex = tasks.findIndex((task) => task.id === taskId);
      const [changedTaskObj] = tasks.splice(targetTaskIndex, 1);

      changedTaskObj.isCompleted = targetCheckbox.checked;

      if (targetCheckbox.checked) {
        tasks.push(changedTaskObj);
      } else {
        tasks.unshift(changedTaskObj);
      }

      setItemToLocalStorage('tasks', tasks);

      tasksTotalContainer.innerHTML = '';
      const event = renderTasksToPage(tasks);
      document.dispatchEvent(event);
    }, 300); 
  }
});