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
import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";


import classes from "./Details.module.css";
import { current } from "immer";


const Details = (props) => {
  const [category, setCategory] = useState({});
  const [editCardStatus, setEditCardStatus] = useState(false);
  const [currentCardID, setCurrentCardID] = useState(-1);
  const [questionInput, setQuestionInput] = useState();
  const [answerInput, setAnswerInput] = useState();

  const id = props.match.params.id;

  useEffect(() => {
    //console.log(categoriesDetails[id]);
    const categoryDetails = dataStorageToObject();

    setCategory(categoryDetails[id]);
    // console.log(categoriesDetails);
    // const category = _.mapKeys(categoriesDetails, "id"); // take an array of obj and defin by which key turning an object
    // console.log(category);
    // //console.log(categoriesDetails);
  }, []);

  const handlerAddCard = () => {
    let categoryTemp = { ...category };
    let cards = categoryTemp.cards;
    console.log(cards);

    const initCard = {
      id: uuidv4(),
      question: "",
      answer: "",
    };
    cards.push(initCard);
    categoryTemp.cards = cards;
    setCategory(categoryTemp);

    const data = dataStorageToObject();
    data[id] = categoryTemp
   localStorage.setItem("categories", JSON.stringify(Object.values(data)))
   //console.log(Object.values(data));
  };
  const dataStorageToObject = () => {
   let categoriesDetails = JSON.parse(localStorage.getItem("categories"));
    return _.mapKeys(categoriesDetails, "id");

  };

const handlerEditCard = (event, currentId, currentQuestion, currentAnswer) => {
  event.stopPropagation()
  setEditCardStatus(true)
  setCurrentCardID(currentId)
  setQuestionInput(currentQuestion)
  setAnswerInput(currentAnswer)
  
}

const handlerShowCard = (showId) => {
  setEditCardStatus(false)
  setCurrentCardID(showId)
}

const handlerOnSubmitCard = (event) => {
  event.preventDefault();
  const categoryDetails = { ...dataStorageToObject() };
  let cards = [...categoryDetails[id]["cards"]];
  cards = _.mapKeys(cards, "id");
  let card = cards[currentCardID];
  card["question"] = questionInput;
  card["answer"] = answerInput;
  cards[currentCardID] = card;
  categoryDetails[id]["cards"] = cards;

  console.log(JSON.stringify(Object.values(categoryDetails))); // delet ids and return array, values in an array
  let categories = JSON.parse(localStorage.getItem("categories"));
  categories = _.mapKeys(categories, "id");
  categories[id] = Object.values(categoryDetails);

  localStorage.setItem(
    "categories",JSON.stringify(Object.values(categories))
  );
}
  //console.log(Object.hasOwnProperty(category, "name"));
  //console.log(category);
  if (!category.hasOwnProperty("name")) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={classes.homepage}>
        <section className={classes.mainbody}>
          <Link className={classes.link} to="/homepage">
            Homapage to Auth
          </Link>

          {currentCardID == -1 ? (
            <div>Select a card</div>
          ) : editCardStatus == true ? (
            <div>
              <h1>Edit card</h1>
              <form onSubmit={handlerOnSubmitCard}>
               <div>
                 <label htmlFor="question">question:</label>
                 <input value={questionInput} type="text" id="question"
                 onChange={(event) => setQuestionInput(event.target.value)}
                 />
               </div>
               <div>
                 <label htmlFor="answer">answer</label>
                 <input value={answerInput} type="text" id="answer" 
                 onChange={(event) => setAnswerInput(event.target.value)}/>
               </div>
               <div>
                 <button >Submit</button>
               </div>

              </form>
            </div>
          ) : (
            <div>
              <h1>Practice Time !</h1>

              <h3>{category.name}</h3>

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
                  <BsEmojiFrown className={classes.buttonIcon} /> I don't know
                  it
                </button>
              </article>
            </div>
          )}
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
                <AiFillPlusCircle
                  onClick={handlerAddCard}
                  className={classes.iconPlus}
                />
              </li>
            </ul>
          </div>

          {category.cards.map(({ id, question, answer }) => {
            return (
              <article
                onClick={() => handlerShowCard(id)}
                key={id}
                className={classes.langWrapper}
              >
                <div className={classes.iconsArticles}>
                  <span className={classes.circleIcon}>
                    <GoTrashcan className={classes.iconPosition} />
                  </span>
                  <span className={classes.circleIcon}>
                    <TiAttachment
                      onClick={(event) => handlerEditCard(event, id, question, answer)}
                      className={classes.iconPosition}
                    />
                  </span>
                </div>
                <h5>{question}</h5>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Details;
