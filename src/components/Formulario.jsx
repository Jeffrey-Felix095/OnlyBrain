import React from 'react';
import * as Components from './FormularioS';
import './aditional.css';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Formulario = () => {
  const [signIn, toggle] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [nombre, setNombre] = useState('');
  const [especializacion, setEspecializacion] = useState('');
  const [contacto, setContacto] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [informacion, setInformacion] = useState('');
  const [comentarios2, setComentarios2] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
  const handleSubmit = () => {
    // Reiniciar los valores de los campos de entrada
    setNombre('');
    setEspecializacion('');
    setContacto('');
    setComentarios('');
  };
  const handleSubmit2 = () => {

    // Reiniciar los valores de los campos de entrada
    setNombre2('');
    setTipoEmpresa('');
    setInformacion('');
    setComentarios2('');
  };
  const handleNombre2Change = (event) => {
    setNombre2(event.target.value);
  };

  const handleTipoEmpresaChange = (event) => {
    setTipoEmpresa(event.target.value);
  };

  const handleInformacionChange = (event) => {
    setInformacion(event.target.value);
  };

  const handleComentarios2Change = (event) => {
    setComentarios2(event.target.value);
  };
  // Funciones para manejar los cambios de los campos de entrada
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEspecializacionChange = (event) => {
    setEspecializacion(event.target.value);
  };

  const handleContactoChange = (event) => {
    setContacto(event.target.value);
  };

  const handleComentariosChange = (event) => {
    setComentarios(event.target.value);
  };
  return (
    <div className='backGround'>
      <div style={{ position: 'relative' }}>
        <Components.ButtonBrain>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
            <span className="text">Brain Spark</span>
          </Link>
        </Components.ButtonBrain>
      </div>
      <div className='form-1'>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title >Únete a nuestro equipo</Components.Title>
              <Components.Input type='text' placeholder='Nombre' value={nombre} onChange={handleNombreChange} />
              <Components.Input type='text' placeholder='Especialización' value={especializacion} onChange={handleEspecializacionChange} />
              <Components.Input type='text' placeholder='Correo electrónico' value={contacto} onChange={handleContactoChange} />
              <Components.Input type='text' placeholder='Comentarios Adicionales' value={comentarios} onChange={handleComentariosChange} />
              <Components.Button onClick={(e) => {
                e.preventDefault();
                setShowPopup2(true);
                handleSubmit();
              }}>Enviar Solicitud</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Permítenos conocer tu negocio</Components.Title>
              <Components.Input type='text' placeholder='Nombre' value={nombre2} onChange={handleNombre2Change}/>
              <Components.Input type='text' placeholder='Tipo de empresa' value={tipoEmpresa} onChange={handleTipoEmpresaChange}/>
              <Components.Input type='text' placeholder='Correo electrónico' value={informacion} onChange={handleInformacionChange}/>
              <Components.Input type='text' placeholder='Comentarios Adicionales' value={comentarios2} onChange={handleComentarios2Change}/>
              <Components.Button onClick={(e) => {
                e.preventDefault();
                setShowPopup(true);
                handleSubmit2();
              }}>Enviar Solicitud</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                {showPopup2 && (
                  <div className="popup">
                    <div className="popup-content">
                      <p className="popup-title">¡Su solicitud ha sido enviada exitosamente!</p>
                      <p className="popup-message">Nos pondremos en contacto con usted lo antes posible.</p>
                      <button className="popup-button" onClick={() => {setShowPopup2(false);handleButtonClick();}}>
                        Aceptar
                      </button>
                    </div>
                  </div>
                )}
                <Components.Title>¿Deseas impulsar el crecimiento de tu negocio?</Components.Title>
                <Components.Paragraph>
                  Para mantenernos en contacto, compártenos información sobre tu negocio.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Enviar una solicitud
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                {showPopup && (
                  <div className="popup">
                    <div className="popup-content">
                      <p className="popup-title">¡Su solicitud ha sido enviada exitosamente!</p>
                      <p className="popup-message">Nos pondremos en contacto con usted lo antes posible.</p>
                      <button className="popup-button" onClick={() =>{ setShowPopup(false);handleButtonClick();}}>
                        Aceptar
                      </button>
                    </div>
                  </div>
                )}
                <Components.Title>¡Hola, amigo!</Components.Title>
                <Components.Paragraph>
                  ¿Estás interesado en colaborar con nosotros?
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Enviar una solicitud
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>

      </div>
    </div>
  );
};

export default Formulario;