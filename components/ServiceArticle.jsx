import serviceImg from "../assets/General/serviceImg.jpg";

export default function Service() {
    return (
        <article>
            <img src = {serviceImg} alt = "service" />

            <div className = "textHeader">
                <h1>Потребуєте якісного догляду за Вашим Porsche?</h1>
                <h2>Сервісне обслуговування</h2>
            </div>
        </article>
    )
}

