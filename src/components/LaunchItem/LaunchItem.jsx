import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
  const {
    flight_number,
    mission_name,
    launch_date_utc,
    rocket: { rocket_name },
  } = item;

  return (
    <li key={index} className="launch-item">
      <div className="launch-item__info">
        <span className="launch-item__number">{`#${flight_number}`}</span>
        <span className="launch-item__name">{`${mission_name}`}</span>
      </div>
      <div className="launch-item__meta">
        <span>{moment(launch_date_utc).format("Do MMM YYYY")}</span>
        {rocket_name}
      </div>
    </li>
  );
};
