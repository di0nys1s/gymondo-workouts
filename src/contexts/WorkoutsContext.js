import { useState, useEffect, createContext } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // Run `npm run server` to start the json-server
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DATA_API}/workouts`
      );
      const data = await response.json();

      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  return (
    <WorkoutsContext.Provider value={[workouts, setWorkouts]}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsContext;
