import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

const getDedupedYears = (items) => {
  const allYears = items.map((launch) => launch.launch_year);
  return Array.from(new Set(allYears));
};

export const Select = ({ label, classes, error, allowDisabledState }) => {
  const { setFilter, filter, items } = useLaunchContext();
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  const launchYears = getDedupedYears(items);

  return (
    <select
      name={label}
      className={selectClasses}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
      <option value="">{label}</option>
      {launchYears.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};
