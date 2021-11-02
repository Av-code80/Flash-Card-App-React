import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillCaretUp } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={classes.homepage}>
        <section className={classes.mainbody}>
          <Link className={classes.link} to="/details/:id">
            Homapage to Auth
          </Link>
          <h1>Practice Time !</h1>
          <h3>English words</h3>
          <span>1/2</span>
          <article>
            <div className={classes.slide}></div>
            <button>
              <BsEmojiSmile className={classes.buttonIcon} /> I know it
            </button>
            <button>
              <BsEmojiFrown className={classes.buttonIcon} /> I don't know it
            </button>
          </article>
        </section>
        <section className={classes.aside}>
          <AiFillCaretUp className={classes.fillCarteUp} />
          <div className={classes.headAside}>
            <h3>Flashcarrds</h3>
            <span>
              <AiFillPlusCircle className={classes.iconPlus} />
            </span>
          </div>
          <article className={classes.langWrapper}>
            <h2>English words</h2>
            <h5>Add cards</h5>
            <div className={classes.iconsArticles}>
              <span>
                <GoTrashcan />
              </span>
              <span>
                <FiLogIn />
              </span>
            </div>
          </article>
          <article className={classes.devWrapper}>
            <h2>JavaScript Methods</h2>
            <h5>Add cards</h5>
            <div className={classes.iconsArticles}>
              <span>
                <GoTrashcan />
              </span>
              <span>
                <FiLogIn />
              </span>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Homepage;
