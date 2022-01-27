import React from 'react';
import './App.css';
import Subscribers from './components/Subscribers';
import Display from './components/Display';
import View from './components/View';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Subscribers />
      <Display />
      <View />
      <Comments />
    </div>
  );
}

export default App;
