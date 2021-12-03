import React from 'react';
import "./ChooseAProduct.scss"
import amazonLogo from "../../images/chooseAProduct/amazon-logo.svg";
import { observer } from 'mobx-react-lite';
import ToNextStep from '../../classes/ToNextStep';

const ChooseAProduct = observer(() => {

    const toNextStep = new ToNextStep()

    return (
        <div className="choose-a-product">
            <div className="choose-a-product__price-wrap">
                <span className="choose-a-product__old-price">us$25.89</span>
                <span className="choose-a-product__new-price">$0.00 FREE</span>
            </div>
            <button className="choose-a-product__select-btn" onClick={() => toNextStep.goNext()}>Select</button>
            <a className="choose-a-product__amazon-link" href="">
                <img className="choose-a-product__amazon-logo" src={amazonLogo} alt="link to amazon prime" />
            </a>
        </div >
    )
})

export default ChooseAProduct
