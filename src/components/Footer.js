import "./Footer.css";
import React from "react";

export default function Footer() {
    return (
        <div className="footer-container">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
            />
            <form className="contact">
                <span className="footer-label">ZGŁOŚ REKOLEKCJE</span>
                <div className="contact-info">
                    <input
                        className="input-small"
                        type="text"
                        placeholder="Imię i nazwisko"
                    />
                    <input
                        className="input-small"
                        type="text"
                        placeholder="Adres e-mail"
                    />
                </div>
                <input className="input-big" type="text" placeholder="temat" />
                <textarea className="input-textarea" placeholder="treść" />
                <div className="send-row">
                    <submit type="button">Wyślij</submit>
                </div>
            </form>
            <div className="footer-right">
                <span class="material-symbols-outlined quote-icon">
                    format_quote
                </span>
                <div className="footer-right-right">
                    <div className="footer-right-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec enim ex, vulputate id dictum a, elementum vitae
                        nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec enim ex, vulputate id dictum a, elementum
                        vitae nisl.
                    </div>
                    <div className="footer-right-bottom-title">
                        <div className="footer-info-container">
                            <b className="footer-info-text-title">
                                Województwa
                            </b>
                            <div className="footer-info-text">
                                lorem <br />
                                lorem <br />
                                lorem <br />
                                lorem <br />
                            </div>
                        </div>
                        <span className="footer-info-container">
                            <b className="footer-info-text-title">Diecezje</b>

                            <div className="footer-info-text">
                                lorem <br />
                                lorem <br />
                                lorem <br />
                                lorem <br />
                            </div>
                        </span>
                        <span className="footer-info-container">
                            <b className="footer-info-text-title">Zakony</b>

                            <div className="footer-info-text">
                                lorem <br />
                                lorem <br />
                                lorem <br />
                                lorem <br />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
