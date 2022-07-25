import React from "react";
import QuestionsButton from "./QuestionsButton";


export default function Deck( {
    answerListOfQuestion,
    iconName,
    listOfQuestions,
    questionNumber
 } ) {

    const [ icon, setIcon ] = React.useState("");
    const [ counter, setCounter ] = React.useState(0);

    console.log(counter);

    function questionAnswered(icon) {
        setIcon(icon);
        setCounter(counter+1);
    }

    if(counter === 0) {
        return (
            <QuestionsButton setCounter={setCounter} counter={counter} number={questionNumber} icon={iconName} icone={icon} />
        )
    } else if(counter === 1) {
        return (
            <FlashcardQuestion>
                <p>{listOfQuestions}</p>
                <img onClick={() => setCounter(counter+1)} src="../../assets/img/arrow.svg" alt="" />
            </FlashcardQuestion>
        )
    } else if(counter === 2) {
        return(
            <FlashcardQuestion>
                <p>{answerListOfQuestion}</p>
                <div className="button-answers">
                    <button onClick={() => questionAnswered("close-circle")}>Não lembrei</button>
                    <button onClick={() => questionAnswered("help-circle")}>Quase não lembrei</button>
                    <button onClick={() => questionAnswered("checkmark-circle")}>Zap!</button>
                </div>
            </FlashcardQuestion>
        )
    } else if(counter === 3) {
        return (
            <QuestionsButton setCounter={setCounter} counter={counter} number={questionNumber} icon={icon} />
        )
    }
}

function FlashcardQuestion(props) {
    return (
        <div className="question">
            {props.children}
        </div>
    )
}
