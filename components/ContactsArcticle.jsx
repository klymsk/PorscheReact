import Footer from "./Footer"
import Porsche911 from "../assets/Porsche 911/porsche911Contacts.png"
import Porsche911_2 from "../assets/Porsche 911/porsche911Contacts2.png"

export default function Contacts() {
    return (
        <article>
            <section className = "generalBlock">
                <h1>Контакти офіційного представника Porsche</h1>

                <ul>
                    <li>
                        <label>країна</label>
                        <p>Німеччина</p>
                    </li>

                    <li>
                        <label>холдингова компанія</label>
                        <p>Volkswagen</p>
                    </li>

                    <li>
                        <label>місто</label>
                        <p>Штутгарт</p>
                    </li>

                    <li>
                        <label>вулиця</label>
                        <p>Порша 7</p>
                    </li>
                </ul>

                <div class = "map" id = "map1">
                    
                </div>

                <img src = {Porsche911} alt = "Porsche" />
            </section>

            <section className = "generalBlock">
                <h1>Контакти офіційного представника Porsche</h1>

                <ul>
                    <li>
                        <label>країна</label>
                        <p>Україна</p>
                    </li>

                    <li>
                        <label>холдингова компанія</label>
                        <p>Volkswagen</p>
                    </li>

                    <li>
                        <label>місто</label>
                        <select id = "citySelect">
                            <option value = "Kyiv">Київ</option>
                            <option value = "Lviv">Львів</option>
                            <option value = "Odesa">Одеса</option>
                            <option value = "Kharkiv">Харків</option>
                        </select>
                    </li>

                    <li>
                        <label>вулиця</label>
                        <p id = "street">Порша 17</p>
                    </li>
                </ul>

                <div class = "map" id = "map2">
                    
                </div>

                <img src = {Porsche911_2} alt = "Porsche" />
            </section>
        </article>
    )
}