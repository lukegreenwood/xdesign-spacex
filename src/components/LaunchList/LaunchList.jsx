import React from "react";
import { LaunchItem } from "../LaunchItem";

export const LaunchList = ({ items, filter, sort }) => {
  let filteredItems = [...items];

  if (filter !== "") {
    filteredItems = items.filter(({ launch_year }) => filter === launch_year);
  }

  //Bug in the sorting function below
  const launches = filteredItems.sort((a, b) => {
    const x = a.launch_date_unix;
    const y = b.launch_date_unix;
    return sort ? y - x : x - y;
  });

  return (
    <ul className="launch-list">
      {launches.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
