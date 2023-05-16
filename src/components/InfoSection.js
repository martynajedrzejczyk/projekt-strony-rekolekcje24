import Course from "./Course";
import Grow from "./Grow";
import Incoming from "./Incoming";
import "./InfoSection.css";
import Instruction from "./Instruction";
import Quote from "./Quote";
import Searcher from "./Searcher";

const row = [
    "Liturgia / Wspólnota",
    "Macierzyństwo / Ojcostwo",
    "Modlitwa / Medytacja / Kontem",
    "Prawdy wiary",
    "Słowo Boże / Lectio Divina",
    "Towarzyszenie / Wzrastanie",
    "Trudnosci",
];

const InfoSection = () => {
    return (
        <div className="info-container">
            <div className="left-news">
                <div className="left-header">
                    <b>SPOTKANIA</b> MŁODYCH
                </div>
                <div className="quotes-container">
                    <Quote
                        text="Ja jestem drogą"
                        comment1="// świat duchowości"
                        comment2="// świat rekolekcji"
                    />
                    <Quote
                        text="Ja jestem drogą"
                        comment1="// świat duchowości"
                        comment2="// świat rekolekcji"
                    />
                    <Quote
                        text="Ja jestem drogą"
                        comment1="// świat duchowości"
                        comment2="// świat rekolekcji"
                    />
                </div>
            </div>
            <div className="right-news">
                <div className="courses-container">
                    <Course title="FORMACJA" number="64" rows={row} />
                    <Course title="FORMACJA" number="64" rows={row} />
                    <Course title="FORMACJA" number="64" rows={row} />
                </div>
                <div className="courses-container">
                    <Grow text="W CODZIENNOŚCI" />
                    <Grow text="W CODZIENNOŚCI" />
                    <Grow text="Z KSIĄŻKĄ" />
                </div>
                <Searcher />
                <div className="incoming-container">
                    <div className="incoming-header">
                        <div className="triangle-topleft"></div>
                        <span className="incoming-title">
                            25/05/2011, <b>REKOLEKCJE I SKUPIENIA</b>{" "}
                            ROZPOCZYNAJĄCE SIĘ W NAJBLIŻSZYCH DNIACH:
                        </span>
                    </div>
                    <Incoming />
                    <Incoming />
                </div>
                <div className="what-to-do-container">
                    <div className="what-to-do">
                        <div className="what-to-do-header">
                            <div className="triangle-topleft-yellow"></div>
                            <span className="what-to-do-title">
                                CO ROBIĆ <b>PRZED</b>:
                            </span>
                        </div>
                        <Instruction />
                        <Instruction />
                    </div>
                    <div className="what-to-do">
                        <div className="what-to-do-header">
                            <div className="triangle-topleft-yellow"></div>
                            <span className="what-to-do-title">
                                CO ROBIĆ <b>PO</b>:
                            </span>
                        </div>
                        <Instruction />
                        <Instruction />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
