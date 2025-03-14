import ellipse from "../assets/EllipseArticle.png"
import mainPhoto from "../assets/General/MainPhoto1.png"

export default function Article() {
    return (
        <article>
            <a href = "/" className = "articleTxt">
                <h1>Porsche 911</h1>
                <h2>New 2025</h2>
            </a>

            <img src = {mainPhoto} alt = "photo" className = "mainPhoto" />

            <div className = "ellipses">
                <img src = {ellipse} alt = "ellipse1" className = "ellipseMain ellipse1" />
                <img src = {ellipse} alt = "ellipse1" className = "ellipseMain ellipse1" />
                <img src = {ellipse} alt = "ellipse1" className = "ellipseMain ellipse1" />
                <img src = {ellipse} alt = "ellipse1" className = "ellipseMain ellipse1" />
            </div>
        </article>
    )
}