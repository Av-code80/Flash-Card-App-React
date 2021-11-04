import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillCaretUp } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { homepageSliceActions } from "./homepageSlice";
import { useState, useEffect } from "react";

import classes from "./Homepage.module.css";

const Homepage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [editName, setEditName] = useState(false);
  const [currentInput, setCurrentInput] = useState();


    const handlerChangeName = (index) => {
console.log(index, currentInput);
      setEditName((!editName));

      setCurrentInput(index)

    };

    const renderEditItem = (index, name) => {
      console.log("*", editName, currentInput, index, currentInput == index);
  if(currentInput) {

if (editName && currentInput == index) {
  return <h2 onClick={() => handlerChangeName(index)}>{name}</h2>;
}
  } else {
    
      return <h2 onClick={() => handlerChangeName(index)}>{name}</h2>;

  }
      
    }


  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("categories"));
    setCategoryList(res);
  }, []);

  const dispatch = useDispatch();
  const handlerAddCategories = () => {
    const categories = JSON.parse(localStorage.getItem("categories")); // for turning in array

    const initObj = {
      name: "Change name",
      description: "Change description",
    };
    categories.push(initObj);
    localStorage.setItem("categories", JSON.stringify(categories));

    setCategoryList(categories)

    // dispatch(homepageSliceActions.deserializedObj);
  };

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
            <span onClick={handlerAddCategories}>
              <AiFillPlusCircle className={classes.iconPlus} />
            </span>
          </div>

          {categoryList.map(({name}, index) => {
            return (
              <article key={index} className={classes.langWrapper}>
                <h1>
                  {currentInput}-{index}
                </h1>
                {renderEditItem(index, name)}
                <div>
                  <input type="text" />
                </div>
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
            );
          })}

          {/* <article className={classes.devWrapper}>
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
          </article> */}
        </section>
      </div>
    </>
  );
};

export default Homepage;
