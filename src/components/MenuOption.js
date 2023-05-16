import "./MenuOption.css";

const MenuOption = ({ type, text1, text2 }) => {
    return (
        <div
            className={
                type === "first"
                    ? "menu-option menu-option-first"
                    : "menu-option"
            }
        >
            {text1}
            <br />
            {text2}
        </div>
    );
};

export default MenuOption;
