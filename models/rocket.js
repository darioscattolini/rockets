import Thruster from "../models/thruster";
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
export default Rocket;
