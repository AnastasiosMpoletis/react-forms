import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(event) {
    event.preventDefault(); //prevents the default browser behaviour (send HTTP request)
    console.log('User values: ' + JSON.stringify(enteredValues));
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        {/** 
         * Buttons in <form> will generate an HTTP request to the server. 
         * We can prevent it with: 
         * 1. type="button" attribute. Default is type="submit".
         * 2. Preffered solution - Not having an onClick funtion and move it to <form onSubmit={}> with event.preventDefault();
         */}
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
