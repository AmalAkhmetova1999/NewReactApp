import React, { useReducer } from "react";
import "../App.css";
import Progress from "./Progress";
import Question from "./Question";
import Answers from "./Answers";
import QuizContext from "./QuizContext";
import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ
} from "./types";
import quizReducer from "./QuizReducer";

function Quiz() {
  const questions = [
    {
      id: 1,
      question: "What is the name of Fred and George's shop?",
      answer_a: "Weasley's Joke Shop",
      answer_b: "Weasley's Wizard Weezies",
      answer_c: "Weasley's Wizard Wheezes",
      answer_d: "Weasley's Wizard Wheezies",
      correct_answer: "c"
    },
    {
      id: 2,
      question:
        "When going after Voldemort in The Sorcerers Stone, what two tasks were in the book that werent shown in the movie?",
      answer_a: "getting past Fluffy and devil's snare",
      answer_b: "the mirror of Erised and Quirrell",
      answer_c: "chess and the key room",
      answer_d: "the troll and potions riddle",
      correct_answer: "d"
    },
    {
      id: 3,
      question: "What is a popular game at Hogwarts using Wizard cards?",
      answer_a: "Gobstones",
      answer_b: "Self-Shuffling Playing Cards",
      answer_c: "Wizard Chess",
      answer_d: "Exploding Snap",
      correct_answer: "d"
    },
    {
      id: 4,
      question: "What drink makes house-elfs drunk?",
      answer_a: "pumpkinjuice",
      answer_b: "butterbeer",
      answer_c: "single-malt whiskey",
      answer_d: "firewhiskey",
      correct_answer: "b"
    },
    {
      id: 5,
      question: "Brazil here I come...Thanksss amigo. Who said it?",
      answer_a: "A Bushmaster snake",
      answer_b: "An Emerald snake",
      answer_c: "A Boa Constrictor snake",
      answer_d: "A Rattlesnake",
      correct_answer: "c"
    },
    {
      id: 6,
      question: "What teacher did Riddle ask about Horcruxes?",
      answer_a: " Flitwick",
      answer_b: "McGonagal",
      answer_c: "Kettleburn",
      answer_d: "Slughorn",
      correct_answer: "d"
    },
    {
      id: 7,
      question:
        "In The Half-blood Prince, what is causing the misty weather in the middle of July?",
      answer_a: "An enchantment from the Department of Mysteries",
      answer_b: "A concealment charm by Voldemort",
      answer_c: "Dementors breeding",
      answer_d: "One of Snape's potions",
      correct_answer: "c"
    },
    {
      id: 8,
      question: "What is the Goblet of Fire?",
      answer_a: "A cup that selected who competed in the Triwizard Tournament",
      answer_b: "The last challenge",
      answer_c: "A magical drinking vessel",
      answer_d: "A cup in which past events could be seen",
      correct_answer: "a"
    },
    {
      id: 9,
      question: "Who replaces Professor Trelawney in Divination?",
      answer_a: "Bane",
      answer_b: "Firenze",
      answer_c: "Ronan",
      answer_d: "Magorian",
      correct_answer: "b"
    },
    {
      id: 10,
      question:
        "What witch is a Celtic Irish goddess of beauty, the eldest daughter of the last Druid of Ireland?",
      answer_a: "Morgana",
      answer_b: "Cliodna",
      answer_c: "Agrippa",
      answer_d: "Alberic",
      correct_answer: "b"
    }
  ];
  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error: ""
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  const question = questions[currentQuestion];

  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };
  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Failed</span>;
  };

  const renderResultData = () => {
    return answers.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer)}
        </div>
      );
    });
  };
  const restart = () => {
    dispatch({ type: RESET_QUIZ });
  };
  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };
    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: "Please select an option" });
      return;
    }
    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });

    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1
      });
      return;
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };

  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultData()}</ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers />
          <button className="btn btn-primary" onClick={next}>
            Confirm and Continue
          </button>
        </div>
      </QuizContext.Provider>
    );
  }
}
export default Quiz;
