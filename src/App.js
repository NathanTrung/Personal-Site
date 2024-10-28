// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './navbar';
import Footer from './footer';
import Projects from './pages/Projects/Projects.js';
import About from './pages/About/About/About.js'
import Welcome from './pages/Welcome/Welcome.js';
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Contact from './pages/Contact/Contact.js'; // Make sure the path is correct

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
const firebaseConfig = {

  apiKey: "AIzaSyDzRM8by5zATtB_GveifmNeGJmytUKDTQM",

  authDomain: "nathantrung.firebaseapp.com",

  projectId: "nathantrung",

  storageBucket: "nathantrung.appspot.com",

  messagingSenderId: "398072243119",

  appId: "1:398072243119:web:f1fe995379031386d5055a",

  measurementId: "G-HFM2HN0JVK"

};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const location = useLocation(); // Get the current location for animations

  return (
    <div>
      <ScrollToTop /> {/* Add ScrollToTop here */}
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
