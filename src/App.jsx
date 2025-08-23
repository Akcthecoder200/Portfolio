import React, { useState, useEffect, createContext } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  // Add this effect to update <html> class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-md"
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
