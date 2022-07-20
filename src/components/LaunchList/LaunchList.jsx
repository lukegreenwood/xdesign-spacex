import React from "react";
import { LaunchItem } from "../LaunchItem";

export const LaunchList = ({ items, filter, sort }) => {
  let filteredItems = [...items];

  if (filter !== "") {
    filteredItems = items.filter((launch) => {
      const date = new Date(launch.launch_date_utc);

      return date.getFullYear() === parseInt(filter);
    });
  }

  //Bug in the sorting function below
  const launches = filteredItems.sort((a, b) => {
    const x = a.launch_year;
    const y = b.launch_year;
    return sort ? x - y : y - x;
  });

  return (
    <ul className="launch-list">
      {launches.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
