import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  // downside with refs is that reseting them is tricky and we will need a lot of refs for every input fields.
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); //prevents the default browser behaviour (send HTTP request)

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    
    setEmailIsInvalid(false);
    console.log('Sending HTTP request...');
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
            ref={email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
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
