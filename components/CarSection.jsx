export default function CarSection() {
    return (
        <section className = "carSection">
            <img src = "/" alt = "Taycan" className = "carImg" />

            <div className = "infoPrice">
                <div className = "carInfo">
                    <a href = "/" className = "headerOfCar">Porsche Taycan</a>

                    <ul className = "infoList">
                        <li>
                            <a href = "/" className = "infoButton">Доступні моделі</a>
                        </li>
                        <li>
                            <a href = "/" className = "infoButton">Конфігуратор</a>
                        </li>
                        <li>
                            <a href = "/" className = "infoButton">Тест-драйв</a>
                        </li>
                    </ul>
                </div>

                <div className = "carPrice">
                    <h3>Ціна:</h3>
                    <h2 id = "price"><span id = "minPrice">100 000</span> - <br />
                        <span id = "maxPrice">250 000</span> $
                    </h2>
                </div>
            </div>
        </section>
    )
}