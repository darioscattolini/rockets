import Rocket from "../models/rocket";
import rockets from "../models/rockets";    //perhaps should be more encapsulated, with CRUD methods
import { state as state } from "../views/view";
import { control as control } from "../views/view";

function retrieveRocketInfo(rocket: Rocket) {
    return  `<div>
                Rocket: ${rocket.getCode()}
                <ul>
                    <li>Amount of thrusters: ${rocket.getThrustersAmount()}</li>
                    <li>Max power of thrusters: ${rocket.getThrustersMaxPower().join(", ")}</li>
                    <li>Current power of thrusters: ${rocket.getThrustersCurrentPower().join(", ")}</li>
                    <li>Current speed: ${rocket.getSpeed()}</li>
                </ul>
            </div>`;
}

function createRocket(code: string, ...thrustersMaxPowers: number[]) {
    if (rockets.length < 99999999) {
        rockets.push(new Rocket(code, ...thrustersMaxPowers));
    } else {
        console.error("You can't create more than 99999999 rockets.");
    }
}

control.create1.onclick = () => {
    createRocket("32WESSDS", 10, 30, 80);
    control.create2.removeAttribute("disabled");
}

control.create2.onclick = () => {
    createRocket("LDSFJA32", 30, 40, 50, 50, 30, 10);
    for (let buttonName in control) {
        const button = control[buttonName];
        if (button.hasAttribute("disabled")) {
            button.removeAttribute("disabled");
        }
    }
}

control.accelerate1.onclick = () => {
    rockets[0].accelerate();
}

control.accelerate2.onclick = () => {
    rockets[1].accelerate();
}

control.break1.onclick = () => {
    rockets[0].break();
}

control.break2.onclick = () => {
    rockets[1].break();
}

control.showInfo1.onclick = () => {
    state.innerHTML = retrieveRocketInfo(rockets[0]);
}

control.showInfo2.onclick = () => {
    state.innerHTML = retrieveRocketInfo(rockets[1]);
}

control.showInfoAll.onclick = () => {
    state.innerHTML = "";
    
    for (let rocket of rockets) {
        state.innerHTML += retrieveRocketInfo(rocket);
    }
}