
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VoterPage.css";

const PHONE = "6301604797";
const WHATSAPP = "916301604797";

// Official notification ప్రకారం deadline అవసరమైతే update చేయండి.
// ఈ తేదీని ప్రస్తుత అధికారిక గడువుగా నిర్ధారించకుండా ప్రచురించవద్దు.
const MLC_DEADLINE = "2026-11-07T00:00:00+05:30";

const voterServices = [
  {
    number: "01",
    icon: "🗳️",
    title: "కొత్త ఓటరు నమోదు",
    subtitle: "New Voter Registration",
    form: "Form 6",
    description:
      "అర్హత ఉన్న భారత పౌరులు ఓటరు జాబితాలో పేరు నమోదు చేసుకోవడానికి దరఖాస్తు సహాయం పొందవచ్చు.",
    documents: [
      "పుట్టిన తేదీకి ఆమోదించిన ఆధారం",
      "నివాస చిరునామా ఆధారం",
      "ఇటీవల తీసిన ఫోటో",
      "అధికారికంగా కోరిన ఇతర పత్రాలు",
    ],
  },
  {
    number: "02",
    icon: "🏠",
    title: "చిరునామా సవరణ",
    subtitle: "Address Change / Correction",
    form: "Form 8",
    description:
      "నివాసం మారినప్పుడు లేదా ఓటరు వివరాల్లో చిరునామా తప్పుగా ఉన్నప్పుడు సవరణ కోసం సహాయం పొందవచ్చు.",
    documents: [
      "ప్రస్తుత Voter ID వివరాలు",
      "ఆమోదించిన చిరునామా ఆధారం",
      "సరైన చిరునామా వివరాలు",
      "అధికారికంగా కోరిన ఇతర పత్రాలు",
    ],
  },
  {
    number: "03",
    icon: "📄",
    title: "వివరాల సవరణ",
    subtitle: "Voter Details Correction",
    form: "Form 8",
    description:
      "ఓటరు జాబితాలో పేరు లేదా ఇతర వివరాల్లో తప్పులు ఉంటే సవరణ దరఖాస్తు గురించి సమాచారం పొందండి.",
    documents: [
      "ప్రస్తుత Voter ID వివరాలు",
      "సరిచేయాల్సిన వివరాలకు ఆధారం",
      "అధికారికంగా కోరిన పత్రాలు",
    ],
  },
];

function MlcCountdown() {
  const [remaining, setRemaining] = useState(
    new Date(MLC_DEADLINE).getTime() - Date.now()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(new Date(MLC_DEADLINE).getTime() - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (remaining <= 0) {
    return (
      <div className="mlc-countdown expired">
        <h3>MLC నమోదు గడువు</h3>
        <p>
          చూపించిన countdown ముగిసింది. కొత్త గడువు లేదా తదుపరి
          నమోదు వివరాలను అధికారిక ఎన్నికల ప్రకటనలో నిర్ధారించుకోండి.
        </p>
        <a
          href="https://ceotelangana.nic.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telangana CEO అధికారిక వెబ్‌సైట్ ↗
        </a>
      </div>
    );
  }

  const units = [
    { label: "రోజులు", value: Math.floor(remaining / 86400000) },
    {
      label: "గంటలు",
      value: Math.floor((remaining % 86400000) / 3600000),
    },
    {
      label: "నిమిషాలు",
      value: Math.floor((remaining % 3600000) / 60000),
    },
    {
      label: "సెకన్లు",
      value: Math.floor((remaining % 60000) / 1000),
    },
  ];

  return (
    <div className="mlc-countdown">
      <span className="eyebrow">MLC REGISTRATION REMINDER</span>
      <h3>MLC ఓటరు నమోదు గడువు</h3>
      <p className="deadline-date">తేదీ: 06 నవంబర్ 2026</p>

      <div className="countdown-units">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <strong>{String(unit.value).padStart(2, "0")}</strong>
            <small>{unit.label}</small>
          </div>
        ))}
      </div>

      <p className="deadline-warning">
        గమనిక: ఇది ప్రదర్శన కోసం అమర్చిన తేదీ. దరఖాస్తు చేసే ముందు
        మీ నియోజకవర్గానికి వర్తించే తాజా అధికారిక గడువును నిర్ధారించుకోండి.
      </p>

      <a
        href="https://ceotelangana.nic.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="mlc-official-link"
      >
        అధికారిక సమాచారం తెలుసుకోండి ↗
      </a>
    </div>
  );
}

