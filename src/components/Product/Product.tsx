import React, { useEffect, useState } from "react";
import ChooseAProduct from "../ChooseAProduct/ChooseAProduct";
import ProductRating from "../ProductRating/ProductRating";
import "./Product.scss";
import previewOne from "../../images/product/preview-1.png"
import previewTwo from "../../images/product/preview-2.png"
import previewThree from "../../images/product/preview-3.png"
import productOne from "../../images/product/product-1.png"
import productTwo from "../../images/product/product-2.png"
import productThree from "../../images/product/product-3.png"


const Product = () => {

    const [value, setValue] = useState(1)
    const [imgToShow, setImgToShow] = useState(productOne)

    const handleClick = (e: any) => {
        setValue(Number(e.target.value))
    }

    const btnClick = (e: any) => {
        if (e.currentTarget.id === "prev" && value > 1) {
            setValue(() => value - 1)
        }
        if (e.currentTarget.id === "next" && value < 3) {
            setValue(() => value + 1)
        }
    }

    useEffect(() => {
        if (value === 1) {
            setImgToShow(productOne)
        }

        if (value === 2) {
            setImgToShow(productTwo)
        }

        if (value === 3) {
            setImgToShow(productThree)
        }
        console.log("value", value)
    }, [value])



    return (
        <div className="product">
            <div className="product__images">
                <div className="product__previews-wrap">
                    <button className="product__arrow-btn product__arrow-btn--prev" onClick={btnClick} id="prev">
                        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9025 0.676593L0.432053 19.147C-0.158496 19.7585 -0.14154 20.7329 0.469931 21.3234C1.06643 21.8995 2.01205 21.8995 2.60846 21.3234L19.9907 3.9412L37.3729 21.3234C37.9739 21.9243 38.9483 21.9243 39.5493 21.3234C40.1502 20.7223 40.1502 19.748 39.5493 19.147L21.0789 0.676593C20.4778 0.0756732 19.5035 0.0756732 18.9025 0.676593Z" fill="black" fill-opacity="0.6" />
                        </svg>
                    </button>
                    <ul className="product__previews">
                        <li className="product__previews-item">
                            <input className="visually-hidden" onChange={handleClick} type="radio" value="1" name="preview" id="1" checked={value === 1 ? true : false} />
                            <div className="product__item-inner">
                                <label htmlFor="1">
                                    <img src={previewOne} alt="" />
                                </label>
                            </div>
                        </li>
                        <li className="product__previews-item">
                            <input className="visually-hidden" onChange={handleClick} type="radio" value="2" name="preview" id="2" checked={value === 2 ? true : false} />
                            <div className="product__item-inner">
                                <label htmlFor="2">
                                    <img src={previewTwo} alt="" />
                                </label>
                            </div>

                        </li>
                        <li className="product__previews-item">
                            <input className="visually-hidden" onChange={handleClick} type="radio" value="3" name="preview" id="3" checked={value === 3 ? true : false} />
                            <div className="product__item-inner">
                                <label htmlFor="3">
                                    <img src={previewThree} alt="" />
                                </label>
                            </div>

                        </li>
                    </ul>
                    <button className="product__arrow-btn product__arrow-btn--next" onClick={btnClick} id="next">
                        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9025 0.676593L0.432053 19.147C-0.158496 19.7585 -0.14154 20.7329 0.469931 21.3234C1.06643 21.8995 2.01205 21.8995 2.60846 21.3234L19.9907 3.9412L37.3729 21.3234C37.9739 21.9243 38.9483 21.9243 39.5493 21.3234C40.1502 20.7223 40.1502 19.748 39.5493 19.147L21.0789 0.676593C20.4778 0.0756732 19.5035 0.0756732 18.9025 0.676593Z" fill="black" fill-opacity="0.6" />
                        </svg>
                    </button>
                </div>
                <div className="product__img-area">
                    <img className="product__main-img" src={imgToShow} alt="" />
                </div>
            </div>
            <div className="product__info">
                <div className="product__about">
                    <ProductRating />
                    <h3 className="product__title">Acne Treatment Cystic Acne heals, repairs & renews</h3>
                    <div className="product__description-block">
                        <b className="product__description-title">Description:</b>
                        <p className="product__description-text">Addictively refreshing gel-cream leaves skin plump, dewy, glowing.</p>
                    </div>
                    <span className="product__items-left">items left: 12</span>
                </div>
                <ChooseAProduct />
            </div>
        </div>
    );
};

export default Product;
