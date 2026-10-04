import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercises }) {
  return (
    <section className="exercise-list">
      <h2>Exercises</h2>

      <div className="exercise-grid">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            category={exercise.category}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      </div>
    </section>
  );
}

export default ExerciseList;