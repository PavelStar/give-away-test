import React, { useState } from "react";
import ChooseAProduct from "../ChooseAProduct/ChooseAProduct";
import "./Overview.scss";

const Overview = () => {
    const [isItemsHidden, setIsItemsHidden] = useState(false);

    const showMore = () => {
        setIsItemsHidden(!isItemsHidden);
    };

    return (
        <div className="overview">
            <h2 className="overview__title section-title">Overview</h2>
            <ul className="overview__list">
                <li className="overview__item">
                    <h3 className="overview__item-title third-title">Who It's For</h3>
                    <p className="overview__item-text">Very Dry, Dry, Dry Combination Skin (Type 1, 2)</p>
                </li>
                <li className="overview__item">
                    <h3 className="overview__item-title third-title">What It Is</h3>
                    <p className="overview__item-text">
                        <span>Step 3 in our customized 3-Step Skincare System.</span>
                        <span>
                            Dermatologist-developed face moisturizer softens, smooths, improves. Leaves skin glowing.
                        </span>
                    </p>
                </li>
                <li className="overview__item">
                    <h3 className="overview__item-title third-title">What It Does</h3>
                    <div className="overview__item-text">
                        <ul>
                            <li>Silky lotion delivers 8-hour hydration.</li>
                            <li>Slips on easily, absorbs quickly.</li>
                            <li>
                                Helps strengthen skin’s own moisture barrier so more moisture stays in. Skin that holds
                                onto moisture has a youthful-looking glow.
                            </li>
                        </ul>
                    </div>
                </li>
                {isItemsHidden ? (
                    <>
                        <li className="overview__item">
                            <h3 className="overview__item-title third-title">Key Ingredients</h3>
                            <p className="overview__item-text">
                                Sunflower Seed Cake, Barley Extract and Cucumber Fruit Extract help strengthen skin’s
                                barrier, improve its resiliency, and balance and retain skin’s moisture levels.
                                Hyaluronic acid acts as a natural moisture magnet/humectant.
                            </p>
                        </li>
                    </>
                ) : null}
            </ul>
            {isItemsHidden ? (
                <ChooseAProduct />
            ) : (
                <button className="overview__read-more-btn" onClick={showMore}>
                    Read more...
                </button>
            )}
        </div>
    );
};

export default Overview;
