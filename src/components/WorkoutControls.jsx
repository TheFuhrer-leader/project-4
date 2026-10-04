function WorkoutControls({
  selectedCategory,
  setSelectedCategory,
  showWorkout,
  setShowWorkout,
}) {
  return (
    <section className="workout-controls">
      <h2>Workout Controls</h2>

      <div className="filter-buttons">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className={selectedCategory === "Chest" ? "active" : ""}
          onClick={() => setSelectedCategory("Chest")}
        >
          Chest
        </button>

        <button
          className={selectedCategory === "Back" ? "active" : ""}
          onClick={() => setSelectedCategory("Back")}
        >
          Back
        </button>

        <button
          className={selectedCategory === "Legs" ? "active" : ""}
          onClick={() => setSelectedCategory("Legs")}
        >
          Legs
        </button>

        <button
          className={selectedCategory === "Shoulders" ? "active" : ""}
          onClick={() => setSelectedCategory("Shoulders")}
        >
          Shoulders
        </button>
      </div>

      <button
        className="toggle-button"
        onClick={() => setShowWorkout(!showWorkout)}
      >
        {showWorkout ? "Hide Workout Details" : "Show Workout Details"}
      </button>
    </section>
  );
}

export default WorkoutControls;