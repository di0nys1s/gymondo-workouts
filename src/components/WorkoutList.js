import Workout from "./Workout";
import { Link } from "react-router-dom";

function WorkoutList({ workouts, loading }) {
  return (
    <div className="workout-list-container">
      {workouts.length > 0
        ? workouts.map((workout) => (
            <Link key={workout.id} to={`/workout/${workout.id}`}>
              <Workout workout={workout} />
            </Link>
          ))
        : "There is no workout to show!"}
    </div>
  );
}

export default WorkoutList;
