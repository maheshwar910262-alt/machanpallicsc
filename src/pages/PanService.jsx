
import { Link } from "react-router-dom";
import "./PanService.css";

const services = [
  {
    number: "01",
    title: "కొత్త PAN కార్డు",
    subtitle: "New PAN Card",
    documents: [
      "ఆధార్ కార్డు",
      "ఫోటో, సంతకం — అవసరమైతే",
      "మొబైల్ నంబర్",
      "ఈమెయిల్ ఐడీ",
      "అధికారికంగా ఆమోదించిన గుర్తింపు పత్రాలు",
    ],
  },
  {
    number: "02",
    title: "పుట్టిన తేదీ సవరణ",
    subtitle: "Date of Birth Correction",
    documents: [
      "ప్రస్తుత PAN కార్డు వివరాలు",
      "ఆధార్ కార్డు",
      "సరైన పుట్టిన తేదీకి ఆధార పత్రం",
      "10వ తరగతి మెమో — అంగీకరిస్తే",
      "మొబైల్ నంబర్, ఈమెయిల్ ఐడీ",
    ],
  },
  {
    number: "03",
    title: "PAN వివరాల సవరణ",
    subtitle: "PAN Card Correction",
    documents: [
      "ప్రస్తుత PAN కార్డు వివరాలు",
      "ఆధార్ కార్డు",
      "పేరు లేదా ఇతర సవరణకు ఆధార పత్రం",
      "ఫోటో, సంతకం — అవసరమైతే",
      "మొబైల్ నంబర్, ఈమెయిల్ ఐడీ",
    ],
  },
];

