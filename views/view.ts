export const state = <HTMLDivElement>document.querySelector("#state");

interface Control {
    [key: string]: HTMLButtonElement;
}

export const control: Control = {
    create1: <HTMLButtonElement>document.querySelector("#create1"),
    create2: <HTMLButtonElement>document.querySelector("#create2"),
    accelerate1: <HTMLButtonElement>document.querySelector("#accelerate1"),
    accelerate2: <HTMLButtonElement>document.querySelector("#accelerate2"),
    break1: <HTMLButtonElement>document.querySelector("#break1"),
    break2: <HTMLButtonElement>document.querySelector("#break2"),
    showInfo1: <HTMLButtonElement>document.querySelector("#showInfo1"),
    showInfo2: <HTMLButtonElement>document.querySelector("#showInfo2"),
    showInfoAll: <HTMLButtonElement>document.querySelector("#showInfoAll")
}