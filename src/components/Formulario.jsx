import React from 'react';
import * as Components from './FormularioS';
import './aditional.css';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const [signIn, toggle] = React.useState(true);

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
              <Components.Title >Trabaja Con Nosotros!</Components.Title>
              <Components.Input type='text' placeholder='Nombre' />
              <Components.Input type='text' placeholder='Especialización' />
              <Components.Input type='text' placeholder='Información de contacto' />
              <Components.Input type='text' placeholder='Comentarios Adicionales' />
              <Components.Button>Enviar Solicitud</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Dejanos Conocer Tu Negocio</Components.Title>
              <Components.Input type='text' placeholder='Nombre' />
              <Components.Input type='text' placeholder='Tipo de empresa' />
              <Components.Input type='text' placeholder='Información de contacto' />
              <Components.Input type='text' placeholder='Comentarios Adicionales' />
              <Components.Button >Enviar Solicitud</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Quieres hacer crecer tu negocio?</Components.Title>
                <Components.Paragraph>
                  Para mantenerse conectado con nosotros, brindanos información acerca de tu negocio.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Iniciar Sesión
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hola amigo!</Components.Title>
                <Components.Paragraph>
                  Estás más interesado en trabajar con nosotros?
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Postularse
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