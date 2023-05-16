import "./Instruction.css";
import React from "react";

export default function Instruction() {
    return (
        <div className="instruction-container">
            <img
                className="instruction-img"
                src={require("../img/what-to-do.png")}
                alt="what-to-do"
            />
            <span className="instruction-content">
                <b>Lorem ipsum dolor sit amet, </b> consectetur adipiscing elit.
                Donec enim ex, vulputate id dictum a, elementum vitae nisl.
            </span>
        </div>
    );
}
