import Rocket from "../models/rocket";
import rockets from "../models/rockets";
import { state as state } from "../views/view";

function retrieveRocketInfo(rocket: Rocket) {
    state.innerHTML += `<div>
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

createRocket("32WESSDS", 10, 30, 80);
createRocket("LDSFJA32", 30, 40, 50, 50, 30, 10);
for (let rocket of rockets) {
    retrieveRocketInfo(rocket);

    for (let i = 0; i < 3; i++) {
        rocket.accelerate();
    }
}
for (let rocket of rockets) {
    retrieveRocketInfo(rocket);
}

for (let i = 0; i < 5; i++) {
    rockets[0].break();
}

for (let i = 0; i < 7; i++) {
    rockets[1].accelerate();
}

for (let rocket of rockets) {
    retrieveRocketInfo(rocket);
    
    for (let i = 0; i < 15; i++) {
        rocket.accelerate();
    }
}

for (let rocket of rockets) {
    retrieveRocketInfo(rocket);
}