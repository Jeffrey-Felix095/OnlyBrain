import React from 'react';
import * as Components from './FormularioS';
import './aditional.css';
import logo from '../assets/logo2.png';
import acompa from '../assets/background.png';
import { Link } from 'react-router-dom';

const Ingreso = () => {
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
                            <Components.Title>Inicia sesión</Components.Title>
                            <Components.Input type='email' placeholder='Correo Electrónico' />
                            <Components.Input type='password' placeholder='Contraseña' />
                            <Components.Anchor href='#'>Olvidaste tu contraseña?</Components.Anchor>
                            <Components.Button >Iniciar Sesión</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Inicia sesión</Components.Title>
                            <Components.Input type='email' placeholder='Correo Electrónico' />
                            <Components.Input type='password' placeholder='Contraseña' />
                            <Components.Anchor href='#'>Olvidaste tu contraseña?</Components.Anchor>
                            <Components.Button >Iniciar Sesión</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel2 signinIn={signIn}>
                                <img src={acompa} alt="Logo" className="logo" />
                            </Components.LeftOverlayPanel2>

                            <Components.RightOverlayPanel2 signinIn={signIn}>
                                <img src={acompa} alt="Logo" className="logo" />
                            </Components.RightOverlayPanel2>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
            </div>
        </div>
    );
};

export default Ingreso;