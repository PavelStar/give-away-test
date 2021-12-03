import React from 'react'
import Stars from "../../images/rating/stars.svg";
import "./ProductRating.scss"

const ProductRating = () => {
    return (
        <div className="product-rating">
            <span className="product-rating__popularity">Best seller</span>
            <a className="product-rating__reviews-link">
                <div className="product-rating__stars">
                    <img className="product-rating__stars-img" src={Stars} alt="" />
                </div>
                <span className="product-rating__reviews-count">(1731 reviews)</span>
            </a>
        </div>
    )
}

export default ProductRating
