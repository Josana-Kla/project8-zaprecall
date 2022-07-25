import React from "react";
import Deck from "../components/Deck";

const flashcards = [ 
    { number:"1", icon:"play-outline", questionAboutProgramming: "O que é JSX?", answerAboutProgramming: "Uma extensão de linguagem do JavaScriptUma extensão de linguagem do JavaScript" },
    { number:"2", icon:"play-outline", questionAboutProgramming: "O React é...", answerAboutProgramming: "Uma biblioteca JavaScript para construção de interfaces" },
    { number:"3", icon:"play-outline", questionAboutProgramming: "Componentes devem iniciar com...", answerAboutProgramming: "Letra maiúscula"  },
    { number:"4", icon:"play-outline", questionAboutProgramming: "Podemos colocar __ dentro do JSX", answerAboutProgramming: "Expressões"  },
    { number:"5", icon:"play-outline", questionAboutProgramming: "O ReactDOM nos ajuda...", answerAboutProgramming: "Interagindo com a DOM para colocar componentes React na mesma" },
    { number:"6", icon:"play-outline",  questionAboutProgramming: "Usamos o npm para...", answerAboutProgramming: "Gerenciar os pacotes necessários e suas dependências" },
    { number:"7", icon:"play-outline", questionAboutProgramming: "Usamos props para...", answerAboutProgramming: "Passar diferentes informações para componentes" },
    { number:"8", icon:"play-outline", questionAboutProgramming: "Usamos estado (state) para...", answerAboutProgramming: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
].sort(shuffle);

function shuffle() {
    return Math.random() - 0.5;
}

export default function Game() {
  

    return(
        <div>
            <div className="content flex-center"> 
                <header className="flex-center">
                    <img src="../../assets/img/small-logo.svg" alt="logo" />
                    <h1 className="font-righteous">ZapRecall</h1>
                </header>
                <div className="flashcards flex-center">
                    {flashcards.map(flashcard => (
                        <Deck questionNumber={flashcard.number} iconName={flashcard.icon} listOfQuestions={flashcard.questionAboutProgramming} answerListOfQuestion={flashcard.answerAboutProgramming}/> 
                    ))}
                </div>
            </div>

            <footer className="flex-center">
                <div className="content-bottom">
                    <h3>0/{flashcards.length} CONCLUÍDOS</h3>
                </div>
            </footer>
        </div>
    )
}