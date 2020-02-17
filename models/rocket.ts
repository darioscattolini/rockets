export default class Rocket {
    constructor(private code: string, private thrustersAmount: number) {

    }
    
    getCode() {
        return this.code;
    }
    getThrustersAmount() {
        return this.thrustersAmount;
    }
}