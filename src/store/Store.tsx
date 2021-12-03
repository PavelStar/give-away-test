import { makeAutoObservable, makeObservable } from "mobx"

class Store {

    isProductSelected: boolean = false;
    currentStep: number = 0;

    constructor() {
        makeAutoObservable(this)
    }

    setCurrentStep() {
        this.currentStep = this.currentStep + 1
    }

    selectProduct() {
        this.isProductSelected = true
    }
    deselectProduct() {
        this.isProductSelected = false
    }

    resetSteps() {
        this.currentStep = 0
    }


}

export default new Store()