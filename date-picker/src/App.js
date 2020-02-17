import React from 'react';
import './App.css';
import MyDatePicker from './MyDatePicker/MyDatePicker';

function onChange(timestamp) {
  console.log("Timestamp: ", timestamp);
}

function App() {
  return (
    <div className="App">
      <MyDatePicker onChange={onChange}/>MyDatePicker
    </div>
  );
}

export default App;