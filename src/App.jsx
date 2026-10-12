
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ServiceCard from "./components/ServiceCard";
import PanService from "./pages/PanService";
import ServiceInfo from "./pages/ServiceInfo";
import VoterPage from "./pages/VoterPage";
import "./App.css";

const services = [
  {
    title: "PAN Card",
    description: "కొత్త PAN కార్డు మరియు సవరణ వివరాలు.",
    icon: "🪪",
    link: "/pan",
    internal: true,
  },
  {
    title: "Aadhaar Services",
    description: "ఆధార్ సేవలు మరియు అధికారిక సమాచారం.",
    icon: "🆔",
    link: "https://uidai.gov.in/",
  },
  {
    title: "Voter ID",
    description: "ఓటరు నమోదు మరియు వివరాల సవరణ.",
    icon: "🗳️",
    link: "/voter",
    internal: true,
  },
  {
    title: "ABHA Card",
    description: "డిజిటల్ హెల్త్ అకౌంట్ సమాచారం.",
    icon: "🏥",
    link: "https://abha.abdm.gov.in/",
  },
  {
    title: "e-Shram Card",
    description: "అసంఘటిత కార్మికుల రిజిస్ట్రేషన్ సమాచారం.",
    icon: "👷",
    link: "https://eshram.gov.in/",
  },
  {
    title: "DigiLocker",
    description: "డిజిటల్ పత్రాలు మరియు సర్టిఫికెట్లు.",
    icon: "📁",
    link: "https://www.digilocker.gov.in/",
  },
  {
    title: "Student Services",
    description: "విద్యార్థుల స్కాలర్‌షిప్‌లు మరియు విద్యా సమాచారం.",
    icon: "🎓",
    link: "/students",
    internal: true,
  },
  {
    title: "Tele-Law",
    description: "ఆన్‌లైన్ న్యాయ సహాయం గురించి సమాచారం.",
    icon: "⚖️",
    link: "https://tele-law.in/",
  },
];

