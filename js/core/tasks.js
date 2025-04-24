import { getItemFromLocalStorage } from "./helpers.js";

export const tasks = getItemFromLocalStorage('tasks') || [];