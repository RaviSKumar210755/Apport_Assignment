import React from "react";
import "./projectBoard.css";
import UserColumn from "./userColumn";

const UserBoard = ({ Data, users }) => {
  const Image = [
    "No-priority.svg",
    "Img - Low Priority.svg",
    "Img - Medium Priority.svg",
    "Img - High Priority.svg",
    "SVG - Urgent Priority colour.svg",
  ];

  return (
    <div className="project-board">
      <div className="board-columns">
        {Data.map((item, index) => {
          return (
            <UserColumn
              key={index}
              item={item}
              name={item[0].name}
              avatar={Image[item[0].priority]}
              whichIconToShow={2}
              users={users}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserBoard;
