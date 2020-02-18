'use strict';

var Thruster = /** @class */ (function () {
    function Thruster(maxPower) {
        this.maxPower = maxPower;
        this.currentPower = 0;
    }
    Thruster.prototype.getMaxPower = function () {
        return this.maxPower;
    };
    Thruster.prototype.getCurrentPower = function () {
        return this.currentPower;
    };
    Thruster.prototype.modifyCurrentPower = function (amount) {
        if (this.currentPower + amount < 0) {
            this.currentPower = 0;
        }
        else if (this.currentPower + amount > this.maxPower) {
            this.currentPower = this.maxPower;
        }
        else {
            this.currentPower = this.currentPower + amount;
        }
    };
    return Thruster;
}());

var Rocket = /** @class */ (function () {
    function Rocket(code) {
        var thrustersMaxPowers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            thrustersMaxPowers[_i - 1] = arguments[_i];
        }
        this.code = code;
        this.thrusters = [];
        for (var _a = 0, thrustersMaxPowers_1 = thrustersMaxPowers; _a < thrustersMaxPowers_1.length; _a++) {
            var maxPowerValue = thrustersMaxPowers_1[_a];
            this.thrusters.push(new Thruster(maxPowerValue));
        }
        this.speed = this.thrusters.map(function (thruster) { return thruster.getCurrentPower(); }).reduce(function (accum, current) { return accum + current; });
    }
    Rocket.prototype.getCode = function () {
        return this.code;
    };
    Rocket.prototype.getThrustersAmount = function () {
        return this.thrusters.length;
    };
    Rocket.prototype.getThrustersMaxPower = function () {
        return this.thrusters.map(function (thruster) { return thruster.getMaxPower(); });
    };
    Rocket.prototype.getThrustersCurrentPower = function () {
        return this.thrusters.map(function (thruster) { return thruster.getCurrentPower(); });
    };
    Rocket.prototype.getSpeed = function () {
        return this.speed;
    };
    Rocket.prototype.updateSpeed = function () {
        this.speed = this.thrusters.map(function (thruster) { return thruster.getCurrentPower(); }).reduce(function (accum, current) { return accum + current; });
    };
    Rocket.prototype.accelerate = function () {
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            thruster.modifyCurrentPower(10);
        }
        this.updateSpeed();
    };
    Rocket.prototype.break = function () {
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            thruster.modifyCurrentPower(-10);
        }
        this.updateSpeed();
    };
    return Rocket;
}());

var rockets = [];

var state = document.querySelector("#state");
var control = {
    create1: document.querySelector("#create1"),
    create2: document.querySelector("#create2"),
    accelerate1: document.querySelector("#accelerate1"),
    accelerate2: document.querySelector("#accelerate2"),
    break1: document.querySelector("#break1"),
    break2: document.querySelector("#break2"),
    showInfo1: document.querySelector("#showInfo1"),
    showInfo2: document.querySelector("#showInfo2"),
    showInfoAll: document.querySelector("#showInfoAll")
};

var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
