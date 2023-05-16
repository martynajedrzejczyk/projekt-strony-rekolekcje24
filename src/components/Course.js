import "./Course.css";

const Course = ({ title, number, rows }) => {
    return (
        <div className="course">
            <div className="course-header">
                <span className="course-header-name">{title}</span>{" "}
                <span className="course-header-number">/{number}/</span>
            </div>
            <div className="course-bottom">
                <div className="course-list">
                    {rows.map((row) => (
                        <li className="course-list-row">{row}</li>
                    ))}
                </div>
                <div className="course-triangle"></div>
            </div>
        </div>
    );
};

export default Course;
