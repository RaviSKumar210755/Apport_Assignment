import React from "react";
import "./CardComponent.css";

const CardComponent = ({ task, whichIconToShow, users }) => {
  const isActive = users[task.userId];
  const Image = {
    "usr-1": "1.png",
    "usr-2": "2.png",
    "usr-3": "3.png",
    "usr-4": "4.png",
    "usr-5": "5.png",
    Backlog: "Backlog.svg",
    Todo: "To-do.svg",
    "In progress": "in-progress.svg",
    Done: "Done.svg",
    Canceled: "Cancelled.svg",
    0: "No-priority.svg",
    1: "Img - Low Priority.svg",
    2: "Img - Medium Priority.svg",
    3: "Img - High Priority.svg",
    4: "SVG - Urgent Priority colour.svg",
  };
  return (
    <div className="card-container">
      <div className="card-header">
        <h3 className="header-text"> {task.id}</h3>
        <div>
          {whichIconToShow != 0 && (
            <img src={Image[task.userId]} alt="logo" className="header-logo" />
          )}
          {whichIconToShow != 0 && (
            <div
              className={`status-indicator ${isActive ? "active" : "inactive"}`}
            ></div>
          )}
        </div>
      </div>
      <div className="card-title">
        {whichIconToShow != 1 && (
          <img src={Image[task.status]} alt="icon" className="icon" />
        )}

        <span>{task.title}</span>
      </div>
      {whichIconToShow != 2 && (
        <img src={Image[task.priority]} alt="icon" className="icon" />
      )}

      <div className="card-body">
        <span className="yellow-dot">●</span>
        <p>{task.tag}</p>
      </div>
    </div>
  );
};

export default CardComponent;
