import React, { useState } from 'react';
import CustomGrid from './components/CustomGrid';
import JsonData from './data/data_full.json';

function App() {
  const [list, setList] = useState(JsonData.data);

  return (
    <div className="App">
      <CustomGrid list={list}></CustomGrid>
    </div>
  );
}

export default App;
