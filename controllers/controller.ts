import Rocket from "../models/rocket";
import rockets from "../models/rockets";
import { state as state } from "../views/view";

function retrieveRocketInfo(rocket: Rocket) {
    state.innerHTML += `Rocket ${rocket.getCode()} has ${rocket.getThrustersAmount()} thrusters.<br>`;
}

function createRocket(code: string, thrustersAmount: number) {
    if (rockets.length < 99999999) {
        rockets.push(new Rocket(code, thrustersAmount));
    } else {
        console.error("You can't create more than 99999999 rockets.");
    }
}

createRocket("32WESSDS", 3);
createRocket("LDSFJA32", 6);
for (let rocket of rockets) {
    retrieveRocketInfo(rocket);
}