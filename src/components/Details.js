import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillCaretUp } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { TiAttachment } from "react-icons/ti";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import {
  BsEmojiSmile,
  BsEmojiFrown,
  BsFillStopCircleFill,
} from "react-icons/bs";

import classes from "./Details.module.css";

const Details = () => {
  return (
    <>
      <div className={classes.homepage}>
        <section className={classes.mainbody}>
          <Link className={classes.link} to="/homepage">
            Homapage to Auth
          </Link>
          <h1>Practice Time !</h1>
          <h3>English words</h3>
          <span>1/2</span>
          <article>
            <div className={classes.slide}>
              <IoCaretBackOutline />
              <GiRapidshareArrow />
              <IoCaretForwardOutline />
            </div>

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
            <h3>English words</h3>
            <ul className={classes.ulIcons}>
              <li>
                <BsFillStopCircleFill className={classes.iconSquare} />
              </li>
              <li>
                <AiFillPlusCircle className={classes.iconPlus} />
              </li>
            </ul>
          </div>
          <article className={classes.langWrapper}>
            <div className={classes.iconsArticles}>
              <span className={classes.circleIcon}>
                <GoTrashcan className={classes.iconPosition} />
              </span>
              <span className={classes.circleIcon}>
                <TiAttachment className={classes.iconPosition} />
              </span>
            </div>
            <h5>Great</h5>
          </article>
        </section>
      </div>
    </>
  );
};

export default Details;
