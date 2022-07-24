export default function QuestionsButton(props) {
    return(
        <button onClick={() => props.setQuestionP(!props.questionP)} className="flex-center">
            <h2>Pergunta {props.number}</h2>
            <img src={props.image} alt="" />
        </button>
    )
}