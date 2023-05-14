import React from 'react';
import * as Components from './FormularioS';
import './aditional.css';

const Formulario = () => {
  const [signIn, toggle] = React.useState(true);
  return (
    <body className='backGround'>
      <div className='form-1'>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Crea una cuenta</Components.Title>
              <Components.Input type='text' placeholder='Nombre' />
              <Components.Input type='email' placeholder='Correo Electrónico' />
              <Components.Input type='password' placeholder='Contraseña' />
              <Components.Button>Registrarse</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Inicia sesión</Components.Title>
              <Components.Input type='email' placeholder='Correo Electrónico' />
              <Components.Input type='password' placeholder='Contraseña' />
              <Components.Anchor href='#'>Olvidaste tu contraseña?</Components.Anchor>
              <Components.Button>Iniciar Sesión</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>¡Bienvenido de nuevo!</Components.Title>
                <Components.Paragraph>
                  Para mantenerse conectado con nosotros, inicie sesión con su información personal
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Iniciar Sesión
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hola amigo!</Components.Title>
                <Components.Paragraph>
                  Ingrese sus datos personales y comience el viaje con nosotros
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Registrarse
                </Components.GhostButton>
              </Components.RightOverlayPanel>

            </Components.Overlay>
          </Components.OverlayContainer>

        </Components.Container>
      </div>
    </body>
  );
};

export default Formulario;