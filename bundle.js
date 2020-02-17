'use strict';

var Rocket = /** @class */ (function () {
    function Rocket(code, thrustersAmount) {
        this.code = code;
        this.thrustersAmount = thrustersAmount;
    }
    Rocket.prototype.getCode = function () {
        return this.code;
    };
    Rocket.prototype.getThrustersAmount = function () {
        return this.thrustersAmount;
    };
    return Rocket;
}());

var rockets = [];

var state = document.querySelector("#state");

function retrieveRocketInfo(rocket) {
    state.innerHTML += "Rocket " + rocket.getCode() + " has " + rocket.getThrustersAmount() + " thrusters.<br>";
}
function createRocket(code, thrustersAmount) {
    if (rockets.length < 99999999) {
        rockets.push(new Rocket(code, thrustersAmount));
    }
    else {
        console.error("You can't create more than 99999999 rockets.");
    }
}
createRocket("32WESSDS", 3);
createRocket("LDSFJA32", 6);
for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
    var rocket = rockets_1[_i];
    retrieveRocketInfo(rocket);
}
