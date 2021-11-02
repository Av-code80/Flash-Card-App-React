import { useSelector, useDispatch } from "react-redux";
import classes from "./HeaderLogout.module.css";
import { authActions } from "../store/auth";

const HeaderLogout = () => {
  const Authentified = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>FLASH CARD APP</h1>
      {Authentified ? (
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : (
        <div className={classes.flashcardHeader}>UI FLASH CARD</div>
      )}
    </header>
  );
};
export default HeaderLogout;
