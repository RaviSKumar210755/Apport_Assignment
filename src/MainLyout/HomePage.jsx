import React, { useState, useEffect } from "react";
import { fetchData } from "../Data/Data";
import NavBar from "../Components/Navbar";
import Layout from "../Components/UserBoard";
import PriorityTaskBoard from "../Components/PriorityTaskBoard";
import StatusTaskBoard from "../Components/StatusTaskBoard";
import { organizeUsersByAvailability } from "../utils/organizeUsersByAvailability";
import { organizeTasksByUser } from "../utils/organizeTasksByUser";
import { organizeTasksByPriority } from "../utils/organizeTasksByPriority";
import { organizeTasksByStatus } from "../utils/organizeTasksByStatus";

const HomePage = () => {
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment#";
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const { tickets, users } = await fetchData(url);
        setTickets(tickets);
        setUsers(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const organizedUsers = organizeUsersByAvailability(users);
  let task2DVector = organizeTasksByUser(tickets);
  let task2DPriority = organizeTasksByPriority(tickets);
  let task2DStatus = organizeTasksByStatus(tickets);

  return (
    <div>
      <NavBar setFilter={setFilter} />
      {filter === 0 ? (
        <Layout Data={task2DVector} users={users} />
      ) : filter === 1 ? (
        <StatusTaskBoard Data={task2DStatus} users={organizedUsers} />
      ) : filter === 2 ? (
        <PriorityTaskBoard Data={task2DPriority} users={organizedUsers} />
      ) : (
        <div>No filter selected</div>
      )}
    </div>
  );
};

export default HomePage;
