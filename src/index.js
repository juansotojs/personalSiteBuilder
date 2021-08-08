import { even } from 'check-types';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import Site from './site';
import './style.css';

const App = () => {
    const [user, setUser] = useState({});
    const [formDone, setFormDone] = useState(false);
      return <div className="app">
      { formDone ? <Site user={user} setUser={setUser} setFormDone={setFormDone}/> : <Form user={user} setUser={setUser} setFormDone={setFormDone}/> }
      </div>
    }

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
