
import { Link } from "react-router-dom";

function ServiceInfo({ title }) {
  return (
    <section className="section">
      <span className="tag">MACHANPALLI VILLAGE</span>
      <h1>{title}</h1>
      <p>
        ఈ service కి సంబంధించిన documents, application process
        మరియు official links వివరాలను ఇక్కడ అందిస్తాము.
      </p>
      <p>
        Apply చేసే ముందు official website లో current requirements
        verify చేయండి.
      </p>
      <Link className="student-btn" to="/">← Back to Home</Link>
    </section>
  );
}

export default ServiceInfo;
