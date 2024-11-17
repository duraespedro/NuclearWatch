import React from 'react';
import './WasteManagement.css';

function WasteManagement() {
  return (
    <div className="waste-management">
      <h1>Gestão de Resíduos</h1>
      <section className="waste-status">
        <h3>Resíduo de Baixa Atividade</h3>
        <p>Última atualização: 2h atrás</p>
        <span className="status">Em processamento</span>
      </section>
      <section className="recycling-stats">
        <h3>Estatísticas de Reciclagem</h3>
        <div className="stats">
          <div>85% Processado</div>
          <div>15% Em tratamento</div>
        </div>
      </section>
    </div>
  );
}

export default WasteManagement;
