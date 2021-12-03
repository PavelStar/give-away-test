import React, { useState } from "react";
import Store from "../../store/Store";
import "./StepInstruction.scss";
import "./stepsList.scss";
import "./instructionList.scss";
import "./HowToBuyList.scss";
import imgFb from "../../images/stepInstruction/step-instruction-img-2.png";
import { observer } from "mobx-react-lite";
import ToNextStep from "../../classes/ToNextStep";
import PressHereImg from "../../images/stepInstruction/press-here.svg";
import GiftIcon from "../../images/stepInstruction/gift-icon.svg";


const StepInstruction = observer(
    () => {
        const toNextStep = new ToNextStep()


        const { currentStep, setCurrentStep } = Store;

        const resetSteps = () => {
            Store.resetSteps();
            Store.deselectProduct();
        }


        return (
            <div className="step-instruction">
                <ul className="step-instruction__steps-list steps-list ">
                    <li
                        className={
                            currentStep === 1
                                ? "steps-list__item steps-list__item--current"
                                : currentStep > 1
                                    ? "steps-list__item steps-list__item--prev"
                                    : "steps-list__item"
                        }
                    >
                        <div className="steps-list__number-wrap">
                            <span className="steps-list__step-number" id="1">
                                1
                            </span>
                        </div>
                    </li>
                    <li
                        className={
                            currentStep === 2
                                ? "steps-list__item steps-list__item--current"
                                : currentStep > 2
                                    ? "steps-list__item steps-list__item--prev"
                                    : "steps-list__item"
                        }
                    >
                        <span className="steps-list__line"></span>
                        <div className="steps-list__number-wrap">
                            <span className="steps-list__step-number" id="2">
                                2
                            </span>
                        </div>
                    </li>
                    <li
                        className={
                            currentStep === 3
                                ? "steps-list__item steps-list__item--current"
                                : currentStep > 3
                                    ? "steps-list__item steps-list__item--prev"
                                    : "steps-list__item"
                        }
                    >
                        <span className="steps-list__line"></span>
                        <div className="steps-list__number-wrap">
                            <span className="steps-list__step-number" id="3">
                                3
                            </span>
                        </div>
                    </li>
                    <li
                        className={
                            currentStep === 4
                                ? "steps-list__item steps-list__item--current"
                                : currentStep > 4
                                    ? "steps-list__item steps-list__item--prev"
                                    : "steps-list__item"
                        }
                    >
                        <span className="steps-list__line"></span>
                        <div className="steps-list__number-wrap">
                            <span className="steps-list__step-number" id="4">
                                4
                            </span>
                        </div>
                    </li>
                    <li
                        className={
                            currentStep === 5
                                ? "steps-list__item steps-list__item--current"
                                : currentStep > 5
                                    ? "steps-list__item steps-list__item--prev"
                                    : "steps-list__item"
                        }
                    >
                        <span className="steps-list__line"></span>
                        <div className="steps-list__number-wrap">
                            <span className="steps-list__step-number" id="5">
                                5
                            </span>
                        </div>
                    </li>
                </ul>
                <div className="step-instruction__info-wrap">
                    <ul className="step-instruction__instruction-list instruction-list">
                        {currentStep === 1 ? (
                            <li className="instruction-list__item">
                                <div className="instruction-list__inner">
                                    <b className="instruction-list__step-count section-title">Step 1</b>
                                    <h2 className="instruction-list__title section-title">
                                        Lorem ipsum dolor sit amet
                                    </h2>
                                    <div className="instruction-list__description-wrap">
                                        <p className="instruction-list__description">
                                            Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus.
                                            Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae mattis odio
                                            accumsan vitae. Fusce id luctus erat:
                                        </p>
                                        <ol>
                                            <li>Mauris rutrum interdum condimentum.</li>
                                            <li>Donec commodo quis arcu eget pretium.</li>
                                        </ol>
                                    </div>
                                    <div className="instruction-list__btn-wrap">
                                        <button className="instruction-list__btn" onClick={() => toNextStep.goNext()}>
                                            Agree and continue
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ) : currentStep === 2 ? (
                            <li className="instruction-list__item instruction-list__item--hide-bg">
                                <div className="instruction-list__inner">
                                    <b className="instruction-list__step-count section-title">Step 2</b>
                                    <h2 className="instruction-list__title section-title">Share Facebook post</h2>
                                    <div className="instruction-list__description-wrap">
                                        <p className="instruction-list__description">
                                            To participate in this giveaway please share this giveaway offer with your
                                            friends. Not only your friends will appreciate this offer but you will
                                            receive $10 Amazon Gift Card for each of your friends that participates in
                                            this giveaway!
                                        </p>
                                    </div>
                                    <div className="instruction-list__btn-wrap">
                                        <button className="instruction-list__btn" onClick={() => toNextStep.goNext()}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                                <div className="instruction-list__img-wrap">

                                    <img className="instruction-list__img" src={imgFb} alt="" />

                                    <div className="instruction-list__img-arrow-wrap">
                                        <p>Press here</p>
                                        <img src={PressHereImg} alt="" />
                                    </div>
                                </div>
                            </li>
                        ) : currentStep === 3 ? (
                            <li className="instruction-list__item">
                                <div className="instruction-list__inner">
                                    <b className="instruction-list__step-count section-title">Step 3</b>
                                    <h2 className="instruction-list__title section-title">Amazon Prime</h2>
                                    <div className="instruction-list__description-wrap">
                                        <p className="instruction-list__description instruction-list__description--step-3">
                                            Do you have an Amazon Prime account?
                                        </p>
                                        <p className="instruction-list__description">
                                            To be able to participate in this giveaway you need to have Amazon Prime.
                                        </p>
                                    </div>
                                    <div className="instruction-list__btn-wrap">
                                        <button
                                            className="instruction-list__btn instruction-list__btn--yes"
                                            onClick={() => toNextStep.goNext()}
                                        >
                                            Yes, i have
                                        </button>
                                        <button
                                            className="instruction-list__btn instruction-list__btn--no"
                                            onClick={resetSteps}
                                        >
                                            no, i don’t have
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ) : currentStep === 4 ? (
                            <li className="instruction-list__item">
                                <div className="instruction-list__inner">
                                    <b className="instruction-list__step-count section-title">Step 4</b>
                                    <h2 className="instruction-list__title section-title">
                                        How to Buy a Product with 100% BONUS!
                                    </h2>
                                    <div className="instruction-list__description-wrap">
                                        <ul className="instruction-list__how-to-buy-list how-to-buy-list">
                                            <li className="how-to-buy-list__item">
                                                <div>
                                                    <span className="how-to-buy-list__num">1</span>
                                                </div>
                                                <p className="how-to-buy-list__text">
                                                    You need to Buy our Product on Amazon at the specified price $20.89!
                                                </p>
                                            </li>
                                            <li className="how-to-buy-list__item">
                                                <div>
                                                    <span className="how-to-buy-list__num">2</span>
                                                </div>
                                                <p className="how-to-buy-list__text">
                                                    After the purchase - Send us your Order Number or the Screenshot to
                                                    our manager in FB Messenger
                                                </p>
                                            </li>
                                            <li className="how-to-buy-list__item">
                                                <div>
                                                    <span className="how-to-buy-list__num">3</span>
                                                </div>
                                                <p className="how-to-buy-list__text">
                                                    When you receive the product please use it and share product reviews
                                                </p>
                                            </li>
                                            <li className="how-to-buy-list__item">
                                                <div>
                                                    <span className="how-to-buy-list__num">4</span>
                                                </div>
                                                <p className="how-to-buy-list__text">
                                                    We will send you the 25$ Amazon Gift Card code within 24 hours after
                                                    we get short review from you.
                                                </p>
                                            </li>
                                            <li className="how-to-buy-list__item">
                                                <div>
                                                    <span className="how-to-buy-list__num">
                                                        <img src={GiftIcon} alt="" />
                                                    </span>
                                                </div>
                                                <p className="how-to-buy-list__text"><span>As a result, you will receive</span> our Product Free!</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="instruction-list__btn-wrap instruction-list__btn-wrap--decline">
                                        <button className="instruction-list__btn" onClick={() => toNextStep.goNext()}>
                                            Get Offer
                                        </button>
                                        <button className="instruction-list__decline-btn" onClick={resetSteps}>I don't like offer terms</button>
                                    </div>
                                </div>
                            </li>
                        ) : currentStep === 5 ? (
                            <li className="instruction-list__item">
                                <div className="instruction-list__inner">
                                    <b className="instruction-list__step-count section-title">Step 5</b>
                                    <h2 className="instruction-list__title section-title">Share Facebook post</h2>
                                    <div className="instruction-list__description-wrap instruction-list__description-wrap--amazon">
                                        <p className="instruction-list__description instruction-list__description--amazon">
                                            Click the button <span>GO TO AMAZON</span> and <span>Buy a Product</span>
                                        </p>
                                        <div className="instruction-list__btn-wrap">
                                            <a href="https://www.amazon.com"
                                                className="instruction-list__btn instruction-list__btn--amazon"
                                                onClick={() => toNextStep.goNext()}
                                            >
                                                <span>Go to amazon</span>
                                                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0479072 18.6237C0.127923 18.4958 0.255845 18.4876 0.431675 18.5997C4.43142 20.9197 8.78384 22.0796 13.4874 22.0796C16.6233 22.0796 19.7194 21.4956 22.7753 20.3274C22.8553 20.2953 22.9715 20.2474 23.1234 20.1832C23.2753 20.119 23.3833 20.0711 23.4475 20.039C23.6876 19.9432 23.8756 19.9911 24.0117 20.1832C24.1478 20.3754 24.1035 20.5512 23.8797 20.7112C23.5918 20.9192 23.2238 21.1592 22.7758 21.4314C21.3998 22.2473 19.8637 22.8793 18.1681 23.3273C16.4719 23.7752 14.8161 23.9995 13.2 23.9995C10.7042 23.9995 8.34402 23.5637 6.1199 22.6917C3.89578 21.8197 1.90406 20.592 0.143722 19.008C0.0479073 18.9279 0 18.8479 0 18.7679C0 18.72 0.0157992 18.6716 0.0479072 18.6237ZM7.27171 11.7837C7.27171 10.6797 7.54386 9.73587 8.08766 8.95152C8.63146 8.16768 9.37555 7.57546 10.3194 7.17538C11.1833 6.80742 12.2474 6.54342 13.5114 6.38338C13.9436 6.33548 14.6474 6.27126 15.6234 6.19125V5.78301C15.6234 4.75913 15.5112 4.0711 15.2875 3.71893C14.9516 3.23884 14.4236 2.99879 13.7035 2.99879H13.5114C12.9834 3.0467 12.5272 3.21488 12.1435 3.50283C11.7597 3.79079 11.5115 4.19086 11.3994 4.70306C11.3352 5.02312 11.1751 5.20711 10.9193 5.25502L8.15952 4.91916C7.88737 4.85494 7.75129 4.71122 7.75129 4.48697C7.75129 4.43906 7.75944 4.383 7.77524 4.31879C8.0474 2.89482 8.71504 1.83882 9.77919 1.15079C10.8439 0.463783 12.0879 0.0800153 13.5119 0H14.1117C15.9358 0 17.3598 0.471937 18.3836 1.41581C18.5442 1.57635 18.6925 1.74912 18.8275 1.93158C18.9636 2.11556 19.0717 2.27967 19.1517 2.42339C19.2317 2.56762 19.3036 2.77556 19.3678 3.04721C19.432 3.31936 19.4799 3.50742 19.512 3.61139C19.5441 3.71536 19.5681 3.93961 19.5839 4.28362C19.5997 4.62764 19.6078 4.8315 19.6078 4.89571V10.7037C19.6078 11.1196 19.668 11.4998 19.7877 11.8438C19.9075 12.1878 20.0237 12.436 20.1358 12.5879C20.2479 12.7398 20.4319 12.9839 20.6878 13.3197C20.7836 13.464 20.832 13.5919 20.832 13.7035C20.832 13.8314 20.7678 13.9436 20.6399 14.0394C19.3117 15.1912 18.5921 15.8155 18.48 15.9113C18.2878 16.0555 18.0559 16.0713 17.7838 15.9592C17.5595 15.7671 17.3638 15.5831 17.1956 15.4073C17.0275 15.2314 16.9077 15.1035 16.8358 15.0235C16.764 14.9435 16.6478 14.7875 16.4877 14.5556C16.3277 14.3238 16.2156 14.1678 16.1519 14.0878C15.2559 15.0638 14.3757 15.6718 13.5119 15.9118C12.9681 16.0719 12.2959 16.1519 11.4957 16.1519C10.2639 16.1519 9.2517 15.7717 8.45971 15.0118C7.66771 14.2519 7.27171 13.176 7.27171 11.7837ZM11.3999 11.3041C11.3999 11.9279 11.5558 12.4279 11.8677 12.804C12.1797 13.1801 12.5996 13.3682 13.1276 13.3682C13.1755 13.3682 13.2438 13.36 13.3315 13.3442C13.4196 13.3284 13.4793 13.3203 13.5114 13.3203C14.1836 13.1444 14.7034 12.7122 15.0714 12.0242C15.2472 11.7205 15.3792 11.3882 15.4674 11.0283C15.5556 10.6685 15.6035 10.3765 15.6116 10.1523C15.6198 9.92852 15.6239 9.56004 15.6239 9.04835V8.44849C14.6958 8.44849 13.992 8.51271 13.5119 8.64063C12.1037 9.03969 11.3999 9.92801 11.3999 11.3041ZM21.4798 19.0319C21.5119 18.9677 21.5598 18.904 21.624 18.8398C22.0241 18.5676 22.4078 18.3836 22.7758 18.2878C23.3838 18.1278 23.976 18.0396 24.552 18.0238C24.712 18.008 24.8639 18.0157 25.0081 18.0478C25.7282 18.112 26.1599 18.2318 26.3041 18.4076C26.3684 18.5034 26.3999 18.6476 26.3999 18.8398V19.008C26.3999 19.5681 26.2481 20.2281 25.9438 20.988C25.6401 21.7478 25.216 22.3599 24.6717 22.8237C24.5917 22.8879 24.5198 22.9195 24.4556 22.9195C24.4235 22.9195 24.3914 22.9114 24.3598 22.8956C24.264 22.8477 24.24 22.7595 24.288 22.6316C24.8802 21.2397 25.1758 20.2714 25.1758 19.7276C25.1758 19.5518 25.1437 19.4238 25.08 19.3438C24.9199 19.1517 24.4719 19.0559 23.736 19.0559C23.4638 19.0559 23.1438 19.0717 22.7758 19.1038C22.3757 19.1517 22.0078 19.1996 21.6719 19.248C21.5761 19.248 21.5119 19.2322 21.4798 19.2001C21.4477 19.168 21.44 19.1359 21.4558 19.1043C21.4558 19.088 21.464 19.064 21.4798 19.0319Z" fill="white" />
                                                </svg>

                                            </a>
                                        </div>
                                        <p className="instruction-list__description instruction-list__description--amazon">
                                            Click on the button below and <span>Provide Order ID to our Manager</span>  in FB
                                            Messenger
                                        </p>
                                        <p className="instruction-list__description instruction-list__description--amazon">
                                            (If you have any questions, you can ask them to our Manager)
                                        </p>
                                    </div>
                                    <div className="instruction-list__btn-wrap">
                                        <a href="https://ru-ru.facebook.com" className="instruction-list__btn" onClick={() => toNextStep.goNext()}>
                                            provide order id
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        );
    }
)

export default StepInstruction;




