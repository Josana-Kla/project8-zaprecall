import Deck from "../components/Deck";


const flashcards = [ 
    { number:"1", image:"../../public/assets/img/play-outline.svg" },
    { number:"2", image:"../../public/assets/img/play-outline.svg" },
    { number:"3", image:"../../public/assets/img/play-outline.svg" },
    { number:"4", image:"../../public/assets/img/play-outline.svg" },
    { number:"5", image:"../../public/assets/img/play-outline.svg" },
    { number:"6", image:"../../public/assets/img/play-outline.svg" },
    { number:"7", image:"../../public/assets/img/play-outline.svg" },
    { number:"8", image:"../../public/assets/img/play-outline.svg" }
];

export default function Game() {
    return(
        <div>
            <div className="content flex-center"> 
                <header className="flex-center">
                    <img src="../../public/assets/img/small-logo.png" alt="logo" />
                </header>
                {flashcards.map(flashcard => (
                    <Deck questionNumber={flashcard.number} iconName={flashcard.image} /> ))}
            </div>

            <footer className="flex-center">
                <div className="content-bottom">
                    <h3>0/4 CONCLUÍDOS</h3>
                </div>
            </footer>
        </div>
    )
}