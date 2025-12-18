import { useState } from "react";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTask },
    ]);

    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>Task Dashboard</h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks added yet</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.item}>
              <span>{task.title}</span>
              <button
                onClick={() => removeTask(task.id)}
                style={styles.removeBtn}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  inputRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "8px 12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  removeBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
  },
  empty: {
    color: "#777",
    textAlign: "center",
  },
};
