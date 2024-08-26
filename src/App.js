import React from 'react';
import './App.css';
import { Header, About, Projects, Contact } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;