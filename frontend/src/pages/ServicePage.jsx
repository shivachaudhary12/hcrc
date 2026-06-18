import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServicePage.css";

function ServicePage() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="service-not-found">
        <h1>Service Not Found</h1>
        <p>This service page does not exist or the route slug is wrong.</p>
        <p>Current slug: {slug}</p>
        <Link to="/">Go Back Home</Link>
      </main>
    );
  }

  return (
    <main className="hcrc-service-page">
      <section className="hcrc-service-hero">
        <div className="hcrc-service-container hcrc-service-hero-grid">
          <div className="hcrc-service-hero-content">
            <p className="hcrc-service-eyebrow">HCRC Hospital Services</p>
            <h1>{service.title}</h1>
            <p className="hcrc-service-subtitle">{service.subtitle}</p>

            <div className="hcrc-service-actions">
              <button
                className={
                  service.label === "Emergency"
                    ? "hcrc-btn hcrc-btn-emergency"
                    : "hcrc-btn hcrc-btn-primary"
                }
              >
                {service.primaryCTA}
              </button>

              <button className="hcrc-btn hcrc-btn-outline">
                {service.secondaryCTA}
              </button>
            </div>
          </div>

          <div className="hcrc-service-info-card">
            <span className="hcrc-service-card-badge">Service</span>
            <h2>{service.label}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      <section className="hcrc-service-body">
        <div className="hcrc-service-container">
          <p className="hcrc-service-intro">{service.paragraph}</p>

          <div className="hcrc-service-grid">
            <div className="hcrc-service-card">
              <h2>{service.servicesTitle}</h2>
              <ul>
                {service.services.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hcrc-service-card">
              <h2>{service.featuresTitle}</h2>
              <ul>
                {service.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {service.label === "Emergency" && (
        <section className="hcrc-emergency-strip">
          <div className="hcrc-service-container">
            <h2>Need Emergency Help?</h2>
            <p>Call the hospital emergency desk immediately.</p>
            <button className="hcrc-btn hcrc-btn-emergency">
              CALL EMERGENCY NOW
            </button>
          </div>
        </section>
      )}

      <section className="hcrc-final-cta">
        <div className="hcrc-service-container">
          <h2>Need Medical Assistance?</h2>
          <p>
            Our healthcare team is ready to support you with safe, reliable, and
            compassionate care.
          </p>
          <button className="hcrc-btn hcrc-btn-primary">
            Book Appointment
          </button>
        </div>
      </section>
    </main>
  );
}

export default ServicePage;
