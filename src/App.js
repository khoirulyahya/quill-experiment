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
        <h2>
          This a simple React Quill Editor, try to edit the text below. You can find this repo on my <a href="https://github.com/khoirulyahya/quill-experiment" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Github</a>.
        </h2>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <p>
          Edit <code>src/App.js</code> and save to reload this page use CI pipeline but this change from development will be merge to main.
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
    </div>
  );
}

export default App;
