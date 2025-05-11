import { useInput } from "../hooks/useInput.js";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

import Input from "./Input.jsx";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  /** moved to {@link ../hooks/userInput.js} */
  // const [enteredValues, setEnteredValues] = useState({
  //   email: '',
  //   password: ''
  // });

  /** moved to {@link ../hooks/userInput.js} */
  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  // const emailIsValid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  // const passwordIsValid = didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault(); //prevents the default browser behaviour (send HTTP request)

    if (emailHasError || passwordHasError) {
      console.log('Error in form.');
      return;
    }

    console.log('Email value: ' + emailValue + '\nPassword value: ' + passwordValue);
  }

  /** moved to {@link ../hooks/userInput.js} */
  // function handleInputChange(identifier, value) {
  //   setEnteredValues(prevValues => ({
  //     ...prevValues,
  //     [identifier]: value
  //   }));

  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: false
  //   }));
  // }

  /** moved to {@link ../hooks/userInput.js} */
  // function handleInputBlur(identifier) {
  //   setDidEdit(prevEdit => ({
  //     ...prevEdit,
  //     [identifier]: true
  //   }));
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur} //event when element loses focus
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur} //event when element loses focus
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
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
