import { Link } from "react-router-dom";
import classes from './Homepage.module.css'

const Homepage = () => {

  
    return (
      <>
        <Link className={classes.homepage} to="/">
         Homapage to Auth
          <div>Choose Your Flash card</div>
        </Link>
      </>
    );
}

export default Homepage
