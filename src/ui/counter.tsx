import React from "react";
import { useCounter } from "../hooks/use-counter";
import { useToggle } from "../hooks/use-toggle";

const styles = {
  container: (isDarkMode: boolean): React.CSSProperties => ({
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    transition: "background-color 0.3s, color 0.3s",
    padding: "16px",
  }),
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  } as React.CSSProperties,
  button: (bgColor: string): React.CSSProperties => ({
    padding: "8px 16px",
    backgroundColor: bgColor,
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "8px",
    transition: "background-color 0.3s",
  }),
};

function Counter() {
  const { count, increment } = useCounter();
  const [isDarkMode, toggleDarkMode] = useToggle();

  return (
    <div style={styles.container(isDarkMode)}>
      <h1 style={styles.heading}>Counter: {count}</h1>
      <button onClick={increment} style={styles.button("blue")}>
        Increment
      </button>
      <button onClick={toggleDarkMode} style={styles.button("gray")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Counter;
