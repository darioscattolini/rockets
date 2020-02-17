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
export default Thruster;
