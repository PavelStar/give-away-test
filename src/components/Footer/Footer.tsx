import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrap">
                <div className="footer__main-block container">
                    <div className="footer__inner ">
                        <div className="footer__privacy">
                            <h3 className="footer__title">Privacy and Terms</h3>
                            <ul className="footer__list footer__list--privacy">
                                <li className="footer__item">Privacy Policy</li>
                                <li className="footer__item">Terms of use</li>
                            </ul>
                        </div>
                        <div className="footer__privacy">
                            <h3 className="footer__title">Need Help?</h3>
                            <p className="footer__list footer__list--help">mail@gmail.com</p>
                        </div>
                        <div className="footer__privacy">
                            <h3 className="footer__title">Social</h3>
                            <ul className="footer__list footer__list--socials">
                                <li className="footer__item">Facebook</li>
                                <li className="footer__item">Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer__all-rights container">
                <span>© All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer
