
import { Link } from "react-router-dom";
import { useState } from "react";
// import ServiceCard from "../components/ServiceCard";


const services = [
  {
    title: "PAN Card",
    description: "New PAN and correction information.",
    icon: "🪪",
    link: "/pan",
  },
  {
    title: "Aadhaar Services",
    description: "Aadhaar information and official services.",
    icon: "🆔",
    link: "https://uidai.gov.in/",
  },
  {
    title: "Voter ID",
    description: "Voter registration and corrections.",
    icon: "🗳️",
    link: "/voter-id",
  },
  {
    title: "ABHA Card",
    description: "Digital health account information.",
    icon: "🏥",
    link: "/abha",
  },
  {
    title: "e-Shram Card",
    description: "Worker registration information.",
    icon: "👷",
    link: "https://eshram.gov.in/",
  },
  {
    title: "DigiLocker",
    description: "Digital documents and certificates.",
    icon: "📁",
    link: "https://www.digilocker.gov.in/",
  },
  {
    title: "Student Services",
    description: "Scholarships and education updates.",
    icon: "🎓",
    link: "/students",
  },
  {
    title: "Tele-Law",
    description: "Online legal assistance information.",
    icon: "⚖️",
    link: "https://tele-law.in/",
  },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tag">WELCOME TO MACHANPALLI</span>

          <h1>Village Online Services in Machanpalli</h1>

          <p>
            Machanpalli గ్రామ ప్రజలకు government online services,
            PAN Card information, Aadhaar services, student
            scholarships మరియు digital services వివరాలను
            ఒకే చోట తెలుసుకోండి.
          </p>

          <a className="primary-btn" href="#services">
            Explore Services →
          </a>
        </div>

        <img
          className="hero-image"
          src="/images/village-services.jpg"
          alt="Village digital services"
        />
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <span className="tag">ABOUT OUR CENTRE</span>
          <h2>Digital Services for Our Village</h2>
          <p>
            మా గ్రామ ప్రజలకు online applications, government
            schemes మరియు student updates గురించి సులభమైన
            సమాచారం అందించడం మా లక్ష్యం.
          </p>
        </div>
      </section>

      
<section className="village-updates" id="updates">
  <div className="updates-heading">
    <span className="updates-label">OUR VILLAGE • OUR FUTURE</span>
    <h2>Village Updates &amp; Information</h2>
    <p>
      గ్రామ ప్రజలకు ఉపయోగపడే ముఖ్యమైన సమాచారం,
      విద్యా అప్డేట్స్ మరియు ఉచిత డెమో క్లాసులు.
    </p>
  </div>

  <div className="updates-cards">
    {/* Student Updates */}
    <article className="update-card">
      <div className="update-image student-image">
        <img
          src="/images/student-services.jpg"
          alt="Student education and scholarship updates"
        />
        <span className="update-tag">STUDENTS</span>
      </div>

      <div className="update-content">
        <h3>Student Updates</h3>
        <p>
          Scholarships, exam notifications, education
          information మరియు విద్యార్థులకు ఉపయోగపడే అప్డేట్స్.
        </p>
        <Link to="/students" className="update-btn">
          View Student Updates →
        </Link>
      </div>
    </article>

    {/* Free Demo Class */}
    <article className="update-card">
      <div className="update-image demo-image">
        <img
          src="/images/free-demo-class.jpg"
          alt="Free demo class announcement"
        />
        <span className="update-tag demo-tag">FREE DEMO</span>
      </div>

      <div className="update-content">
        <h3>Free Demo Classes</h3>
        <p>
          అందుబాటులో ఉన్న ఉచిత డెమో క్లాసులు, రిజిస్ట్రేషన్
          వివరాలు మరియు కొత్త బ్యాచ్ సమాచారం.
        </p>
        <a
          href="YOUR_DEMO_REGISTRATION_LINK"
          className="update-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register for Demo →
        </a>
      </div>
    </article>

    {/* Village Information */}
    <article className="update-card">
      <div className="update-image village-image">
        <img
          src="/images/village-information.jpg"
          alt="Village information and community updates"
        />
        <span className="update-tag village-tag">OUR VILLAGE</span>
      </div>

      <div className="update-content">
        <h3>Village Information</h3>
        <p>
          మంచన్‌పల్లి గ్రామ సమాచారం, ప్రభుత్వ పథకాలు,
          స్థానిక సేవలు మరియు ముఖ్యమైన గ్రామ అప్డేట్స్.
        </p>
        <a href="#services" className="update-btn">
          Explore Village Services →
        </a>
      </div>
    </article>
  </div>
</section>

    </main>
  );
}

export default Home;
