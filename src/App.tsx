import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StarWarsShipsList from './components/StarWarsShipsList/StarWarsShipsList';

function App() {
  return (
    <div className="app">
      <StarWarsShipsList />
    </div>
  );
}

export default App;
