import React from 'react';
import QuestionFilter from './components/QuestionFilter/QuestionFilter';

import './App.css';

function App() {


  return (
    <div className="App">
      <h1>Trivia</h1>
      <div>
        <h2>What kind of questions would you like?</h2>
        <QuestionFilter />
      </div>
    </div>
  );
}

export default App;
