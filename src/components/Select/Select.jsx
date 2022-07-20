import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, allowDisabledState }) => {
  const { setFilter, filter, items } = useLaunchContext();
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  const allYears = items.map((launch) => {
    const date = new Date(launch.launch_date_utc);
    return date.getFullYear();
  });
  const launchYears = Array.from(new Set(allYears));

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
