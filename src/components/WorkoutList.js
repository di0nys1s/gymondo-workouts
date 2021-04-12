import Workout from "./Workout";
import { Link } from "react-router-dom";

function WorkoutList({ workouts }) {
  return (
    <div className="workout-list-container">
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <Link key={workout.id} to={`/workout/${workout.id}`}>
            <Workout workout={workout} />
          </Link>
        ))
      ) : (
        <h4>No workouts</h4>
      )}
    </div>
  );
}

export default WorkoutList;
