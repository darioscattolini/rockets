export default class Thruster {
    private currentPower: number;
    constructor(private maxPower: number) {
        this.currentPower = 0;
    }

    getMaxPower() {
        return this.maxPower;
    }

    getCurrentPower() {
        return this.currentPower;
    }

    modifyCurrentPower(amount: number) {
        if (this.currentPower + amount < 0) {
            this.currentPower = 0;
        } else if (this.currentPower + amount > this.maxPower) {
            this.currentPower = this.maxPower;
        } else {
            this.currentPower = this.currentPower + amount;
        }
    }
}