import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Principal</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>Nível de radiação</h2>
          <p>0,08 mSv/h</p>
        </div>
        <div className="card">
          <h2>Geração de energia</h2>
          <p>1,405 MW</p>
        </div>
      </div>
      <div className="alerts">
        <h2>Alertas Recentes</h2>
        <p style={{ color: "green" }}>Sistemas operando normalmente</p>
      </div>
    </div>
  );
};

export default Dashboard;
