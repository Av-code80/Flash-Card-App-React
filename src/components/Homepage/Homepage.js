import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillCaretUp } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { FiLogIn } from "react-icons/fi";
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCategoryAsync } from "../../redux/slices/categoriesSlice";
import { v4 as uuidv4 } from "uuid";

//import { useDispatch } from "react-redux";
//import { homepageSliceActions } from "./homepageSlice";

import classes from "./Homepage.module.css";

const Homepage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [currentInput, setCurrentInput] = useState(-1);
  const [enteredName, setEnteredName] = useState(false);
  // const nameInputRef = useRef();

  const handlerChangeName = (index) => {
    setCurrentInput(index);
  };

  const nameInputChangeHandler = (event) => setEnteredName(event.target.value);

  useEffect(() => {
    // for first time array apear
    const res = JSON.parse(localStorage.getItem("categories"));
    setCategoryList(res);
  }, []);

  const dispatch = useDispatch();

  const handlerAddCategories = () => {
    const categories = JSON.parse(localStorage.getItem("categories"));

    const initObj = {
      name: "Change Name",
      description: "Word meaning",
      id: uuidv4(),
      cards: [],
    };
    categories.push(initObj);

    localStorage.setItem("categories", JSON.stringify(categories));
    console.log(categories, localStorage.getItem("categories"));
    setCategoryList(categories);
    dispatch(addCategoryAsync(categories));
  };

  const handlerSaveName = (event) => {
    if (event.key === "Enter") {
      const categories = [...categoryList]; // 1. take a copy from categoryList
      if (categories && categories.length) { //console.log(categories.length, categories);
        console.log(Object.getOwnPropertyDescriptors(categories));
        let category = {...categories[currentInput], name: event.target.value,
      }; // 2. give data by creating a new array by spread op...
      categories[currentInput] = category;
      setCategoryList(categories); // 3. replace all in categoryList by edited value
        setCurrentInput(-1); // for disable edit mode
        event.preventDefault(enteredName);//console.log(enteredName);
        if (enteredName.trim() === "") {
          return;
        }
        localStorage.setItem("categories", JSON.stringify(categories)); // 4. set data in local
      }

      //  const enteredValue = nameInputRef.current.value;
      //  console.log(enteredValue);
      //         setEnteredName("")
    } else return;
  };

  const handlerDeletCategory = (deletIndex) => {
    const list = categoryList.filter((item, index) => {
      return deletIndex !== index;
    });
    setCategoryList(list);

    localStorage.setItem("categories", JSON.stringify(list));
  };
  return (
    <>
      <div className={classes.homepage}>
        <section className={classes.mainbody}>
          <Link to="/" className={classes.link}>
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
            <h3>Flash cards</h3>
            <span onClick={handlerAddCategories}>
              <AiFillPlusCircle className={classes.iconPlus} />
            </span>
          </div>
          {categoryList &&
            categoryList.map(({ id, name }, index) => {
              return (
                <article key={index} className={classes.langWrapper}>
                  {currentInput === index ? (
                    <div>
                      <input
                        className={classes.input}
                        type="text"
                        onKeyPress={handlerSaveName}
                        // ref={nameInputRef}
                        onChange={nameInputChangeHandler}
                        // value={enteredName}
                        placeholder={"Enter a category name"}
                      />
                    </div>
                  ) : (
                    <h2 onClick={() => handlerChangeName(index)}>{name}</h2>
                  )}
                  <h5>Add cards</h5>
                  <div className={classes.iconsArticles}>
                    <span>
                      <GoTrashcan onClick={() => handlerDeletCategory(index)} />
                    </span>
                    <Link to={`/details/${id}`} className={classes.link}>
                      <span key={id}>
                        <FiLogIn />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default Homepage;
