import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={classes.homepage}>
        <section className={classes.mainbody}>
          <Link to="/">Homapage to Auth </Link>
          <h1>Practice Time !</h1>
          <h3>English words</h3>
          <span>1/2</span>
          <article>
            <div>Slid</div>
            <button>I know it</button>
            <button>I don't know it</button>
          </article>
        </section>
        <section className={classes.aside}>
          <h3>Flashcarrds</h3> <FaBeer />
          <span>Icon plus</span>
          <article>
            <h2>English words</h2>
            <span>Add cards</span>
            <div>rubish icon</div>
            <div>flesh</div>
          </article>
          <article>
            <h2>JavaScript Methods</h2>
            <span>Add cards</span>
            <div>rubish icon</div>
            <div>flesh</div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Homepage;
