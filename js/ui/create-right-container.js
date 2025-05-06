export function createRightContainerTable(status, priority) {
  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right-container-table');

  const leftButton = document.createElement('button');
  leftButton.classList.add('status-to-do');
  leftButton.textContent = status;

  const imgStatus = document.createElement('img');
  imgStatus.setAttribute('src', './images-svg/Clock.svg');

  const rightButton = document.createElement('button');
  rightButton.classList.add('importance');
  rightButton.textContent = priority;

  const svgImportance = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgImportance.classList.add('icon-sort');

  const useSvgImoirtance = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useSvgImoirtance.setAttribute('href', './images-svg/symbol-defs.svg#icon-Arrow_Top');

  const svgMore = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgMore.classList.add('icon-sort');

  const useSvgMore = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useSvgMore.setAttribute('href', './images-svg/symbol-defs.svg#icon-More');

  const imgPencil = document.createElement('img');
  imgPencil.setAttribute('src', './images-svg/pencil2.svg');
  imgPencil.classList.add('icon-pencil');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('b-delete');
  deleteBtn.textContent = '×';

  const containerPencilAndButton = document.createElement('div');
  containerPencilAndButton.classList.add('container-pencil-button');

  rightContainer.append(leftButton);
  rightContainer.append(rightButton);
  rightContainer.append(svgMore);
  rightContainer.append(containerPencilAndButton);
  containerPencilAndButton.append(imgPencil);
  containerPencilAndButton.append(deleteBtn);
  svgMore.append(useSvgMore);

  leftButton.prepend(imgStatus);
  rightButton.prepend(svgImportance);
  svgImportance.append(useSvgImoirtance);

  return rightContainer;
}
