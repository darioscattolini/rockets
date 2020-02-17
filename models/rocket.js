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
export default Rocket;
