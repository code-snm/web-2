import React, { useEffect, useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";

const App = () => {
  const [count, setCount] = useState(1); // State for the counter
  const [loading, setLoading] = useState(true); // State to control loader visibility

  useEffect(() => {
    if (loading) {
      const duration = 5000; // Total loader duration (2 seconds)
      const targetCount = 1500; // Count target
      const intervalTime = duration / targetCount; // Interval for increment

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < targetCount) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, intervalTime);

      // Remove the loader after 2 seconds
      const timeout = setTimeout(() => {
        setLoading(false);
      }, duration);

      // Cleanup
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div id="preloader" style={styles.preloader}>
          <div style={styles.loader}>
            <p style={styles.count}>{count}</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />
        </div>
      )}
    </>
  );
};

// Styles for the loader
const styles = {
  preloader: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loader: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#fff",
  },
  count: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};

export default App;
