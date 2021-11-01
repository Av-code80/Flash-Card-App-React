import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions }from '../store/auth'
import classes from './Auth.module.css'


const Auth = () => {

  const authentified = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch() 
    const loginHandler = (event) => {
      event.preventDefault()
      dispatch(authActions.login())
}
return (
  <>
    <Link to="/homepage" className={classes.link}>Auth to Homepage</Link>
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
          <button>{!authentified ? "Login" : "In Process..."}</button>
        </form>
      </section>
    </main>
  </>
);
}

export default Auth
