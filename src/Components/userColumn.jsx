import React from "react";
import Card from "./card";
import "./projectBoard.css";
const UserColumn = ({ item, name, avatar, whichIconToShow, users }) => {
  return (
    <div className="user-column">
      <div className="user-header">
        <div className="avatar-container">
          <img src={avatar} alt={name[0]} className="user-avatar" />

          <span className="user-name">{name}</span>
          <span className="task-count">{item.length}</span>
        </div>
        <div className="button-container">
          <button className="add-task-button">+</button>
          <button className="more-options-button">...</button>
        </div>
      </div>
      <div className="task-list">
        {item.map((task) => (
          <Card
            key={task.id}
            task={task}
            whichIconToShow={whichIconToShow}
            users={users}
          />
        ))}
      </div>
    </div>
  );
};

export default UserColumn;
