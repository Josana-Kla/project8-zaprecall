export default function QuestionsButton(props) {
    return(
        <button onClick={() => props.setCounter(props.counter+1)} className="flex-center">
            <h2>Pergunta {props.number}</h2>
            <ion-icon name={props.icon} />
        </button>
    )
}