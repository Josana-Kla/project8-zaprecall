import React from "react";

export default function Deck(props) {
    const [ question, setQuestion ] = React.useState(true);
    const [ arrow, setArrow ] = React.useState(true);

    return (
        <>
            { question ? (
                <button onClick={() => setQuestion(!question)} className="flex-center">
                    <h2>Pergunta {props.questionNumber}</h2>
                    <img src={props.iconName} alt="" />
                </button>
            ) : (
                <FlashcardQuestion>
                    <>
                        { arrow ? (
                            <>
                                <p>O que é JSX?fkjd Lorem ajdaaihdiahfiuehdiasdoi aufhiuahdoiad aodhaiuehfaojdioaohfiua iauhda</p>
                                <img onClick={() => setArrow(!arrow)} src="../../assets/img/arrow.svg" alt="" />
                            </>
                        ) : (
                            <>
                                <p>Oyuiooiuytrdfkytdxcvbnkiuytfdda</p>
                                <div className="button-answers">
                                    <button>Não lembrei</button>
                                    <button>Quase não lembrei</button>
                                    <button>Zap!</button>
                                </div>
                            </>
                        )}
                    </>
                </FlashcardQuestion>
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