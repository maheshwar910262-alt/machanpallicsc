
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const services = [
    {
      icon: "🎓",
      title: "Student Services",
      description:
        "Students కోసం scholarships, education updates మరియు study information.",
    },
    {
      icon: "💻",
      title: "Digital Services",
      description:
        "గ్రామ ప్రజలకు అవసరమైన digital services మరియు online application సమాచారం.",
    },
    {
      icon: "🏛️",
      title: "Government Schemes",
      description:
        "కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాల వివరాలు, eligibility మరియు application updates.",
    },
    {
      icon: "🏡",
      title: "Village Information",
      description:
        "Machanpalli గ్రామానికి సంబంధించిన ముఖ్యమైన సమాచారం మరియు ప్రజా సేవల వివరాలు.",
    },
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <span className="about-badge">ABOUT OUR VILLAGE</span>

        <h1>
          About <span>Machanpalli CSC</span>
        </h1>

        <p className="about-intro">
          Welcome to Machanpalli CSC Village Services Website.
          మా గ్రామ ప్రజలకు డిజిటల్ సేవలు, విద్యా సమాచారం,
          ప్రభుత్వ పథకాల వివరాలు ఒకే చోట అందించడమే మా లక్ష్యం.
        </p>

        <div className="about-buttons">
          <Link to="/" className="about-btn about-btn-primary">
            Home Page →
          </Link>

          <a
            href="#our-services"
            className="about-btn about-btn-secondary"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>WHO WE ARE</span>
          <h2>About Our Website</h2>
        </div>

        <p>
          Machanpalli CSC website అనేది మా గ్రామ ప్రజలకు ఉపయోగపడే
          సమాచారం మరియు సేవలను సులభంగా తెలుసుకోవడానికి రూపొందించిన
          website. విద్యార్థులు, గ్రామ ప్రజలు ప్రభుత్వ పథకాలు,
          scholarships, online services మరియు ముఖ్యమైన updates
          గురించి తెలుసుకోవడానికి ఇది సహాయపడుతుంది.
        </p>

        <p>
          ఇంటర్నెట్ ద్వారా అవసరమైన సమాచారాన్ని సులభంగా పొందేలా,
          mobile మరియు computer రెండింటిలోనూ ఉపయోగించగలిగేలా
          ఈ website రూపొందించబడుతుంది.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="about-mission-grid">
        <article className="about-info-card">
          <div className="about-info-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            గ్రామ ప్రజలకు ఉపయోగకరమైన digital information,
            విద్యార్థులకు education updates మరియు ప్రభుత్వ
            పథకాల సమాచారాన్ని సులభంగా అందించడం.
          </p>
        </article>

        <article className="about-info-card">
          <div className="about-info-icon">🌱</div>
          <h2>Our Vision</h2>
          <p>
            గ్రామీణ ప్రాంతాల్లో digital awareness పెంచడం,
            విద్యార్థులకు సరైన సమాచారం అందించడం మరియు
            ప్రజలకు online services గురించి అవగాహన కల్పించడం.
          </p>
        </article>
      </section>

      {/* Services */}
      <section className="about-services" id="our-services">
        <div className="about-section-heading">
          <span>WHAT WE PROVIDE</span>
          <h2>Our Services</h2>
          <p>
            మా websiteలో అందుబాటులో ఉండే ముఖ్యమైన service categories.
          </p>
        </div>

        <div className="about-services-grid">
          {services.map((service) => (
            <article className="about-service-card" key={service.title}>
              <div className="about-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Important Note */}
      <section className="about-note">
        <h2>Important Information</h2>
        <p>
          ఈ website సమాచార ప్రయోజనాల కోసం రూపొందించబడింది.
          ప్రభుత్వ పథకాల eligibility, application status మరియు
          అధికారిక మార్గదర్శకాల కోసం సంబంధిత official websiteను
          పరిశీలించండి.
        </p>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>Need More Information?</h2>

        <p>
          మా websiteలోని services మరియు updates గురించి తెలుసుకోవడానికి
          Home pageను సందర్శించండి.
        </p>

        <Link to="/" className="about-btn about-btn-primary">
          Visit Home Page →
        </Link>
      </section>
    </main>
  );
}
