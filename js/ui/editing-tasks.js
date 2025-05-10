import { tasks } from '../main.js';
import { tasksTotalContainer } from '../core/dom-elements.js';
import { renderTasksToPage } from '../core/custom-events.js';
import { setItemToLocalStorage } from '../core/helpers.js';
import { openModalWindow } from '../handlers/tasks-modal.js';


tasksTotalContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('icon-pencil')) {
		const toDoElement = e.target.closest('.task-1-for-styles');
		const taskId = +toDoElement.dataset.id;

		const targetTaskEditing = tasks.find((task) => task.id == taskId);

		openModalWindow(targetTaskEditing);
  }
});

