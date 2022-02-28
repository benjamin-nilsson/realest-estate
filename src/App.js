import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import SignIn from "./components/sign_in/SignIn";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Browse from "./components/browse/Browse";
import Contact from "./components/contact/Contact";
import { LoggedInContext } from "./components/general/LoggedInContext";
import { UserContext } from "./components/general/UserContext";

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />
              <Route
                path="/services"
                element={
                  <>
                    <Services />
                  </>
                }
              />
              <Route
                path="/about"
                element={
                  <>
                    <About />
                  </>
                }
              />
              <Route
                path="/browse"
                element={
                  <>
                    <Browse />
                  </>
                }
              />
              <Route
                path="/blog"
                element={
                  <>
                    <Blog isLoggedIn={isLoggedIn} />
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <>
                    <Contact />
                  </>
                }
              />
              <Route
                path="/signin"
                element={
                  <>
                    <SignIn />
                  </>
                }
              />
            </Routes>
            <Footer />
          </UserContext.Provider>
        </LoggedInContext.Provider>
      </div>
    </Router>
  );
}

export default App;
