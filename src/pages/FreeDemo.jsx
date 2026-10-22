
import { useState } from "react";
import "./FreeDemo.css";
import demoImage from "../assets/vinaytech-free-demo.jpg";
import "./FreeDemo.css";
const PHONE = "+919859831831";
const CONTACT_URL = "https://vinaytechhouse.com/contact-us/";

// Replace this with the current Zoom meeting invitation URL.
const ZOOM_JOIN_URL = "https://zoom.us/join";

const courses = [
  {
    name: "Excel & SQL",
    icon: "📊",
    color: "excel",
    short: "Work with data and databases.",
    english:
      "Excel helps organise and analyse data. SQL helps retrieve information from databases.",
    telugu:
      "Excel tho data ni organise cheyochu. SQL tho database nunchi required data teesukovachu.",
    suitable: "IT and Non-IT beginners",
  },
  {
    name: "Python",
    icon: "🐍",
    color: "python",
    short: "Learn programming from basics.",
    english:
      "Python is a programming language used for automation, data analysis, web development and AI.",
    telugu:
      "Python oka programming language. Automation, data analysis, web development, AI lo use chestaru.",
    suitable: "Beginners, students and career starters",
  },
  {
    name: "Power BI",
    icon: "📈",
    color: "powerbi",
    short: "Create reports and dashboards.",
    english:
      "Power BI turns data into interactive reports and dashboards that help people understand business results.",
    telugu:
      "Power BI tho data ni charts, reports, dashboards ga marchi easy ga understand chesukovachu.",
    suitable: "Business, commerce, IT and Non-IT students",
  },
  {
    name: "Microsoft Fabric",
    icon: "🔷",
    color: "fabric",
    short: "Explore a modern data platform.",
    english:
      "Microsoft Fabric brings data integration, engineering, analytics and reporting together in one platform.",
    telugu:
      "Microsoft Fabric lo data integration, engineering, analytics, reporting tools ni oka platform lo use chestaru.",
    suitable: "Students interested in analytics and data",
  },
  {
    name: "Snowflake",
    icon: "❄️",
    color: "snowflake",
    short: "Understand cloud data warehousing.",
    english:
      "Snowflake is a cloud data platform used to store, manage and analyse data.",
    telugu:
      "Snowflake cloud platform. Data ni store, manage, analyse cheyadaniki organisations use chestayi.",
    suitable: "SQL learners and data career aspirants",
  },
  {
    name: "Databricks",
    icon: "🧱",
    color: "databricks",
    short: "Discover data engineering and AI.",
    english:
      "Databricks supports data engineering, large-scale analytics and machine-learning workflows.",
    telugu:
      "Databricks tho large data processing, data engineering, analytics, machine learning workflows chestaru.",
    suitable: "Students exploring data and AI",
  },
  {
    name: "Data Engineering",
    icon: "⚙️",
    color: "engineering",
    short: "Learn how data moves and transforms.",
    english:
      "Data engineering involves collecting, cleaning, transforming and delivering data for analytics and applications.",
    telugu:
      "Different sources nunchi data collect chesi clean chesi, reports and analytics kosam ready chestaru.",
    suitable: "Students interested in data careers",
  },
  {
    name: "Data Analytics with Gen AI",
    icon: "🤖",
    color: "genai",
    short: "Explore analytics with AI tools.",
    english:
      "Discover how generative AI can assist with data questions, analysis ideas and everyday productivity.",
    telugu:
      "Generative AI tools tho data ni understand cheyadam, analysis ideas pondadam elaago examples tho telusukondi.",
    suitable: "IT and Non-IT learners",
  },
];

const students = [
  ["🎓", "Intermediate", "Explore beginner-level technology options."],
  ["💻", "B.Tech / B.E.", "Discover programming, data and cloud technologies."],
  ["📚", "B.Sc. / B.Com.", "Explore analytics and business data tools."],
  ["🖥️", "BCA / MCA", "Learn about programming, data and AI paths."],
  ["🚀", "Any Degree", "Find out which beginner demo suits your interests."],
  ["💼", "Graduates & Career Changers", "Explore options for your next learning step."],
];

function FreeDemo() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <main className="academy-page">
      <section className="academy-hero">
        <div className="academy-hero-copy">
          <span className="academy-kicker">MACHANPALLI CSC ACADEMY</span>

          <h1>
            Understand the Course
            <span> Before You Join!</span>
          </h1>

          <p>
            Explore IT and Non-IT courses through free introductory demos.
            Learn what each technology does, where it is used and whether
            it matches your interests.
          </p>

          <p className="academy-telugu">
           ముందుగా ఉచిత డెమో క్లాస్ వినండి. కోర్సు గురించి పూర్తిగా తెలుసుకోండి. ఆ తర్వాత మీ ఆసక్తికి తగిన కోర్సును ఎంచుకోండి.
          </p>

          <div className="academy-pills">
            <span>English & Telugu</span>
            <span>Online & Offline options</span>
            <span>Beginner friendly</span>
          </div>

          <div className="academy-hero-buttons">
            <a href={`tel:${PHONE}`} className="academy-btn academy-btn-yellow">
              ☎ Call to Register
            </a>
            <a href={CONTACT_URL} target="_blank" rel="noreferrer"
              className="academy-btn academy-btn-light">
              Register Online ↗
            </a>
          </div>

          <p className="academy-phone">
            Demo enquiries: <strong>+91 9859 831 831</strong>
          </p>
        </div>

      <a
  className="academy-poster-link"
  href={ZOOM_JOIN_URL}
  target="_blank"
  rel="noreferrer"
