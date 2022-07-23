export default function Deck(props) {
    return (
        <button className="flex-center">
            <h2>Pergunta {props.questionNumber}</h2>
            <img src={props.iconName} alt=""></img>
        </button>
    )
}