import "./App.scss";
import { useState, useContext } from "react";
import { CategoryContext } from "./contexts/CategoryContext";
import { MonthContext } from "./contexts/MonthContext";
import { WorkoutsContext } from "./contexts/WorkoutsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import WorkoutList from "./components/WorkoutList";
import WorkoutDetail from "./components/WorkoutDetail";
import Pages from "./components/Pages";
import TopBar from "./components/TopBar";
import NotFound from "./components/NotFound";
import { Header } from "semantic-ui-react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(20);
  const [categories] = useContext(CategoryContext);
  const [month] = useContext(MonthContext);
  const [workouts] = useContext(WorkoutsContext);

  const filteredWorkouts = categories.length === 0 && !month ? workouts : [];
  if (categories.length === 0 && month) {
    workouts.filter((w) => {
      const splitDate = w.startDate.split("/");
      const startDateMonth = splitDate[1];
      if (month === startDateMonth) {
        filteredWorkouts.push(w);
      }
      return filteredWorkouts;
    });
  } else if (categories.length !== 0 && !month) {
    for (let i = 0; i < categories.length; i++) {
      workouts.filter((w) => {
        if (categories[i] === w.category) {
          filteredWorkouts.push(w);
        }
        return filteredWorkouts;
      });
    }
  } else {
    for (let i = 0; i < categories.length; i++) {
      workouts.filter((w) => {
        const splitDate = w.startDate.split("/");
        const startDateMonth = splitDate[1];
        if (categories[i] === w.category && month === startDateMonth) {
          filteredWorkouts.push(w);
        }
        return filteredWorkouts;
      });
    }
  }

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = filteredWorkouts.slice(indexOfFirstItem, indexOfLastItem);
  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div id="app">
        <Navbar />
        <main>
          <Switch>
            <Route path="/workout/:id" component={WorkoutDetail} />
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Header as="h1">Workout List</Header>
                  <TopBar />
                  <WorkoutList workouts={currentItem} />
                  <Pages
                    itemPerPage={itemPerPage}
                    totalItems={filteredWorkouts.length}
                    handlePaginate={handlePaginate}
                  />
                </>
              )}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
