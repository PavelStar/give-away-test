import Store from "../store/Store";

class ToNextStep {
	goNext() {
		if (Store.currentStep === 0) {
			Store.selectProduct();
		}
		if (Store.currentStep < 5) {
			Store.setCurrentStep();
		}
	}
}

export default ToNextStep;
