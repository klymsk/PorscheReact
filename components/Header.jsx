import logo from "../assets/General/MainLogo.png";

export default function Header({active, onChange}) {
    return (
        
        <header id = "header">
            <a href = "#" className = "logo" onClick = {() => onChange("main")} isActive = {active === "main"}>
                <img src = {logo} alt = "Porsche Logo" className = "main-ico" />
            </a>

            <nav>
                <ul className = "nav-list">
                    <li>
                        <a href = "/" className = "navButton">Моделі</a>
                    </li>
                    <li>
                        <a href = "/" className = "navButton" onClick = {() => onChange("contacts")} isActive = {active === "contacts"}>Контакти</a>
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