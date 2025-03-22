import ServicePorsche1 from "../assets/Porsche Taycan/service.png";
import ServicePorsche2 from "../assets/Porsche Taycan/service2.png";
import ServicePorsche3 from "../assets/Porsche Taycan/service3.png";
import ServicePorsche4 from "../assets/Porsche 911/serivce.png";
import ServicePorsche5 from "../assets/Porsche 911/service2.png";
import ServicePoints from "./TextService";

export default function ServiceBlock() {
    return (
        <div className = "serviceBlock">
            <h3>10.000 км</h3>
            <div class = "serviceText">
                <h4>Необхідне технічне обслуговування</h4>

                <ServicePoints {...texts[3]} />
            </div>

            <img src = {ServicePorsche1} alt = "porscheImg" />
        </div>
    )
}