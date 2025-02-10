import React from "react";
import dashboardData from "../Data/dashboardData";
import DashboardCard from "../components/Dashboard/dashboardCard";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the School Dashboard</h2>
      <p>Manage different aspects of the school system.</p>

      <div className="dashboard-grid">
        {dashboardData.map((item, index) => (
          <DashboardCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
