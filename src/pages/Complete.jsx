import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";

const Complete = () => {
  const completedGoals = Goals.filter((g) => g.progress === 100);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed" />

      <div>
        {Goals &&
          completedGoals.map((g) => {
            return <Completed key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Complete;
