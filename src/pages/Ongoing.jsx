import Goal from "../components/Goal";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";
const Ongoing = () => {
  const ongoingGoals = Goals.filter((g) => g.progress < 100);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      <div>
        {Goals &&
          ongoingGoals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Ongoing;
