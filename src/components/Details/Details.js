import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillCaretUp } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import {
  BsEmojiSmile,
  BsEmojiFrown,
  BsFillStopCircleFill,
} from "react-icons/bs";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import classes from "./Details.module.css";

const Details = (props) => {
  const [category, setCategory] = useState({});
  const [editCardStatus, setEditCardStatus] = useState(false);
  const [currentCardID, setCurrentCardID] = useState(-1);
  const [questionInput, setQuestionInput] = useState();
  const [answerInput, setAnswerInput] = useState();
  //const [currentCard, setCurrentCard] = useState();

  const id = props.match.params.id;

  const dataStorageToObject = () => {
    let categoriesDetails = JSON.parse(localStorage.getItem("categories"));
    return _.mapKeys(categoriesDetails, "id");
  };

  useEffect(() => {
    const categoryDetails = dataStorageToObject();
    setCategory(categoryDetails[id]);
  }, [id]);

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
    data[id] = categoryTemp; //?
    localStorage.setItem("categories", JSON.stringify(Object.values(data)));
  };

  const handlerEditCard = (
    event,
    currentID,
    currentAnswer,
    currentQuestion
  ) => {
    event.stopPropagation();
    setEditCardStatus(true);
    setCurrentCardID(currentID);
    setAnswerInput(currentAnswer);
    setQuestionInput(currentQuestion);
    console.log(currentCardID, currentQuestion, currentAnswer);
  };

  const handlerShowCard = (showId) => {
    setCurrentCardID(showId);
    setEditCardStatus(false);
  };

  // useEffect(() => {
  //   const card = _.mapKeys(category["cards"], "id")[currentCardID]; // defin current cart Id
  //   console.log(card, "***");
  //   setCurrentCard(card); // save in our state -- we have data of current cart
  // }, [category, currentCardID]);

    // const handlerOnSubmitCard = (event) => {
    //   event.preventDefault();
    //   const categories = { ...dataStorageToObject() };
    //   let cards = [...categories[id]["cards"]];
    //   cards = _.mapKeys(cards, "id");
    //   cards[currentCardID]["question"] = questionInput;
    //   cards[currentCardID]["answer"] = answerInput;
    //   categories[id]["cards"] = Object.values(cards);

    //   localStorage.setItem(
    //     "categories",
    //     JSON.stringify(Object.values(categories))
    //   );
    //   setCategory(categories[id]);
    //   handlerShowCard(currentCardID);
    // };

  if (!category.hasOwnProperty("name")) {
    return <div className={classes.categoryHasOwnProperty}>Loading...</div>;
  }
  console.log(Object.hasOwnProperty(category, "name")); // writable

  return (
    <>
      <div className={classes.homepage}>
        <section className={classes.mainbody}>
          <Link className={classes.link} to="/homepage">
            Homapage to Auth
          </Link>
          {currentCardID === -1 ? (
            <div className={classes.cardSelection}>
              Select a Card from sidebar
            </div>
          ) : editCardStatus === true ? (
            <div>
              <h1>Edit card</h1>
              <form >
                <div className={classes.control}>
                  <label htmlFor="question">question</label>
                  <input
                    value={questionInput}
                    type="text"
                    id="question"
                    onChange={(event) => setQuestionInput(event.target.value)}
                  />
                </div>
                <div className={classes.control}>
                  <label htmlFor="answer">answer</label>
                  <input
                    value={answerInput}
                    type="text"
                    id="answer"
                    onChange={(event) => setAnswerInput(event.target.value)}
                  />
                </div>
                <div>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h1>Practice Time !</h1>
              <h3>hh</h3>
              <span>1</span>

              <article>
                <div className={classes.slide}>
                  <div className={classes.slideScript}>
                   
                  </div>
                  <div className={classes.slideScript}>
                 
                  </div>
                  <div>
                    <span className={classes.slideArrow}>
                      <GiRapidshareArrow />
                    </span>
                    <div>
                      <span className={classes.slideBack}>
                        <IoCaretBackOutline />
                      </span>
                      <span className={classes.slideNext}>
                        <IoCaretForwardOutline />
                      </span>
                    </div>
                  </div>
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
          {category.cards.map(({ id, answer, question }) => {
            return (
              <article
                onClick={() => handlerShowCard(id)}
                key={id}
                className={classes.langWrapper}
              >
                <div className={classes.iconsArticles}>
                  <span className={classes.circleIcon}>
                    <FiEdit
                      onClick={(event) =>
                        handlerEditCard(event, answer, question)
                      }
                      className={classes.iconPosition}
                    />
                  </span>
                  <span className={classes.circleIcon}>
                    <GoTrashcan className={classes.iconPosition} />
                  </span>
                </div>
                <h5>HH</h5>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Details;

// import { Link } from "react-router-dom";
// import { AiFillPlusCircle, AiFillCaretUp } from "react-icons/ai";
// import { GoTrashcan } from "react-icons/go";
// import { FiEdit } from "react-icons/fi";
// import { GiRapidshareArrow } from "react-icons/gi";
// import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
// import { BsEmojiSmile, BsEmojiFrown, BsFillStopCircleFill} from "react-icons/bs";
// import _ from "lodash";
// import { v4 as uuidv4 } from "uuid";
// import { useEffect, useState } from "react";
// import classes from "./Details.module.css";

// const Details = (props) => {
//   const [category, setCategory] = useState({});
//   const [editCardStatus, setEditCardStatus] = useState(false);
//   const [currentCardID, setCurrentCardID] = useState(-1);
//   const [questionInput, setQuestionInput] = useState();
//   const [answerInput, setAnswerInput] = useState();
//   const [currentCard, setCurrentCard] = useState();

//   const id = props.match.params.id;

//   const dataStorageToObject = () => {
//     let categoriesDetails = JSON.parse(localStorage.getItem("categories"));
//     return _.mapKeys(categoriesDetails, "id"); // take an array of obj and defin by which key turning an object
//   };

//   useEffect(() => {
//     // console.log(categoriesDetails[id]);
//     const categoryDetails = dataStorageToObject(); //?

//     setCategory(categoryDetails[id]);
//   }, [id]);

//   const handlerAddCard = () => {
//     let categoryTemp = { ...category };
//     let cards = categoryTemp.cards; //?
//     //console.log(cards);

//     const initCard = {
//       id: uuidv4(),
//       question: "",
//       answer: "",
//     };
//     cards.push(initCard);
//     categoryTemp.cards = cards; //?
//     setCategory(categoryTemp);

//     const data = dataStorageToObject(); //?
//     data[id] = categoryTemp; //?
//     localStorage.setItem("categories", JSON.stringify(Object.values(data))); //?
//   };

//   const handlerEditCard = (
//     event,
//     currentId,
//     currentQuestion,
//     currentAnswer
//   ) => {
//     event.stopPropagation();
//     setEditCardStatus(true);
//     setCurrentCardID(currentId);
//     setQuestionInput(currentQuestion);
//     setAnswerInput(currentAnswer);
//     console.log(currentId, currentAnswer, currentQuestion);
//   };

//   const handlerShowCard = (showId) => {
//     setEditCardStatus(false);
//     setCurrentCardID(showId);
//   };

//   useEffect(() => {
//     const card = _.mapKeys(category["cards"], "id")[currentCardID]; // defin current cart Id
//     console.log(card, "***");
//     setCurrentCard(card); // save in our state -- we have data of current cart
//   }, [category, currentCardID]);

//   const handlerOnSubmitCard = (event) => {
//     event.preventDefault();
//     const categories = { ...dataStorageToObject() };
//     let cards = [...categories[id]["cards"]];
//     cards = _.mapKeys(cards, "id");
//     cards[currentCardID]["question"] = questionInput;
//     cards[currentCardID]["answer"] = answerInput;
//     categories[id]["cards"] = Object.values(cards);

//     localStorage.setItem(
//       "categories",
//       JSON.stringify(Object.values(categories))
//     );
//     setCategory(categories[id]);
//     handlerShowCard(currentCardID);
//   };

//   const handlerRemoveCard = (event, currentId) => {
//     event.stopPropagation();
//     setEditCardStatus(false);
//     setCurrentCardID(currentId);
//     const categories = dataStorageToObject(); // it returnes an object
//     let cards = _.mapKeys(categories[id]["cards"], "id");
//     cards = _.omit(cards, [currentId]);
//      categories[id]["cards"] = Object.values(cards); // turn into array again for saving
//      localStorage.setItem("categories",JSON.stringify(Object.values(categories))
//     );
//     setCategory(categories[id]);
//     setCurrentCardID(-1);
//   };

//   console.log(Object.hasOwnProperty(category, "name")); // writable
//   if (!category.hasOwnProperty("name")) {
//     return <div className={classes.categoryHasOwnProperty}>Loading...</div>;
//   }

//   return (
//     <>
//       <div className={classes.homepage}>
//         <section className={classes.mainbody}>
//           <Link className={classes.link} to="/homepage">
//             Homapage to Auth
//           </Link>

//           {currentCardID === -1 ? (
//             <div className={classes.cardSelection}>
//               Select a Card from sidebar
//             </div>
//           ) : editCardStatus === true ? (
//             <div>
//               <h1>Edit card</h1>
//               <form onSubmit={handlerOnSubmitCard}>
//                 <div className={classes.control}>
//                   <label htmlFor="question">question</label>
//                   <input
//                     value={questionInput}
//                     type="text"
//                     id="question"
//                     onChange={(event) => setQuestionInput(event.target.value)}
//                   />
//                 </div>
//                 <div className={classes.control}>
//                   <label htmlFor="answer">answer</label>
//                   <input
//                     value={answerInput}
//                     type="text"
//                     id="answer"
//                     onChange={(event) => setAnswerInput(event.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <button>Submit</button>
//                 </div>
//               </form>
//             </div>
//           ) : (
//             currentCard && (
//               <div>
//                 <h1>Practice Time !</h1>
//                 <h3>{category.name}</h3>

//                 <span>1</span>
//                 <article>
//                   <div className={classes.slide}>
//                     <div className={classes.slideScript}>
//                       {`Q : ${currentCard.question}`}
//                     </div>
//                     <div className={classes.slideScript}>
//                       {`A : ${currentCard.answer}`}
//                     </div>
//                     <div>
//                       <span className={classes.slideArrow}>
//                         <GiRapidshareArrow />
//                       </span>
//                       <div>
//                         <span className={classes.slideBack}>
//                           <IoCaretBackOutline />
//                         </span>
//                         <span className={classes.slideNext}>
//                           <IoCaretForwardOutline />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <button>
//                     <BsEmojiSmile className={classes.buttonIcon} /> I know it
//                   </button>
//                   <button>
//                     <BsEmojiFrown className={classes.buttonIcon} /> I don't know
//                     it
//                   </button>
//                 </article>
//               </div>
//             )
//           )}
//         </section>
//         <section className={classes.aside}>
//           <AiFillCaretUp className={classes.fillCarteUp} />

//           <div className={classes.headAside}>
//             <h3>English words</h3>
//             <ul className={classes.ulIcons}>
//               <li>
//                 <BsFillStopCircleFill className={classes.iconSquare} />
//               </li>
//               <li>
//                 <AiFillPlusCircle
//                   onClick={handlerAddCard}
//                   className={classes.iconPlus}
//                 />
//               </li>
//             </ul>
//           </div>
//           {category.cards.map(({ id, question, answer }) => {
//             return (
//               <article
//                 onClick={() => handlerShowCard(id)}
//                 key={id}
//                 className={classes.langWrapper}
//               >
//                 <div className={classes.iconsArticles}>
//                   <span className={classes.circleIcon}>
//                     <FiEdit
//                       onClick={(event) =>
//                         handlerEditCard(event, id, question, answer)
//                       }
//                       className={classes.iconPosition}
//                     />
//                   </span>
//                   <span
//                     className={classes.circleIcon}
//                     onClick={(event) => handlerRemoveCard(event, id)}
//                   >
//                     <GoTrashcan className={classes.iconPosition} />
//                   </span>
//                 </div>
//                 <h5>{question}</h5>
//               </article>
//             );
//           })}
//         </section>
//       </div>
//     </>
//   );
// };

// export default Details;
