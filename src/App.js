// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddGroup from './AddGroup'; // Import AddGroup component
import DisplayGroups from './DisplayGroups'; // Import DisplayGroups component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddGroup />} /> {/* Route to AddGroup page */}
        <Route path="/display-groups" element={<DisplayGroups />} /> {/* Route to DisplayGroups page */}
      </Routes>
    </Router>
  );
}

export default App;
