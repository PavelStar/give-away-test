import React from "react";
import "./HowItWork.scss"

const HowItWork = () => {
    return (
        <div className="how-it-work">
            <h2 className="how-it-work__title section-title">How does it work?</h2>
            <ul className="how-it-work__list">
                <li className="how-it-work__item">
                    <div className="how-it-work__img-block">
                        <h3 className="how-it-work__first-title">Easy <br /> as <br /> 1-2-3</h3>
                    </div>
                </li>
                <li className="how-it-work__item">
                    <div className="how-it-work__img-block how-it-work__img-block--choose"></div>
                    <h3 className="how-it-work__item-title third-title">Choose product</h3>
                </li>
                <li className="how-it-work__item">
                    <div className="how-it-work__img-block how-it-work__img-block--buy"></div>
                    <h3 className="how-it-work__item-title third-title">Buy product</h3>
                </li>
                <li className="how-it-work__item">
                    <div className="how-it-work__img-block how-it-work__img-block--test"></div>
                    <h3 className="how-it-work__item-title third-title">Test and share review</h3>
                </li>
                <li className="how-it-work__item">
                    <div className="how-it-work__img-block how-it-work__img-block--money"></div>
                    <h3 className="how-it-work__item-title third-title">Get 100% money back</h3>
                </li>
            </ul>
        </div>
    );
};

export default HowItWork;
