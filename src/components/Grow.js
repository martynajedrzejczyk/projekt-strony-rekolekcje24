import "./Grow.css";
import React from "react";

export default function Grow({ text }) {
    return (
        <div className="grow-container">
            <span className="grow-title">WZRASTANIE</span>
            <br />
            {text}
        </div>
    );
}
