var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Rocket from "../models/rocket";
import rockets from "../models/rockets"; //perhaps should be more encapsulated, with CRUD methods
import { state as state } from "../views/view";
import { control as control } from "../views/view";
function retrieveRocketInfo(rocket) {
    return "<div>\n                Rocket: " + rocket.getCode() + "\n                <ul>\n                    <li>Amount of thrusters: " + rocket.getThrustersAmount() + "</li>\n                    <li>Max power of thrusters: " + rocket.getThrustersMaxPower().join(", ") + "</li>\n                    <li>Current power of thrusters: " + rocket.getThrustersCurrentPower().join(", ") + "</li>\n                    <li>Current speed: " + rocket.getSpeed() + "</li>\n                </ul>\n            </div>";
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
control.create1.onclick = function () {
    createRocket("32WESSDS", 10, 30, 80);
    control.create2.removeAttribute("disabled");
};
control.create2.onclick = function () {
    createRocket("LDSFJA32", 30, 40, 50, 50, 30, 10);
    for (var buttonName in control) {
        var button = control[buttonName];
        if (button.hasAttribute("disabled")) {
            button.removeAttribute("disabled");
        }
    }
};
control.accelerate1.onclick = function () {
    rockets[0].accelerate();
};
control.accelerate2.onclick = function () {
    rockets[1].accelerate();
};
control.break1.onclick = function () {
    rockets[0].break();
};
control.break2.onclick = function () {
    rockets[1].break();
};
control.showInfo1.onclick = function () {
    state.innerHTML = retrieveRocketInfo(rockets[0]);
};
control.showInfo2.onclick = function () {
    state.innerHTML = retrieveRocketInfo(rockets[1]);
};
control.showInfoAll.onclick = function () {
    state.innerHTML = "";
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var rocket = rockets_1[_i];
        state.innerHTML += retrieveRocketInfo(rocket);
    }
};
