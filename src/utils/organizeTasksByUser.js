export const organizeTasksByUser = (tasks) => {
  let userTasks = {};

  tasks.forEach((task) => {
    const userId = task.userId;
    if (!userTasks[userId]) {
      userTasks[userId] = [];
    }

    userTasks[userId].push(task);
  });

  return Object.values(userTasks);
};
