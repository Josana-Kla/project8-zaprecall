import Deck from "../components/Deck";


const flashcards = [ 
    { number:"1", image:"../../assets/img/play-outline.svg" },
    { number:"2", image:"../../assets/img/play-outline.svg" },
    { number:"3", image:"../../assets/img/play-outline.svg" },
    { number:"4", image:"../../assets/img/play-outline.svg" },
    { number:"5", image:"../../assets/img/play-outline.svg" },
    { number:"6", image:"../../assets/img/play-outline.svg" },
    { number:"7", image:"../../assets/img/play-outline.svg" },
    { number:"8", image:"../../assets/img/play-outline.svg" }
];

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
                        <Deck questionNumber={flashcard.number} iconName={flashcard.image} /> 
                    ))}
                </div>
            </div>

            <footer className="flex-center">
                <div className="content-bottom">
                    <h3>0/4 CONCLUÍDOS</h3>
                </div>
            </footer>
        </div>
    )
}