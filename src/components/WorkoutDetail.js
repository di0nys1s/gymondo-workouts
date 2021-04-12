import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

function WorkoutDetail() {
  let { id } = useParams();
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DATA_API}/workouts/${id}`
      );
      const data = await response.json();

      setWorkout(data);
    };
    fetchWorkouts();
  }, []);

  return (
    <div>
      <Segment attached="bottom">
        <Segment inverted>
          <Header as="h1">{workout.name}</Header>
        </Segment>
        <Segment>
          <h3>Description: {workout.description}</h3>
        </Segment>
        <Segment>
          <h3>Category: {workout.category}</h3>
        </Segment>
        <Segment>
          <h3>Start Date: {workout.startDate}</h3>
        </Segment>
        <Segment>
          <h3>Description: {workout.description}</h3>
        </Segment>
      </Segment>
      <Link to="/">
        <h3>Go Back</h3>
      </Link>
    </div>
  );
}

export default WorkoutDetail;
