import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);

    response.data.tickets.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });

    return { tickets: response.data.tickets, users: response.data.users };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
