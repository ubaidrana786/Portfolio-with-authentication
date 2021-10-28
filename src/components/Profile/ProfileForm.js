import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef();
  const EmailInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    const enterednewemail = EmailInputRef.current.value
    // add validation
    https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBwT9kGPZ3VT4I4HF5rDFSeASM9QEczNUs', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        email: enterednewemail,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds!

      history.replace('/');
    });
  };

  return (
    <form  className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
        <label htmlFor='new-password'>Email</label>
        <input type='email' id='new-password' minLength="7" ref={EmailInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
