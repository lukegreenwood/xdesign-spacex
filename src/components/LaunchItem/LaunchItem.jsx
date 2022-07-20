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
    <li key={index}>
      <div>
        <span>{`#${flight_number}`}</span>
        <span>{`${mission_name}`}</span>
      </div>
      <div>
        <span>{moment(launch_date_utc).format("Do MMM YYYY")}</span>
        {rocket_name}
      </div>
    </li>
  );
};
