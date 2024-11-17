import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h1>Perfil</h1>
      <section className="user-info">
        <h2>Usuário</h2>
        <p>
          <i className="fa fa-user-circle"></i> Nome: João Silva
        </p>
        <p>
          <i className="fa fa-envelope"></i> Email: joao.silva@example.com
        </p>
        <p>
          <i className="fa fa-phone"></i> Telefone: (11) 98765-4321
        </p>
      </section>
      <section className="certifications">
        <h2>Certificações</h2>
        <ul>
          <li>
            <i className="fa fa-certificate"></i> Introdução à Energia Nuclear
          </li>
          <li>
            <i className="fa fa-certificate"></i> Segurança Nuclear
          </li>
        </ul>
      </section>
      <section className="social-media">
        <h2>Compartilhe:</h2>
        <div className="icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-youtube"></i>
        </div>
      </section>
    </div>
  );
}

export default Profile;