function PanService() {
  return (
    <main className="pan-page">
      <section className="pan-hero">
        <span className="pan-badge">
          మంచన్‌పల్లి గ్రామ ప్రజలకు మాత్రమే
        </span>

        <h1>PAN కార్డు సేవలు</h1>

        <p className="pan-telugu">
          కొత్త PAN కార్డు, పుట్టిన తేదీ సవరణ మరియు ఇతర
          వివరాల సవరణకు సంబంధించిన సమాచారం తెలుసుకోండి.
        </p>

        <a href="#pan-options" className="pan-primary-btn">
          సేవలను చూడండి ↓
        </a>
      </section>

      <section className="pan-section" id="pan-options">
        <div className="pan-heading">
          <span>DOCUMENT CHECKLIST</span>
          <h2>మీకు కావలసిన సేవను ఎంచుకోండి</h2>
          <p>దరఖాస్తుకు ముందు అవసరమైన పత్రాలను సిద్ధం చేసుకోండి.</p>
        </div>

        <div className="pan-grid">
          {services.map((service) => (
            <article className="pan-card" key={service.number}>
              <span className="pan-number">{service.number}</span>

              <h2>{service.title}</h2>
              <p className="pan-subtitle">{service.subtitle}</p>

              <h3>కావలసిన పత్రాలు</h3>

              <ul className="pan-documents">
                {service.documents.map((document) => (
                  <li key={document}>
                    <span aria-hidden="true">✓</span>
                    {document}
                  </li>
                ))}
              </ul>

              <a
                className="pan-outline-btn"
                href="https://www.protean-tinpan.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                అధికారిక PAN పోర్టల్ ↗
              </a>
            </article>
          ))}
        </div>

        <div className="pan-note">
          <h3>ముఖ్యమైన సమాచారం</h3>
          <p>
            ఆధార్ మరియు 10వ తరగతి మెమోలో వివరాలు సరిపోకపోతే,
            సంబంధిత సవరణకు ఏ పత్రాలు అంగీకరిస్తారో అధికారికంగా
            నిర్ధారించుకోండి. అన్ని సందర్భాల్లో 10వ తరగతి మెమో
            అంగీకరించబడుతుందని భావించకండి.
          </p>
        </div>
      </section>

      <section className="pan-section">
        <div className="pan-note">
          <h2>🔗 PAN–Aadhaar లింక్ స్థితి</h2>
          <p>
            మీ PAN కార్డుకు ఆధార్ లింక్ అయిందో లేదో అధికారిక
            ఆదాయపు పన్ను శాఖ వెబ్‌సైట్‌లో తనిఖీ చేయండి.
            లింకింగ్ అవసరం మరియు మినహాయింపులను అక్కడే నిర్ధారించుకోండి.
          </p>

          <a
            className="pan-primary-btn"
            href="https://www.incometax.gov.in/iec/foportal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            అధికారిక వెబ్‌సైట్ తెరవండి ↗
          </a>
        </div>
      </section>

      <section className="pan-section gazette-section">
        <div className="gazette-card">
          <div className="gazette-icon">📄</div>

          <div className="gazette-content">
            <span className="pan-label">FORM DOWNLOAD</span>
            <h2>గెజిట్ ఫారం — Annexure A</h2>

            <p>
              పేరు మార్పుకు ఈ ఫారం అవసరమైతే, సంబంధిత
              దరఖాస్తుకు సరిపోయే ఫారం ఉపయోగించండి.
            </p>

            <a
              className="pan-primary-btn"
              href="/forms/NAnnexure-A.pdf"
              download="NAnnexure-A.pdf"
            >
              ఫారం డౌన్‌లోడ్ చేయండి ↓
            </a>
          </div>
        </div>
      </section>

      <section className="pan-contact">
        <span className="pan-badge">స్థానిక సేవా సహాయం</span>

        <h2>మంచన్‌పల్లి గ్రామ PAN దరఖాస్తు సహాయం</h2>
        <p>
          మంచన్‌పల్లి గ్రామ ప్రజలు దరఖాస్తు సహాయం కోసం
          క్రింది కేంద్రాన్ని సంప్రదించవచ్చు.
        </p>

        <div className="pan-contact-card">
          <div className="pan-contact-icon">🏢</div>

          <h3>గ్యాస్ ఆఫీస్, మాచన్‌పల్లి</h3>

          <p>
            <strong>సంప్రదించవలసిన వ్యక్తి:</strong>
            <br />
            శ్రీ K. Mallikarjun Reddy
          </p>
<p>లేదా</p>
          <p>
            <strong>CSC / VLE పేరు:</strong> KMR
          </p>

          <p className="pan-contact-number">
            <strong>మొబైల్:</strong> 63016047947
          </p>

          <a className="pan-primary-btn" href="tel:63016047947">
            📞 VLE KMR కి కాల్ చేయండి
          </a>
        </div>

        <p className="pan-village-notice">
          ఈ సేవా సహాయం మంచన్‌పల్లి గ్రామ ప్రజల కోసం మాత్రమే.
          పత్రాలు, ఫీజులు మరియు సేవ లభ్యతను ముందుగా నిర్ధారించుకోండి.
        </p>
      </section>

      <section className="pan-section">
        <div className="pan-note pan-safety-note">
          <h2>🔒 మీ PAN వివరాలను సురక్షితంగా ఉంచుకోండి</h2>

          <ul className="pan-documents">
            <li>
              <span>⚠️</span>
              మీ PAN నంబర్‌ను తెలియని వ్యక్తులతో పంచుకోవద్దు.
            </li>
            <li>
              <span>⚠️</span>
              PAN కార్డు పూర్తి ఫోటోను అనవసరంగా WhatsAppలో పంపవద్దు.
            </li>
            <li>
              <span>⚠️</span>
              OTP, బ్యాంకు PIN, పాస్‌వర్డ్ ఎవరికీ చెప్పవద్దు.
            </li>
            <li>
              <span>⚠️</span>
              మీ PAN వివరాలను అధికారిక ప్రభుత్వ పోర్టల్ లేదా
              ధృవీకరించిన అధికారిక సేవా కేంద్రంలో మాత్రమే సమర్పించండి.
            </li>
            <li>
              <span>⚠️</span>
              ఫోన్ లేదా మెసేజ్ ద్వారా వివరాలు అడిగే వ్యక్తి
              గుర్తింపును ముందుగా నిర్ధారించుకోండి.
            </li>
          </ul>

          <p>
            <strong>ముఖ్య గమనిక:</strong> VLE KMR పేరుతో వచ్చిన
            కాల్ లేదా సందేశమైనా మీ OTP లేదా పాస్‌వర్డ్‌ను
            పంచుకోవద్దు. ఈ వెబ్‌సైట్‌లో PAN నంబర్ నమోదు
            చేయవలసిన అవసరం లేదు.
          </p>
        </div>
      </section>

      <div className="pan-back">
        <Link to="/">← హోమ్ పేజీకి తిరిగి వెళ్లండి</Link>
      </div>

      <p className="pan-disclaimer">
        KMR Village Services ఒక స్వతంత్ర సమాచార వెబ్‌సైట్ మాత్రమే;
        ఇది అధికారిక ప్రభుత్వ వెబ్‌సైట్ కాదు. PAN దరఖాస్తు అర్హత,
        ఫీజులు, పత్రాలు మరియు PAN–Aadhaar నియమాలను అధికారిక
        పోర్టల్‌లో నిర్ధారించుకోండి.
      </p>
    </main>
  );
}

export default PanService;
