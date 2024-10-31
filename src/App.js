// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';
import Projects from './pages/Projects/Projects.js';
import About from './pages/About/About/About.js'
import Welcome from './pages/Welcome/Welcome.js';
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from './components/ScrollToTop.js'; // Import the ScrollToTop component
import Contact from './pages/Contact/Contact.js'; // Make sure the path is correct
import CustomCursor from './components/customcursor.js';

// Define animation variants for smoother transitions
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

function App() {
  const location = useLocation(); // Get the current location for animations

  return (
    <div>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <CustomCursor />
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.2 }} // Adjusted duration
              >
                <Welcome />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.2 }} // Adjusted duration
              >
                <About />
              </motion.div>
            }
          />
           <Route
            path="/contact"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.2 }} // Adjusted duration
              >
                <Contact />
              </motion.div>
            }          
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.2 }} // Adjusted duration
              >
                <Projects />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

// Wrap App with Router
export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
