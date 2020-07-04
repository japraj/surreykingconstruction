import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { Display } from "./components/display/Display";
import { Services } from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div id="App">
      <Navigation />
      <main>
        <Display />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
