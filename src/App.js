import React, { useState } from 'react';
import QuestionFilter from './components/QuestionFilter/QuestionFilter';
import Quiz from './components/Quiz';

import './App.css';

function App() {

  const [route, setRoute] = useState('home')

  const onRouteChange = newRoute => {
    setRoute(newRoute)
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
      {
        route === 'home' 
        ?
        <div>
          <h2>What kind of questions would you like?</h2>
          <QuestionFilter onRouteChange={onRouteChange} />
        </div>
        :
        <Quiz />
      }
    </div>
  );
}

export default App;
