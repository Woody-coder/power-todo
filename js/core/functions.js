import { tasksTotalContainer } from "./dom-elements.js";

//Set Date
export const getDatesCreationAndCustomExpiration = () => {
  const today = new Date();
  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

	return {
		dataCreation: today.toISOString().slice(0, 10),
		dataExpiration: tomorrow.toISOString().slice(0, 10),
	}
};

//Search element and change classes
export const getAndToggleElements = (element, stateCheckbox) => {
  element.classList.toggle('task-accomplished-background-color', stateCheckbox);
  element.querySelector('.all-tasks').classList.toggle('task-accomplished-text', stateCheckbox);
  element.querySelector('.to-do-text').classList.toggle('task-accomplished-text', stateCheckbox);
  element.querySelector('.b-tag').classList.toggle('task-accomplished-b-tag', stateCheckbox);
};

export const taskAccomplishedChangeBackground = () => {
  tasksTotalContainer.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-checkbox')) {
      const toDoItemElement = e.target.closest('.task-1-for-styles');
      getAndToggleElements(toDoItemElement, e.target.checked);
    }
  });
};
