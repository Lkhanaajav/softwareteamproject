import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./elements/Footer";
import Navigation from "./elements/navigation";
import ScrollToTop from "./helper/ScrollToTop";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import EventDetail from "./screens/EventDetail";
import Event from "./screens/Events";
import Home from "./screens/Home";
import Login from "./screens/Login";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Event />} />
          <Route path="/event-detail" element={<EventDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
