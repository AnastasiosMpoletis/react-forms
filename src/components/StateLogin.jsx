import { useState } from "react";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

import Input from "./Input.jsx";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsValid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  const passwordIsValid = didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault(); //prevents the default browser behaviour (send HTTP request)
    console.log('User values: ' + JSON.stringify(enteredValues));

    //TODO we also need validation on submit also
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")} //event when element loses focus
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          error={emailIsValid && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")} //event when element loses focus
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          error={passwordIsValid && 'Please enter a valid password!'}
        />
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