>
  <img
    src={demoImage}
    alt="Vinay Tech Free Demo Class"
    className="academy-poster-image"
  />
  <span>Click poster to open Zoom ↗</span>
</a>
      </section>

      <section className="academy-how">
        <div className="academy-section-heading">
          <span>HOW IT WORKS</span>
          <h2>First Learn. Then Decide.</h2>
        </div>

        <div className="academy-steps">
          <article>
            <b>01</b>
            <h3>Explore Courses</h3>
            <p>Click a course logo to understand what it does.</p>
          </article>
          <article>
            <b>02</b>
            <h3>Attend Free Demo</h3>
            <p>Ask about available online or offline demo sessions.</p>
          </article>
          <article>
            <b>03</b>
            <h3>Choose Your Path</h3>
            <p>Understand the course and then decide whether to enrol.</p>
          </article>
        </div>
      </section>

      <section className="academy-courses" id="courses">
        <div className="academy-section-heading">
          <span>CLICK A COURSE TO LEARN MORE</span>
          <h2>Which Technology Do You Want to Explore?</h2>
          <p>
            Simple explanations in English and Telugu for students who
            are new to these technologies.
          </p>
        </div>

        <div className="academy-course-grid">
          {courses.map((course) => {
            const isSelected = selectedCourse === course.name;

            return (
              <article
                className={`academy-course-card ${course.color} ${
                  isSelected ? "is-expanded" : ""
                }`}
                key={course.name}
              >
                <button
                  type="button"
                  className="academy-course-logo-button"
                  onClick={() =>
                    setSelectedCourse(isSelected ? null : course.name)
                  }
                  aria-expanded={isSelected}
                >
                  <span className="academy-course-icon">{course.icon}</span>
                  <span className="academy-logo-hint">
                    {isSelected ? "Close explanation −" : "Click to explore +"}
                  </span>
                </button>

                <h3>{course.name}</h3>
                <p className="academy-course-short">{course.short}</p>

                {isSelected && (
                  <div className="academy-course-details">
                    <h4>In simple English</h4>
                    <p>{course.english}</p>

                    <h4>తెలుగులో సులభంగా</h4>
                    <p>{course.telugu}</p>

                    <h4>Who can explore it?</h4>
                    <p>{course.suitable}</p>
                  </div>
                )}

                <button
                  type="button"
                  className="academy-explain-button"
                  onClick={() =>
                    setSelectedCourse(isSelected ? null : course.name)
                  }
                >
                  {isSelected ? "Show Less ↑" : "Understand This Course ↓"}
                </button>

                <a href={`tel:${PHONE}`} className="academy-course-call">
                  ☎ Enquire About Demo
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="academy-class-options">
        <div className="academy-section-heading">
          <span>CHOOSE YOUR LEARNING MODE</span>
          <h2>Online or Offline Demo Classes</h2>
          <p>
            Contact us to confirm the current demo schedule, available
            language and class location.
          </p>
        </div>

        <div className="academy-mode-grid">
          <article>
            <span>💻</span>
            <h3>Online Demo</h3>
            <p>
              Join from home using the current Zoom meeting invitation.
              Confirm the class date and link before joining.
            </p>
            <a href={ZOOM_JOIN_URL} target="_blank" rel="noreferrer">
              Open Zoom ↗
            </a>
          </article>

          <article>
            <span>🏫</span>
            <h3>Offline Demo</h3>
            <p>
              Ask about classroom demo availability, location and timing
              before visiting.
            </p>
            <a href={`tel:${PHONE}`}>Call for Details ☎</a>
          </article>

          <article>
            <span>🌐</span>
            <h3>English & Telugu</h3>
            <p>
              Ask which language options are available for your selected
              demo or training batch.
            </p>
            <a href={CONTACT_URL} target="_blank" rel="noreferrer">
              Contact Us ↗
            </a>
          </article>
        </div>
      </section>

      <section className="academy-eligibility">
        <div className="academy-section-heading">
          <span>FOR IT & NON-IT STUDENTS</span>
          <h2>Who Can Attend the Free Demo?</h2>
          <p>
            Interested in technology? Start by exploring a beginner-level
            session, regardless of your current course or background.
          </p>
        </div>

        <div className="academy-student-grid">
          {students.map(([icon, title, description]) => (
            <article key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="academy-note">
          <strong>Free demo first. Course decision later.</strong>
          <p>
            Demo availability, course prerequisites, fees and job
            requirements may vary. Confirm all details with the training
            provider before enrolling.
          </p>
        </div>

        <div className="academy-final-actions">
          <a href={`tel:${PHONE}`} className="academy-btn academy-btn-yellow">
            ☎ Call +91 9859 831 831
          </a>
          <a href={CONTACT_URL} target="_blank" rel="noreferrer"
            className="academy-btn academy-btn-dark">
            Register for a Demo ↗
          </a>
        </div>
      </section>

      <footer className="academy-footer">
        <div>
          <strong>Machanpalli CSC Academy</strong>
          <p>Explore technologies. Understand your options. Keep learning.</p>
        </div>
        <a href={CONTACT_URL} target="_blank" rel="noreferrer">
          Contact & Registration ↗
        </a>
      </footer>
    </main>
  );
}

export default FreeDemo;
