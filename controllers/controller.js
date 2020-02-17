var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Rocket from "../models/rocket";
import rockets from "../models/rockets";
import { state as state } from "../views/view";
function retrieveRocketInfo(rocket) {
    state.innerHTML += "<div>\n                            Rocket: " + rocket.getCode() + "\n                            <ul>\n                                <li>Amount of thrusters: " + rocket.getThrustersAmount() + "</li>\n                                <li>Max power of thrusters: " + rocket.getThrustersMaxPower().join(", ") + "</li>\n                                <li>Current power of thrusters: " + rocket.getThrustersCurrentPower().join(", ") + "</li>\n                                <li>Current speed: " + rocket.getSpeed() + "</li>\n                            </ul>\n                        </div>";
}
function createRocket(code) {
    var thrustersMaxPowers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        thrustersMaxPowers[_i - 1] = arguments[_i];
    }
    if (rockets.length < 99999999) {
        rockets.push(new (Rocket.bind.apply(Rocket, __spreadArrays([void 0, code], thrustersMaxPowers)))());
    }
    else {
        console.error("You can't create more than 99999999 rockets.");
    }
}
createRocket("32WESSDS", 10, 30, 80);
createRocket("LDSFJA32", 30, 40, 50, 50, 30, 10);
for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
    var rocket = rockets_1[_i];
    retrieveRocketInfo(rocket);
    for (var i = 0; i < 3; i++) {
        rocket.accelerate();
    }
}
for (var _a = 0, rockets_2 = rockets; _a < rockets_2.length; _a++) {
    var rocket = rockets_2[_a];
    retrieveRocketInfo(rocket);
}
for (var i = 0; i < 5; i++) {
    rockets[0].break();
}
for (var i = 0; i < 7; i++) {
    rockets[1].accelerate();
}
for (var _b = 0, rockets_3 = rockets; _b < rockets_3.length; _b++) {
    var rocket = rockets_3[_b];
    retrieveRocketInfo(rocket);
    for (var i = 0; i < 15; i++) {
        rocket.accelerate();
    }
}
for (var _c = 0, rockets_4 = rockets; _c < rockets_4.length; _c++) {
    var rocket = rockets_4[_c];
    retrieveRocketInfo(rocket);
}
