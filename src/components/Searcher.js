import "./Searcher.css";
import React from "react";

export default function Searcher() {
    return (
        <div className="searcher-container">
            <div className="searcher-main">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                />
                <div className="searcher-label-icon">
                    <span class="material-symbols-outlined search-icon">
                        search
                    </span>
                    <span class="searcher-label">Wyszukaj rekolekcji:</span>
                </div>
                <select name="wojewodztwo" className="searcher-select">
                    <option value="" disabled selected>
                        województwo
                    </option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                </select>
                <select name="diecezje" className="searcher-select">
                    <option value="" disabled selected>
                        diecezje
                    </option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                </select>
                <select name="zakony" className="searcher-select">
                    <option value="" disabled selected>
                        zakony
                    </option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                    <option value="loremipsum">lorem ipsum</option>
                </select>
            </div>
            <div className="searcher-triangle-container">
                <div className="searcher-triangle"></div>
            </div>
        </div>
    );
}
