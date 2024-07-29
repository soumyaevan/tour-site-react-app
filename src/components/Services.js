import Title from "./Title";
import { servicesData } from "../data";
function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { id, servicetitle, serviceicon, servicetext } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={serviceicon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{servicetitle}</h4>
                <p className="service-text">{servicetext}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Services;
