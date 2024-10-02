import React from "react";
import "./projectBoard.css"; // Import your CSS file
import UserColumn from "./userColumn";

const UserBoard = ({ Data, users }) => {
  const Image = {
    Backlog: "Backlog.svg",
    Todo: "To-do.svg",
    "In progress": "in-progress.svg",
    Done: "Done.svg",
    Canceled: "Cancelled.svg",
  };
  //   console.log(Image.Backlog);

  return (
    <div className="project-board">
      <div className="board-columns">
        {Data.map((item, index) => {
          return (
            <UserColumn
              key={index}
              item={item}
              name={item[0].status}
              avatar={Image[item[0].status]}
              whichIconToShow={1}
              users={users}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserBoard;
