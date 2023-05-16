import "./Topbar.css";
import TopbarMenu from "./TopbarMenu";

const Topbar = () => {
    return (
        <div className="topbar-header">
            <div className="fb-row">
                <img
                    src={require("../img/i-like-it-header.png")}
                    alt="i-like-it-png"
                    className="fb-row-logo"
                />
                <span className="fb-row-lbl">rekolekcje24.pl</span>
            </div>
            <TopbarMenu />
        </div>
    );
};

export default Topbar;
