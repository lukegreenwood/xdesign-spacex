import React from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";
import STATUS from "../../constants/Status";

export const launchContextDefaults = {
  listLaunches: Function,
  items: [],
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
  status: "null",
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [status, setStatus] = React.useState("");

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: React.useCallback(async () => {
          setStatus(STATUS.LOADING);
          try {
            const response = await GetLaunchesAPI();
            setItems(response);
            setStatus("");
          } catch (error) {
            // Send this to a logger or something that will capture it
            console.error("Error getting launches", error);
            setStatus(STATUS.ERROR);
          }
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
        status,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
