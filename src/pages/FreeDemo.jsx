
import { useEffect, useState } from "react";
import "./FreeDemo.css";

import powerbiDemo from "../assets/powerbidemo.png";
import image1 from "../assets/1st.png";
import image2 from "../assets/2nd.png";
import image3 from "../assets/3rd.png";
import image4 from "../assets/4th.png";
import image5 from "../assets/5th.png";
import image6 from "../assets/6th.png";

const demoImages = [image1, image2, image3, image4, image5, image6];
const zoomUrl = "https://us02web.zoom.us/j/3366336633";

export default function FreeDemo() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % demoImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + demoImages.length) % demoImages.length);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % demoImages.length);
  };

  return (
    <main className="free-demo-page">
      <div className="free-demo-container">
        <div className="demo-top-layout">
          <div className="demo-heading-text">
            <h1>Free Demo Classes</h1>

            
<p>
  Learn Data Analytics, Excel, SQL, Power BI and Python to develop
  job-relevant skills and prepare for career opportunities in IT
  and Non-IT sectors.
</p>

<h2>ఉచిత డెమో క్లాసులు</h2>

<p>
  ఈ కోర్సులో Data Analytics, Excel, SQL, Power BI మరియు Python
  నేర్చుకొని IT మరియు Non-IT రంగాల్లో ఉద్యోగ అవకాశాల కోసం
  సిద్ధం కావచ్చు. ముందుగా ఉచిత డెమో క్లాస్‌కు హాజరై కోర్సు
  గురించి తెలుసుకోండి.
</p>

<p>
  Degree final-year students, graduates, freshers and job seekers
  can join the free demo to explore the course and understand
  how these skills may support their career goals.
</p>

          </div>

          <a
            href={zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-side-image-link"
          >
            <img
              src={powerbiDemo}
              alt="Power BI Free Demo Class"
              className="demo-side-image"
            />
            <span>🔗 Join Live Demo</span>
          </a>
        </div>

        <section className="demo-slider-section">
          <a
            href={zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-image-link"
            aria-label="Click to join the live Zoom demo"
          >
            <img
              src={demoImages[current]}
              alt={`Free Demo Class Poster ${current + 1}`}
              className="demo-slider-image"
            />
          </a>

          <button
            type="button"
            className="demo-arrow demo-arrow-left"
            onClick={previousImage}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <button
            type="button"
            className="demo-arrow demo-arrow-right"
            onClick={nextImage}
            aria-label="Next image"
          >
            &#10095;
          </button>

          <div className="demo-slider-dots">
            {demoImages.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrent(index)}
                className={current === index ? "active" : ""}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <p className="demo-image-note">
          Click the image to join the live demo on Zoom.
          <br />
          డెమో క్లాస్‌లో చేరడానికి ఇమేజ్‌పై క్లిక్ చేయండి.
        </p>

        <section className="demo-join-details">
          <h2>🔗 Join the Live Demo</h2>
          <p>
            <strong>Zoom Password:</strong> 3366
          </p>
          <p>
            Zoom app ద్వారా లేదా browser లో link open చేసి demo class
            లో join అవ్వండి.
          </p>
          <a
            href={zoomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-join-button"
          >
            Join Live Demo →
          </a>
        </section>

        <section className="demo-class-types">
          <article>
            <h2>💻 Online Classes</h2>
            <p>
              Learn from home using online classes through Zoom,
              subject to batch availability.
            </p>
            <p>ఇంటి నుంచే Zoom ద్వారా ఆన్‌లైన్ క్లాసులు వినవచ్చు.</p>
          </article>

          <article>
            <h2>🏫 Offline Classes</h2>
            <p>
              Contact the training team to confirm classroom batches
              and timings in Hyderabad.
            </p>
            <p>హైదరాబాద్‌లో ఆఫ్‌లైన్ క్లాసుల వివరాల కోసం సంప్రదించండి.</p>
          </article>
        </section>

        <section className="demo-contact">
          <h2>Don't Miss the Free Demo!</h2>
          <p>
            Call us at: <a href="tel:+919859831831">+91 9859 831 831</a>
          </p>
          <p>
            Flat No: 606, Nilgiri Block, Adithya Enclave,
            Beside Ameerpet Metro, Hyderabad 500 016.
          </p>
          <a
            href="https://vinaytechhouse.com/data-analytics-course-in-hyderabad/"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-join-button"
          >
            Explore Data Analytics Course
          </a>
          <a
            href="https://vinaytechhouse.com/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-contact-button"
          >
            Contact Us
          </a>
        </section>
      </div>
    </main>
  );
}
