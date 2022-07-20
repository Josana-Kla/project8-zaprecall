export default function Deck() {
    return(
        <div className="content flex-center">
            <div> 
                <header>
                    <img src="../../public/assets/img/small-logo.png" alt="logo" />
                </header>
                <div className="flashcards">
                    <div className="flashcard">
                        <h2>Pergunta 1</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3>0/4 CONCLUÍDOS</h3>
                    <p>testando outros</p>
                </div>
            </div>
        </div>
    )
}