function SocialFooter() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "◎",
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: "f",
      url: "https://www.facebook.com/",
    },
    {
      name: "X",
      icon: "𝕏",
      url: "https://x.com/",
    },
    {
      name: "YouTube",
      icon: "▶",
      url: "https://www.youtube.com/",
    },
  ];

  return (
    <footer className="voter-social-footer">
      <div className="footer-brand-mark">KMR</div>
      <h3>KMR Village Services</h3>
      <p>CSC VLE K. Mahesh · Machanpalli</p>

      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
          >
            <span className={`social-icon social-${social.name.toLowerCase()}`}>
              {social.icon}
            </span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      <p className="footer-disclaimer">
        స్వతంత్ర గ్రామ సేవల సమాచార వెబ్‌సైట్. ప్రభుత్వ అధికారిక వెబ్‌సైట్ కాదు.
      </p>
    </footer>
  );
}

function VoterPage() {
  return (
    <main className="voter-page">
      <section className="voter-hero">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />

        <div className="hero-inner">
          <div className="voter-badge">
            <span className="badge-dot" />
            MACHANPALLI VILLAGE ONLY
          </div>

          <p className="hero-kicker">YOUR LOCAL CSC HELP CENTRE</p>

          <h1>
            Voter ID
            <span> సేవా సహాయం</span>
          </h1>

          <p className="hero-description">
            కొత్త ఓటరు నమోదు, చిరునామా మార్పు, వివరాల సవరణ మరియు
            MLC నమోదు గురించి సులభమైన సమాచారం. మంచన్‌పల్లి గ్రామ
            ప్రజలు ఇంటి నుంచే దరఖాస్తు సహాయం కోసం సంప్రదించవచ్చు.
          </p>

          <div className="hero-actions">
            <a className="voter-btn primary-btn" href="#contact">
              VLE ను సంప్రదించండి →
            </a>
            <a className="voter-btn outline-btn" href="#voter-services">
              సేవల వివరాలు చూడండి
            </a>
          </div>

          <div className="hero-trust">
            <span>✓ స్థానిక సహాయం</span>
            <span>✓ Call & WhatsApp</span>
            <span>✓ Fraud Awareness</span>
          </div>
        </div>
      </section>

      <section className="voter-section" id="voter-services">
        <div className="voter-heading">
          <span className="eyebrow">OUR SERVICES</span>
          <h2>మీకు కావలసిన సేవను ఎంచుకోండి</h2>
          <p>
            దరఖాస్తు చేయడానికి ముందు మీకు అవసరమైన పత్రాలు సిద్ధం చేసుకోండి.
          </p>
        </div>

        <div className="voter-grid">
          {voterServices.map((service) => (
            <article className="voter-card" key={service.number}>
              <div className="card-topline">
                <span className="service-icon">{service.icon}</span>
                <span className="voter-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p className="voter-subtitle">{service.subtitle}</p>
              <span className="voter-form">{service.form}</span>
              <p className="service-description">{service.description}</p>

              <h4>కావలసిన పత్రాలు</h4>
              <ul>
                {service.documents.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>

              <a className="voter-card-link" href="#contact">
                VLE సహాయం పొందండి →
              </a>
            </article>
          ))}
        </div>

        <div className="voter-info">
          <span className="info-icon">ⓘ</span>
          <div>
            <h3>ముఖ్యమైన గమనిక</h3>
            <p>
              అవసరమైన పత్రాలు మరియు వాటి ఆమోదం అధికారిక నియమాలపై
              ఆధారపడి ఉంటాయి. ఆధార్ వివరాలు సమర్పించాల్సిన అవసరం
              మరియు ఇతర పత్రాల గురించి అధికారిక సూచనలు నిర్ధారించుకోండి.
            </p>
          </div>
        </div>
      </section>

      <section className="voter-section mlc-section" id="mlc">
        <div className="voter-heading">
          <span className="eyebrow">MLC VOTER INFORMATION</span>
          <h2>MLC ఓటరు నమోదు ఎందుకు ముఖ్యం?</h2>
          <p>
            అర్హత కలిగిన Graduates మరియు Teachers తమకు వర్తించే MLC
            ఓటరు జాబితాలో పేరు నమోదు చేసుకోవాలి.
          </p>
        </div>

        <div className="mlc-grid">
          <article className="mlc-card">
            <div className="mlc-icon">🎓</div>
            <h3>Graduates MLC</h3>
            <p>
              సంబంధిత నియోజకవర్గంలో సాధారణ నివాసం ఉండి, వర్తించే
              అర్హతలు కలిగిన గ్రాడ్యుయేట్లు దరఖాస్తు చేసుకోవచ్చు.
              సాధారణంగా qualifying date కు ముందు కనీసం మూడు
              సంవత్సరాల క్రితం డిగ్రీ లేదా గుర్తించిన సమాన అర్హత
              కలిగి ఉండాలి.
            </p>
            <p className="mlc-form-note">సాధారణంగా ఉపయోగించే ఫారం: Form 18</p>
            <a
              href="https://ceotelangana.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telangana CEO సమాచారం ↗
            </a>
          </article>

          <article className="mlc-card">
            <div className="mlc-icon">📚</div>
            <h3>Teachers MLC</h3>
            <p>
              సంబంధిత నియోజకవర్గంలో నివసిస్తూ, వర్తించే అర్హత కలిగిన
              విద్యాసంస్థల్లో నిర్దేశించిన బోధనా అనుభవం ఉన్న
              ఉపాధ్యాయులు దరఖాస్తు చేసుకోవచ్చు.
            </p>
            <p className="mlc-form-note">సాధారణంగా ఉపయోగించే ఫారం: Form 19</p>
            <a
              href="https://ceotelangana.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telangana CEO సమాచారం ↗
            </a>
          </article>
        </div>

        <MlcCountdown />

        <div className="voter-warning">
          <span className="warning-icon">⚠️</span>
          <div>
            <h3>MLC ఓటు కోసం ప్రత్యేక నమోదు అవసరం</h3>
            <p>
              సాధారణ Voter ID ఉన్నంత మాత్రాన Graduates లేదా Teachers
              MLC జాబితాలో పేరు ఆటోమేటిక్‌గా చేరదు. అర్హత, నియోజకవర్గం,
              దరఖాస్తు గడువు మరియు పత్రాలను అధికారిక ప్రకటనలో నిర్ధారించుకోండి.
            </p>
          </div>
        </div>
      </section>

      <section className="voter-section">
        <div className="voter-heading">
          <span className="eyebrow">HOW TO GET HELP</span>
          <h2>ఇంటి నుంచే దరఖాస్తు సహాయం</h2>
          <p>
            మీకు సహాయం అవసరమైతే ముందుగా VLE తో ఫోన్ ద్వారా మాట్లాడండి.
          </p>
        </div>

        <div className="apply-grid">
          <article className="apply-card">
            <div className="apply-icon">📱</div>
            <h3>WhatsApp ద్వారా</h3>
            <ol>
              <li>మీ పేరు మరియు మంచన్‌పల్లి గ్రామ నివాసి అని తెలియజేయండి.</li>
              <li>ఏ సేవ కావాలో వివరించండి.</li>
              <li>అవసరమైన పత్రాల వివరాలు VLE ద్వారా తెలుసుకోండి.</li>
              <li>పత్రాలు పంపాల్సి ఉంటే ముందుగా సరైన ప్రక్రియను నిర్ధారించుకోండి.</li>
            </ol>
            <a
              className="voter-btn whatsapp-btn"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "నమస్కారం K. Mahesh గారు, నేను మంచన్‌పల్లి గ్రామం నుండి మాట్లాడుతున్నాను. Voter ID దరఖాస్తు సహాయం కావాలి."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ద్వారా సంప్రదించండి
            </a>
          </article>

          <article className="apply-card">
            <div className="apply-icon">☎️</div>
            <h3>ఫోన్ ద్వారా</h3>
            <ol>
              <li>సంప్రదింపు సమయాల్లో VLE కు కాల్ చేయండి.</li>
              <li>మీకు కావలసిన సేవ గురించి వివరించండి.</li>
              <li>అర్హత, పత్రాలు మరియు ప్రక్రియ గురించి అడగండి.</li>
              <li>దరఖాస్తు స్థితి, కార్డు అందించే విధానం గురించి తెలుసుకోండి.</li>
            </ol>
            <a className="voter-btn primary-btn" href={`tel:${PHONE}`}>
              📞 {PHONE} కి కాల్ చేయండి
            </a>
          </article>
        </div>
      </section>

      <section className="voter-contact" id="contact">
        <div className="contact-main">
          <span className="voter-badge contact-badge">
            CSC VLE · LOCAL SERVICE
          </span>
          <h2>మీ గ్రామం కోసం స్థానిక సేవా సహాయం</h2>
          <p>
            ఈ సదుపాయం మంచన్‌పల్లి గ్రామ ప్రజల కోసం మాత్రమే.
            ఇంటి నుంచే దరఖాస్తు సహాయం గురించి ముందుగా సంప్రదించండి.
          </p>
        </div>

        <div className="voter-contact-card">
          <div className="contact-avatar">KM</div>
          <p className="contact-role">YOUR LOCAL SERVICE CONTACT</p>
          <h3>K. Mahesh</h3>
          <p className="contact-village">📍 మంచన్‌పల్లి గ్రామం</p>

          <div className="contact-time">
            <span>సోమవారం – శనివారం</span>
            <strong>సాయంత్రం 6:00 – రాత్రి 10:00</strong>
          </div>

          <div className="contact-time">
            <span>ఆదివారం</span>
            <strong>ఉదయం 9:00 – రాత్రి 10:00</strong>
          </div>

          <div className="vle-buttons">
            <a className="voter-btn primary-btn" href={`tel:${PHONE}`}>
              📞 Call VLE
            </a>

            <a
              className="voter-btn whatsapp-btn"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Message
            </a>
          </div>

          <p className="vle-notice">
            VLE పేరుతో APK ఫైళ్లు లేదా అపరిచిత application links
            పంపబడవు. ఇతర వివరాల కోసం నేరుగా కాల్ చేయండి.
          </p>
        </div>
      </section>

      <section className="safety-section">
        <div className="safety-icon">🔐</div>
        <div>
          <h2>ఆన్‌లైన్ మోసాల పట్ల జాగ్రత్త!</h2>
          <ul>
            <li>మీ OTP, పాస్‌వర్డ్ లేదా బ్యాంక్ PIN ఎవరికీ చెప్పవద్దు.</li>
            <li>తెలియని APK files లేదా అనుమానాస్పద links install చేయవద్దు.</li>
            <li>అధికారిక రుసుములు, సేవా ఛార్జీలు ఉంటే ముందుగానే తెలుసుకోండి.</li>
            <li>
              Voter card వచ్చిన తర్వాత email లేదా WhatsApp ద్వారా
              అందించే సదుపాయం ఉందో VLE తో ముందుగా నిర్ధారించుకోండి.
            </li>
          </ul>
        </div>
      </section>

      <div className="voter-back">
        <Link to="/">← హోమ్ పేజీకి తిరిగి వెళ్లండి</Link>
      </div>

      <p className="voter-disclaimer">
        ఈ వెబ్‌సైట్ స్వతంత్ర సమాచార మరియు సేవా సహాయ పేజీ మాత్రమే.
        ఇది Election Commission అధికారిక వెబ్‌సైట్ కాదు. అర్హత,
        పత్రాలు, గడువులు మరియు దరఖాస్తు ఆమోదం సంబంధిత అధికారుల
        నియమాలకు లోబడి ఉంటాయి.
      </p>

      <SocialFooter />
    </main>
  );
}

export default VoterPage;
