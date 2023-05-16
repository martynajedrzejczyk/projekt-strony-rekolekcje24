import "./Quote.css";

const Quote = ({ text, comment1, comment2 }) => {
    return (
        <div className="quote">
            <div className="quote-text">" {text} "</div>
            <div className="quote-comment">
                {comment1} <br />
                {comment2}
            </div>
        </div>
    );
};

export default Quote;
