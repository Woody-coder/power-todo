export const renderTasksToPage = (tasksObj) => {
	return new CustomEvent('eventRenderToPage', { detail: tasksObj })
} 


