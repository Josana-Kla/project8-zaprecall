import React from "react";
import QuestionsButton from "./QuestionsButton";

export default function Deck(props) {
    const [ question, setQuestion ] = React.useState(true);
    const [ arrow, setArrow ] = React.useState(true);

    const [ dontRemember, setDontRemember ] = React.useState(true);
    const [ almostDontRemember, setAlmostDontRemember ] = React.useState(true);
    const [ gotIt, setGotIt ] = React.useState(true);



    function questionAnswered(props) {
        if(!dontRemember) {
            setDontRemember(<QuestionsButton number={props.questionNumber} />)
        } else if(setAlmostDontRemember === !almostDontRemember) {
            <QuestionsButton number={props.questionNumber} />
        } else if(setGotIt === !gotIt) {
            <QuestionsButton number={props.questionNumber} />
        }
    }

    return (
        <>
            { question ? (
                <QuestionsButton setQuestionP={setQuestion} questionP={question} number={props.questionNumber} image={props.iconName}> 
                </QuestionsButton>
            ) : (
                <>
                    { arrow ? (
                        <FlashcardQuestion>
                            <p>O que é JSX?fkjd Lorem ajdaaihdiahfiuehdiasdoi aufhiuahdoiad aodhaiuehfaojdioaohfiua iauhda</p>
                            <img onClick={() => setArrow(!arrow)} src="../../assets/img/arrow.svg" alt="" />
                        </FlashcardQuestion>
                    ) : (
                        <>
                        {  (dontRemember && almostDontRemember && gotIt) ? (
                            <FlashcardQuestion>
                                <p>Oyuiooiuytrdfkytdxcvbnkiuytfdda</p>
                                <div className="button-answers">
                                    <button onClick={() => setDontRemember(!dontRemember)}>Não lembrei</button>
                                    <button onClick={() => setAlmostDontRemember(!almostDontRemember)}>Quase não lembrei</button>
                                    <button onClick={() => setGotIt(!gotIt)}>Zap!</button>
                                </div>
                            </FlashcardQuestion>
                        ) : (
                            <QuestionsButton number={props.questionNumber} />
                        )}
                        </>
                    )}
                </>
               
            )}
        </>
    )
}

function FlashcardQuestion(props) {
    return (
        <div className="question">
            {props.children}
        </div>
    )
}
