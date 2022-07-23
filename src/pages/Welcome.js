import React from "react";

import Game from "./Game";

export default function Welcome() {
    const [ nextPage2, setNextPage2 ] = React.useState(true);

    return(
        <>
            { nextPage2 ? (
                <div className="welcome flex-center">
                    <img src="../../assets/img/logo.png" alt="logo" />
                    <h1 className="font-righteous">ZapRecall</h1>
                    <button onClick={() => setNextPage2(!nextPage2)}>Iniciar Recall!</button>
                </div>
            ) : (
                <Game />
            )}
        </>
    )
}