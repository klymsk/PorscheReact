import Car from "../assets/General/FooterImg.png"

export default function Footer() {
    return (
        <footer>
            <section className = "menuButtons">
                <a href = "/" className = "footerButton">Всі моделі</a>
                <a href = "/" className = "footerButton">Сервіси</a>
                <a href = "/" className = "footerButton">Аксесуари</a>
                <a href = "/" className = "footerButton">Новинки</a>
                <a href = "/" className = "footerButton">Контакти</a>
            </section>

            <img src = {Car} alt = "footerImg" className = "footerImg" />

            <section className = "menuButtons">
                <a href = "/" className = "footerButton">м. Київ</a>
                <a href = "/" className = "footerButton">вул. Порша 17</a>
                <p className = "footerButton">Пн-Пт: 09:00 - 17:00</p>
                <p className = "footerButton">Сб-Нд: 10:00 - 16:00</p>
        </section>
        </footer>
    )
}