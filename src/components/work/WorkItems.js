import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href="https://e-commerce-website-swart-five.vercel.app/"
        className="work__button"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a
        href="https://travel-tourism-website.vercel.app/"
        className="work__button"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a
        href="https://landing-page-lime-rho.vercel.app/"
        className="work__button"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a
        href="https://calculator-project-39fu.vercel.app/"
        className="work__button"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
