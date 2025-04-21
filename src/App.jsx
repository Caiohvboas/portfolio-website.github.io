import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer); // Cleanup function to reset loading state
  }, []);
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
        <Loader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Hero />
            <Services />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
