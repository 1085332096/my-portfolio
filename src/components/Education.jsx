import React from 'react';

function Education() {
  return (
    <div className="component-container">
      <h2>Educación</h2>
      <div className="item educacion">
         <h3>Institución Educativa Municipal Maria Goretti</h3>
         <p> <strong>Dirección</strong> Kr 19 15 a 53, San Juan de Pasto, Nariño,  Colombia</p>
         <p><strong>Fecha de inicio:</strong> Enero 2002</p>
         <p><strong>Fecha final:</strong> Diciembre 2013</p>
         <p><strong>Titulo Obtenido:</strong> Bachiller Academico</p>
        <p>
          <strong>Más información:</strong>
          <a href="https://www.iemmariagoretti.edu.co/">
          https://www.mariagoretti.edu.co
          </a>
        </p>
        </div>
        <div className="item educacion">
         <h3>Instituto Técnico COLSUP</h3>
         <p> <strong>Dirección</strong> Carrera 29a #1867, San Juan de Pasto, Nariño,  Colombia</p>
         <p><strong>Fecha de inicio:</strong> Enero 2014</p>
         <p><strong>Fecha final:</strong> Diciembre 2015</p>
        <p>
          <strong>Más información:</strong>
          <a href="https://colsup.edu.co/index.php/contacto">
          https://colsup.edu.co/index.php/contacto
          </a>
        </p>
      </div>
     

    </div>
  );
}

export default Education;