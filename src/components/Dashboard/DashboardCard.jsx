import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, image, description, link }) => {
  return (
    <div className="dashboard-card">
      <img src={image} alt={title} className="dashboard-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="dashboard-link">Go to {title}</Link>
    </div>
  );
};

export default DashboardCard;
