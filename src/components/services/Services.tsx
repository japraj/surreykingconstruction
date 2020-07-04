import React from "react";
import "./Services.css";
import Service from "./subcomponents/service/Service";
import { ServiceList, ServiceType } from "./ServicesList";

export const Services = () => {
  const serviceSet1 = ServiceList.map((service: ServiceType, index: number) => {
    return index === 0 || index % 2 === 0 ? (
      <Service service={service} key={service.name} expanded={index === 0} />
    ) : (
      <React.Fragment key={"fragment" + index} />
    );
  });
  const serviceSet2 = ServiceList.map((service: ServiceType, index: number) => {
    return index !== 0 && index % 2 !== 0 ? (
      <Service service={service} key={service.name} expanded={index === 1} />
    ) : (
      <React.Fragment key={"fragment2" + index} />
    );
  });
  return (
    <section id="servicesWrapper">
      <h2 id="servicesLabel">Services</h2>
      <section id="services">
        <section className="servicesContainer">{serviceSet1}</section>
        <section className="servicesContainer">{serviceSet2}</section>
      </section>
    </section>
  );
};
