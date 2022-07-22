export default function Deck() {
    return(
        <div>
            <div className="content flex-center"> 
                <header className="flex-center">
                    <img src="../../public/assets/img/small-logo.png" alt="logo" />
                </header>
                <div className="flashcards flex-center">
                    <button className="flex-center">
                        <h2>Pergunta 1</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </button>
                    <button className="flex-center">
                        <h2>Pergunta 1</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </button>
                </div>
            </div>

            <footer className="flex-center">
                <div className="content-bottom">
                    <h3>0/4 CONCLUÍDOS</h3>
                    <p>testando outros</p>
                </div>
            </footer>
        </div>
    )
}