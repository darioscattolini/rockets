import Thruster from "../models/thruster";
export default class Rocket {
    private thrusters: Thruster[];
    private speed: number;

    constructor(private code: string, ...thrustersMaxPowers: number[]) {
        this.thrusters = [];
        for (let maxPowerValue of thrustersMaxPowers) {
            this.thrusters.push(new Thruster(maxPowerValue));
        }

        this.speed = this.thrusters.map(
            thruster => thruster.getCurrentPower()
        ).reduce(
            (accum, current) => accum + current
        );
    }
    
    getCode() {
        return this.code;
    }

    getThrustersAmount() {
        return this.thrusters.length;
    }

    getThrustersMaxPower() {
        return this.thrusters.map(thruster => thruster.getMaxPower());
    }

    getThrustersCurrentPower() {
        return this.thrusters.map(thruster => thruster.getCurrentPower());
    }

    getSpeed() {
        return this.speed;
    }

    updateSpeed() {
        this.speed = this.thrusters.map(
            thruster => thruster.getCurrentPower()
        ).reduce(
            (accum, current) => accum + current
        );
    }

    accelerate() {
        for (let thruster of this.thrusters) {
            thruster.modifyCurrentPower(10);
        }
        this.updateSpeed();
    }

    break() {
        for (let thruster of this.thrusters) {
            thruster.modifyCurrentPower(-10);
        }
        this.updateSpeed();
    }
}