import React from 'react';
import { FaWhatsapp, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa';

function Avatar() {
  return (
    <div className="avatar-container">
      <img src="/imagenes/foto.png" alt="Alejandra" className="avatar-image" />
      
      <div className="contact-links">
        <a href="mailto:alejandra.puerchambud2@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} /> {/* Icono de correo */}
        </a>

        <a href="https://wa.me/5730044482500" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} /> {/* Icono de WhatsApp */}
        </a>

        <a href="https://www.facebook.com/profile.php?id=100089968149681" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} /> {/* Icono de Facebook */}
        </a>

        <a href="https://github.com/1085332096" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> {/* Icono de GitHub */}
        </a>
      </div>
    </div>
  );
}

export default Avatar;
