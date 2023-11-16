import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Trigger animation on route changes
    setAnimate(true);

    // Reset animation state after the animation duration
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Header />
      <main className={`${animate ? "fade-in" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
