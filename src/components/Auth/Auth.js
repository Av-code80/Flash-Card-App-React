import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectAuth } from './authSlice'
import classes from './Auth.module.css'


const Auth = () => {

  const {isAuthenticated} = useSelector(selectAuth);

  const dispatch = useDispatch() 
    const loginHandler = (event) => {
      event.preventDefault()
      dispatch(login())
}
return (
  <>
    <Link to="/homepage" className={classes.link}>
      Auth to Homepage
    </Link>
    <main className={classes.auth}>
      <section>
        <form onClick={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>{!isAuthenticated ? "Login" : "In Process..."}</button>
        </form>
      </section>
    </main>
  </>
);
}

export default Auth
