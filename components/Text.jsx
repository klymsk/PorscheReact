export default function Text(props) {
    return (
        <section className = "text">
            <p>{props.title}</p>
            <p>{props.description}</p>
        </section>
    )
}