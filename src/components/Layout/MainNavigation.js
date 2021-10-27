import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Assests/logo.png"
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header >
      {/* <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav> */}
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div class="container">
    <Link class="navbar-brand " to="/"><img src={logo} alt="" srcset="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      {!isLoggedIn && (
        <li class="nav-item">
        <Link to='auth' class="text-white nav-link">Login</Link>
        </li>
      )}
      
       {isLoggedIn && (
        <li class="nav-item ">
        <Link to='/profile' class="text-white nav-link">Profile</Link>
        </li>
       )}
      </ul>
      <div class="d-flex">
        
        <button class="btn bg-white" onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  </div>
</nav>
    </header>
  );
};

export default MainNavigation;
