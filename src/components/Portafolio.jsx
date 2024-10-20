import { useEffect, useState } from 'react';
import { Mail, Phone, Facebook, Github } from 'lucide-react';

export default function Portafolio() {
  const [repos, setRepos] = useState([]);
  const [visitCount, setVisitCount] = useState(0);
  const [dateTime, setDateTime] = useState('');
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Reemplaza 'tu-usuario' con tu nombre de usuario de GitHub
    fetch('https://api.github.com/users/1085332096/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => console.error('Error fetching repositories:', error));

    // Incrementar contador de visitas
    setVisitCount(prevCount => prevCount + 1);
  }, []);

  const handleShowDateTime = () => {
    const currentDateTime = new Date().toLocaleString();
    setDateTime(currentDateTime);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Mensaje enviado con éxito.');
        setFormData({ name: '', message: '' }); // Limpiar el formulario
      } else {
        setSubmitMessage('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error al enviar el mensaje.');
    }
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
        </ul>
      </nav>

      <div className="main-container">
        <aside className="sidebar">
          <div className="avatar-container">
            <img src="/imagenes/foto.png" alt="Alejandra Puechambud" className="avatar-image" />
          </div>
          <h1>Alejandra Puechambud</h1>
          <div className="contact-links">
            <a href="mailto:alejandrapuerchambud2@gmail.com" aria-label="Email"><Mail /></a>
            <a href="https://wa.me/573044482500" aria-label="Phone"><Phone /></a>
            <a href="https://www.facebook.com/profile.php?id=100089968149681" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href="https://github.com/1085332096" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
          </div>
          <section id="about">
            <h2>Acerca de mi</h2>
            <p>Hola, soy Alejandra, futura ingeniera informática que busca a través de su profesión contribuir a la solución de diversas problemáticas que se presentan en la actualidad enfocadas principalmente a las personas de escasos recursos.</p>
          </section>
          <div className="visit-counter">
            <p>Visitas: {visitCount}</p>
            <button onClick={handleShowDateTime}>Mostrar Fecha y Hora</button>
            {dateTime && <p>Fecha y Hora: {dateTime}</p>}
          </div>
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Contacto</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje"
              required
            />
            <button type="submit">Enviar</button>
            {submitMessage && <p>{submitMessage}</p>}
          </form>
        </aside>

        <main className="content">
          <section id="education">
            <h2>Educación</h2>
            {/* Educación */}
            <div className="card">
              <h3>Institución Educativa Municipal María Goretti</h3>
              <p>Dirección: Kr 15 11 a 15, San Juan de Pasto, Nariño, Colombia</p>
              <p>Fecha de inicio: Enero 2002</p>
              <p>Fecha final: Noviembre 2013</p>
              <p>Título obtenido: Bachiller académico</p>
              <a href="https://www.iemmariagoretti.edu.co/" target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
            {/* Más educación */}
          </section>

          <section id="experience">
            <h2>Experiencia</h2>
            {/* Experiencia */}
            <div className="card">
              <h3>Corporación Autónoma Regional de Nariño</h3>
              <p>Descripción de funciones: Durante mi tiempo como Técnico en Sistemas, estuve a cargo de la administración y soporte de SILA-VITAL...</p>
              <p>Fecha de inicio: Enero 2017</p>
              <p>Fecha final: Diciembre 2023</p>
              <p>Cargo: Técnico - Contratista</p>
              <a href="https://corponarino.gov.co/" target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
          </section>

          <section id="projects">
            <h2>Proyectos</h2>
            {repos.length > 0 ? (
              <div>
                {repos.map(repo => (
                  <div key={repo.id} className="card">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver repositorio</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>Cargando proyectos...</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
