import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import Countercontext from './Countercontext';

function App() {
  let countState = useState(1) //[count, SetCount]

  return (
    <Countercontext.Provider value={countState}>
     <div>
       <Parent />
     </div>
    </Countercontext.Provider>
  );
}

export default App;
