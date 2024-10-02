export const organizeTasksByPriority = (tasks) => {
  let priorityTasks = {};

  tasks.forEach((task) => {
    const priority = 4 - task.priority;
    let name;

    switch (priority) {
      case 0:
        name = "Urgent";
        break;
      case 1:
        name = "High Priority";
        break;
      case 2:
        name = "Medium Priority";
        break;
      case 3:
        name = "Low Priority";
        break;
      case 4:
        name = "No Priority";
        break;
      default:
        name = "Unknown Priority";
    }

    if (!priorityTasks[priority]) {
      priorityTasks[priority] = [];
    }

    const taskWithPriorityName = { ...task, name };
    priorityTasks[priority].push(taskWithPriorityName);
  });

  return Object.values(priorityTasks);
};
