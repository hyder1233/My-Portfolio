import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const TimelineItem = ({ title, date, description, certificateLink }) => {
  return (
    <li className="timeline-item" data-aos="fade-up">
      <h4 className="h4 timeline-item-title">
        {title}
        {certificateLink && (
          <span className="certificate-link">
            <Link to={certificateLink} className="certificate-link-icon" target="_blank" rel="noopener noreferrer">
              <FaLink />
            </Link>
          </span>
        )}
      </h4>
      <span>{date}</span>
      <p className="timeline-text">{description}</p>
    </li>
  );
};

export default TimelineItem;
