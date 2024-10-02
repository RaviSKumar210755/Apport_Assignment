export const organizeTasksByStatus = (tasks) => {
  let statusTasks = {};

  tasks.forEach((task) => {
    const { status } = task;
    let name;

    switch (status) {
      case "Done":
        name = "Done";
        break;
      case "In progress":
        name = "In Progress";
        break;
      case "Canceled":
        name = "Canceled";
        break;
      case "Todo":
        name = "To Do";
        break;
      case "Backlog":
        name = "Backlog";
        break;
      default:
        name = "Unknown Status";
    }

    if (!statusTasks[name]) {
      statusTasks[name] = [];
    }

    const taskWithStatusName = { ...task, statusName: name };
    statusTasks[name].push(taskWithStatusName);
  });

  return Object.values(statusTasks);
};
