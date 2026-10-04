import { useState } from "react";

function ExerciseCard({ name, category, sets, reps }) {
  const [currentReps, setCurrentReps] = useState(reps);

  return (
    <div className="exercise-card">
      <h3>{name}</h3>

      <p>Category: {category}</p>
      <p>Sets: {sets}</p>

      <div className="rep-counter">
        <p>Reps: {currentReps}</p>

        <div className="rep-buttons">
          <button
  onClick={() =>
    setCurrentReps(Math.max(1, currentReps - 1))
  }
>
  -
</button>

          <button onClick={() => setCurrentReps(currentReps + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;