const updates = [
  {
    title: "Student Updates",
    image: "/images/student-services.jpg",
    description:
      "Scholarships, exam notifications మరియు విద్యా సమాచారం.",
    link: "/students",
    button: "View Student Updates →",
    internal: true,
  },
  {
    title: "Free Demo Classes",
    image: "/images/free-demo-class.jpg",
    description:
      "ఉచిత డెమో క్లాసులు, రిజిస్ట్రేషన్ మరియు కొత్త బ్యాచ్ వివరాలు.",
    link: "YOUR_DEMO_REGISTRATION_LINK",
    button: "Register Now →",
  },
  {
    title: "Village Information",
    image: "/images/village-services.jpg",
    description:
      "మంచన్‌పల్లి గ్రామ సమాచారం, ప్రభుత్వ పథకాలు మరియు స్థానిక సేవలు.",
    link: "#services",
    button: "View Village Services →",
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
            మంచన్‌పల్లి గ్రామ ప్రజలకు ప్రభుత్వ ఆన్‌లైన్ సేవలు,
            PAN కార్డు సమాచారం, ఆధార్ సేవలు, విద్యార్థుల
            స్కాలర్‌షిప్‌లు మరియు డిజిటల్ సేవల వివరాలు
            ఒకే చోట తెలుసుకోండి.
          </p>

          <a className="primary-btn" href="#services">
            Explore Services →
          </a>
        </div>

        <img
          className="hero-image"
          src="/images/village-services.jpg"
          alt="Village online services"
        />
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <span className="tag">ABOUT OUR CENTRE</span>
          <h2>Digital Services for Our Village</h2>
          <p>
            గ్రామ ప్రజలకు ఆన్‌లైన్ దరఖాస్తులు, ప్రభుత్వ పథకాలు,
            విద్యార్థుల అప్డేట్స్ మరియు అధికారిక వెబ్‌సైట్
            లింకుల గురించి సులభమైన సమాచారం అందించడమే మా లక్ష్యం.
          </p>
        </div>
      </section>

      <section className="section updates-section" id="updates">
        <div className="section-heading">
          <span className="tag">LATEST INFORMATION</span>
          <h2>Village Updates &amp; Information</h2>
          <p>
            విద్యార్థులు మరియు గ్రామ ప్రజలకు ఉపయోగపడే
            ముఖ్యమైన సమాచారం ఇక్కడ తెలుసుకోండి.
          </p>
        </div>

        <div className="updates-grid">
          {updates.map((item) => (
            <article className="update-card" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="update-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.internal ? (
                  <Link className="update-btn" to={item.link}>
                    {item.button}
                  </Link>
                ) : item.link.startsWith("#") ? (
                  <a className="update-btn" href={item.link}>
                    {item.button}
                  </a>
                ) : (
                  <a
                    className="update-btn"
                    href={
                      item.link === "YOUR_DEMO_REGISTRATION_LINK"
                        ? "#contact"
                        : item.link
                    }
                    target={
                      item.link === "YOUR_DEMO_REGISTRATION_LINK"
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                  >
                    {item.link === "YOUR_DEMO_REGISTRATION_LINK"
                      ? "Contact for Demo →"
                      : item.button}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="students">
        <div className="section-heading">
          <span className="tag">FOR STUDENTS</span>
          <h2>Student Services</h2>
          <p>
            స్కాలర్‌షిప్‌లు మరియు విద్యార్థుల దరఖాస్తుల
            సమాచారం కోసం అధికారిక లింకులు ఉపయోగించండి.
          </p>

          <a
            className="primary-btn"
            href="https://scholarships.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Scholarship Portal →
          </a>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <span className="tag">ONLINE SERVICES</span>
          <h2>Government &amp; Digital Services</h2>
          <p>
            మీకు కావలసిన సేవను ఎంచుకుని అధికారిక వెబ్‌సైట్‌లో
            వివరాలు తెలుసుకోండి.
          </p>
        </div>

        <div className="service-search">
          <input
            type="search"
            placeholder="Search PAN, Aadhaar, Voter ID..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search services"
          />
        </div>

        <div className="services-grid">
          {filteredServices.map((service) =>
            service.internal ? (
              <Link
                className="service-card"
                to={service.link}
                key={service.title}
              >
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">View Details →</span>
              </Link>
            ) : (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            )
          )}
        </div>

        {filteredServices.length === 0 && (
          <p className="no-results">
            Services కనిపించలేదు. మరో పదంతో search చేయండి.
          </p>
        )}

        <p className="disclaimer">
          సేవల అర్హత, ఫీజులు మరియు పత్రాలు మారవచ్చు.
          దరఖాస్తు చేసే ముందు అధికారిక పోర్టల్‌లో నిర్ధారించుకోండి.
          ఇది స్వతంత్ర గ్రామ సమాచార వెబ్‌సైట్ మాత్రమే.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <span className="tag">MACHANPALLI VILLAGE</span>
        <h2>Online Services కోసం సహాయం కావాలా?</h2>

        <p>
          గ్రామ సేవల సమాచారం కోసం కేంద్రాన్ని సంప్రదించండి.
        </p>

        <p>
          <strong>Village:</strong> Machanpalli
        </p>

        <p>
          <strong>Contact Person:</strong> Mr. K. Mallikarjun Reddy
        </p>

        <p>
          PAN దరఖాస్తు సహాయం మంచన్‌పల్లి గ్రామ ప్రజల కోసం మాత్రమే.
        </p>

        <a className="primary-btn" href="tel:63016047947">
          Call VLE KMR
        </a>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="website">
      <header className="header">
        <Link className="brand" to="/">
          <img src="/csclogo.jpeg" alt="CSC logo" />
          <div>
            <h2>KMR Village Services</h2>
            <p>Machanpalli Digital Help Centre</p>
          </div>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <a href="/#students">Students</a>
          <a href="/#services">Services</a>
          <a href="/#updates">Updates</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      
<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/pan" element={<PanService />} />

  <Route
    path="/students"
    element={<ServiceInfo title="Student Services" />}
  />

  <Route path="/voter" element={<VoterPage />} />

  <Route
    path="/abha"
    element={<ServiceInfo title="ABHA Card Services" />}
  />
</Routes>

      <footer>
        <p>
          © {new Date().getFullYear()} KMR Village Services.
          All rights reserved.
        </p>
        <p>
          Independent village information website.
          Not affiliated with a government department.
        </p>
      </footer>
    </div>
  );
}

export default App;
