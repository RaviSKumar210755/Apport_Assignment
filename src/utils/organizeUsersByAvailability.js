export const organizeUsersByAvailability = (users) => {
  let userMap = {};

  users.forEach((user) => {
    const userId = user.id;
    const isAvailable = user.available;

    if (!userMap[userId]) {
      userMap[userId] = isAvailable;
    }
  });

  return userMap;
};
