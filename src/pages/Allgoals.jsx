import React from "react";
import GoalHeader from "../components/GoalHeader";

import SingleGoal from "../components/SingleGoal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";

const Allgoals = () => {
  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />

      <div>
        <div>
          {Goals &&
            Goals.map((g) => {
              return <SingleGoal key={g._id} {...g} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
