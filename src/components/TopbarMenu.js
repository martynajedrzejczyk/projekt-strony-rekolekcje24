import MenuOption from "./MenuOption";
import "./TopbarMenu.css";

const TopbarMenu = () => {
    return (
        <div className="topbar-menu">
            <div className="topbar-menu-row">
                <div className="topbar-menu-logo">
                    <img
                        src={require("../img/logo-rekolekcje24.pl.png")}
                        alt="rekolekcje24.pl logo"
                        className="topbar-menu-logo-img"
                    />
                    <div className="topbar-menu-logo-text">
                        WYSZUKIWARKA REKOLEKCJI
                    </div>
                </div>
                <div className="topbar-menu-options">
                    <MenuOption text1="o nas" text2="lorem" type="first" />
                    <MenuOption text1="aktualności" text2="lorem" />
                    <MenuOption text1="zgłoś" text2="rekolekcje" />
                    <MenuOption text1="69 domów" text2="rekolekcyjnych" />
                </div>
            </div>

            <div className="topbar-menu-period-line">
                <div className="topbar-menu-period">
                    <i>
                        aktualny okres liturgiczny: <b>WIELKI POST </b>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default TopbarMenu;
