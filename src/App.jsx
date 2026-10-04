import { useState } from "react";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import ExerciseList from "./components/ExerciseList";
import WorkoutControls from "./components/WorkoutControls";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showWorkout, setShowWorkout] = useState(false);

  const exercises = [
    {
      id: 1,
      name: "Incline Dumbbell Press",
      category: "Chest",
      sets: 4,
      reps: 6,
    },
    {
      id: 2,
      name: "Lat Pulldown",
      category: "Back",
      sets: 3,
      reps: 10,
    },
    {
      id: 3,
      name: "Leg Press",
      category: "Legs",
      sets: 4,
      reps: 10,
    },
    {
      id: 4,
      name: "Dumbbell Shoulder Press",
      category: "Shoulders",
      sets: 3,
      reps: 8,
    },
    {
      id: 5,
      name: "Chest Press",
      category: "Chest",
      sets: 3,
      reps: 10,
    },
    {
      id: 6,
      name: "Seated Row",
      category: "Back",
      sets: 3,
      reps: 10,
    },
  ];

  const filteredExercises =
    selectedCategory === "All"
      ? exercises
      : exercises.filter(
          (exercise) => exercise.category === selectedCategory
        );

  return (
    <div className="dashboard">
      <Header />

      <main>
        <section className="stats-container">
          <StatsCard
            title="Current Weight"
            value="190 lbs"
            description="Current body weight"
          />

          <StatsCard
            title="Workouts"
            value="4 / Week"
            description="Weekly training goal"
          />

          <StatsCard
            title="Best Lift"
            value="315 lbs"
            description="Squat personal record"
          />

          <StatsCard
            title="Goal"
            value="200 lbs"
            description="Long-term goal"
          />
        </section>

        <WorkoutControls
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          showWorkout={showWorkout}
          setShowWorkout={setShowWorkout}
        />

        {showWorkout && (
          <section className="workout-details">
            <h2>Today's Workout</h2>
            <p>Focus on controlled reps and good technique.</p>
            <p>Complete your sets and track your progress.</p>
          </section>
        )}

        <ExerciseList exercises={filteredExercises} />
      </main>

      <footer>
        <p>Fitness Dashboard - Project 4</p>
      </footer>
    </div>
  );
}

export default App;