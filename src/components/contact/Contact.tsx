import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <article id="contactWrapper">
      <section id="insetContact">
        <article id="contactCards">
          <section>
            <i className="fas fa-check" />
            <p>Our customers are always left satisfied</p>
          </section>
          <section>
            <i className="far fa-clock" />
            <p>We are reliable, efficient, and respect your time</p>
          </section>
          <section>
            <i className="fas fa-user-tie" />
            <p>Our company is WCB insured</p>
          </section>
          <section>
            <i className="fas fa-comment-dollar" />
            <p>Anyone can get a free price quote anytime</p>
          </section>
        </article>
        <article id="contactInfoContent">
          <p>Kulwinder Bhullar</p>
          <p>
            <i className="fa fa-phone inline-icon" aria-hidden="true" />
            778-855-8386
          </p>
          <p>Napher Sandhu</p>
          <p>
            <i className="fa fa-phone inline-icon" aria-hidden="true" />
            604-355-6541
          </p>
          <p>
            <i className="fa fa-envelope inline-icon" aria-hidden="true" />
            surreykc@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt inline-icon" />
            BC Lower Mainland
          </p>
        </article>
      </section>
    </article>
  );
};
