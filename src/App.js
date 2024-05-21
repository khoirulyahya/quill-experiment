import logo from './logo.svg';
import './App.css';
import ReactQuill from 'react-quill';
import React, { Fragment, useState } from 'react';
import 'react-quill/dist/quill.snow.css';


function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
}

export default App;