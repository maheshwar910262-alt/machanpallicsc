
import { Link } from "react-router-dom";

function ServiceCard({ title, description, icon, link }) {
  const content = (
    <>
      <span className="service-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-link">View Details →</span>
    </>
  );

  return link.startsWith("/") ? (
    <Link className="service-card" to={link}>
      {content}
    </Link>
  ) : (
    <a className="service-card" href={link}>
      {content}
    </a>
  );
}

export default ServiceCard;
