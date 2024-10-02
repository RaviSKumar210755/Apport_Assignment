import React from "react";
import "./projectBoard.css";
import UserColumn from "./userColumn";

const UserBoard = ({ Data, users }) => {
  if (!Array.isArray(Data)) {
    return <p>No data available.</p>;
  }

  const Image = {
    "usr-1": "1.png",
    "usr-2": "2.png",
    "usr-3": "3.png",
    "usr-4": "4.png",
    "usr-5": "5.png",
  };

  return (
    <div className="project-board">
      <div className="board-columns">
        {Data.map((item, index) => {
          return (
            <UserColumn
              key={index}
              item={item}
              name={users[index].name}
              avatar={Image[users[index].id]}
              whichIconToShow={0}
              users={users}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserBoard;
