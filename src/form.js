import React from 'react';
//import './bootstrap.css';
const Form = (props) => {
  const user = props.user;
  const setUser = props.setUser;
  const setFormDone = props.setFormDone;
  return<>
    <form onSubmit={(event) => {
      event.preventDefault();
      setFormDone(true);
    }}>
      <label>Name:</label>
      <input type='text' onChange={(event) => 
        setUser({
          ...user,
          ['name']: event.target.value
        })
      }/>
      <label>Career:</label>
      <input type='text' onChange={(event) => 
        setUser({
          ...user,
          ['job']: event.target.value
        })
      }/>
      <label>Mission Statement:</label>
      <input type='text' onChange={(event) => 
        setUser({
          ...user,
          ['mission']: event.target.value
        })
      }/>
      <label>Quote:</label>
      <input type='text' onChange={(event) => 
        setUser({
          ...user,
          ['quote']: event.target.value
        })
      }/>
      <label>Source:</label>
      <input type='text' onChange={(event) => 
        setUser({
          ...user,
          ['source']: event.target.value
        })
      }/>
      <button type='submit'>Submit</button>
    </form>
  </>
}
  export default Form;