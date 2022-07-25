import React from "react";
import QuestionsButton from "./QuestionsButton";


export default function Deck(props) {

    const [ icon, setIcon ] = React.useState("");
    const [ counter, setCounter ] = React.useState(0);

    console.log(counter);

    function questionAnswered(icon) {
        setIcon(icon);
        setCounter(counter === 0);
    }

    if(counter === 0) {
        return (
            <QuestionsButton setCounter={setCounter} counter={counter} number={props.questionNumber} icon={props.iconName} icone={icon} />
        )
    } else if(counter === 1) {
        return (
            <FlashcardQuestion>
                <p>{props.listOfQuestions}</p>
                <img onClick={() => setCounter(counter+1)} src="../../assets/img/arrow.svg" alt="" />
            </FlashcardQuestion>
        )
    } else if(counter === 2) {
        return(
            <FlashcardQuestion>
                <p>{props.answerListOfQuestion}</p>
                <div className="button-answers">
                    <button onClick={() => questionAnswered("close-circle")}>Não lembrei</button>
                    <button onClick={() => questionAnswered("help-circle")}>Quase não lembrei</button>
                    <button onClick={() => questionAnswered("checkmark-circle")}>Zap!</button>
                </div>
            </FlashcardQuestion>
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
