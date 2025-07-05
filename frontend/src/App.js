import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Hero, About, Programs, Facilities, Admissions, Contact, Footer, News, Gallery } from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Programs />
            <Facilities />
            <News />
          </>
        );
      case 'about':
        return <About />;
      case 'programs':
        return <Programs />;
      case 'facilities':
        return <Facilities />;
      case 'admissions':
        return <Admissions />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Programs />
            <Facilities />
            <News />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;