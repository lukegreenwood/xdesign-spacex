import React from "react";
import CONSTANTS from "../../constants/Config";
import LABEL from "../../constants/Labels";
import { LaunchList } from "../LaunchList";
import { Button } from "../Button";
import { Select } from "../Select";
import { useLaunchContext } from "../../contexts/LaunchContext";
import STATUS from "../../constants/Status";

export const Body = () => {
  const { filter, setSort, sort, items, years, status } = useLaunchContext();

  return (
    <div className="app__body">
      <div>
        <img
          src={CONSTANTS.SPACE_X_IMAGE}
          srcSet={CONSTANTS.SPACE_X_RETINA_IMAGES}
          className="app__main-image"
          alt="Launch Home"
        />
      </div>
      <div className="app__launches">
        <div className="app__filters">
          <Select
            classes="select"
            label={LABEL.FILTER_BY_YEAR}
            testId="filter-button-test"
            years={years}
          />
          <Button
            filter={filter}
            classes="button button--sort"
            onClick={() => setSort(!sort)}
            label={sort ? LABEL.ASC : LABEL.DESC}
          />
        </div>
        {status === STATUS.LOADING ? (
          <p>{LABEL.LOADING}</p>
        ) : status === STATUS.ERROR ? (
          <p>{LABEL.ERROR}</p>
        ) : (
          <LaunchList items={items} filter={filter} sort={sort} />
        )}
      </div>
    </div>
  );
};
