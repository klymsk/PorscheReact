import logo from "../assets/General/mainLogoPhone.png";

export default function Header() {
    return (
        <header id = "header">
            <a href = "/" className = "logo">
                <img src = {logo} alt = "Porsche Logo" className = "main-ico" />
            </a>

            <nav>
                <ul className = "nav-list">
                    <li>
                        <a href = "#" className = "navButton">Моделі</a>
                    </li>
                    <li>
                        <a href = "#" className = "navButton">Контакти</a>
                    </li>
                    <li>
                        <a href = "#" className = "navButton">Сервіси</a>
                    </li>
                    <li>
                        <a href = "#" className = "navButton">Аксесуари</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}