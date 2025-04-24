import './handlers/tasks-modal.js';
import './ui/render-tasks.js';
import './handlers/input.js';

import { tasks } from './core/tasks.js';
import { renderTasksToPage } from './core/custom-events.js';

if (tasks.length > 0) {
  const event = renderTasksToPage(tasks);
  document.dispatchEvent(event);
}
