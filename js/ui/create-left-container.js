export function createLeftContainerTable(taskName, toDoText, buttonText = 'none') {
  const taskLeftTableContainer = document.createElement('div');
  taskLeftTableContainer.classList.add('left-container-table');

  const checkBoxContainer = document.createElement('div');
  checkBoxContainer.classList.add('all-checkbox');

  const inputCheckBox = document.createElement('input');
	inputCheckBox.setAttribute('type', 'checkbox');
	inputCheckBox.classList.add('task-checkbox');

  const taskNameElement = document.createElement('p');
  taskNameElement.classList.add('all-tasks');
  taskNameElement.textContent = taskName;

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-conteiner-table');

  const buttonTag = document.createElement('button');
  buttonTag.classList.add('b-tag');
  buttonTag.textContent = buttonText;

  const toDoTextElement = document.createElement('p');
	toDoTextElement.classList.add('to-do-text');
	 if (toDoText) {
     toDoTextElement.textContent = toDoText.length > 50 ? toDoText.slice(0, 50) + '...' : toDoText;
	};

  taskLeftTableContainer.append(checkBoxContainer);
  taskLeftTableContainer.append(textContainer);

  checkBoxContainer.append(inputCheckBox);
  checkBoxContainer.append(taskNameElement);

  textContainer.append(buttonTag);
  textContainer.append(toDoTextElement);

  return taskLeftTableContainer;
}
