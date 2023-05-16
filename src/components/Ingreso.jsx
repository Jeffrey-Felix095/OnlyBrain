import React from 'react';
import axios from "axios";
import * as Components from './FormularioS';
import './aditional.css';
import logo from '../assets/logo2.png';
import acompa from '../assets/background.png';
import { Link } from 'react-router-dom';

const Ingreso = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [register, setRegister] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const [signIn, toggle] = React.useState(true);

    const handleLogin = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();

      // set configurations
      const configuration = {
        method: "post",
        url: "https://nodejs-mongodb-app.herokuapp.com/login",
        data: {
          email,
          password,
        },
      };

      // make the API call
      axios(configuration)
        .then((result) => {
          // redirect user to the auth page
          window.location.href = "http://localhost:3000/";
          setLogin(true);
        })
        .catch((error) => {
          error = new Error();
        });
    }

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
                            <Components.Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Correo Electrónico' />
                            <Components.Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña' />
                            <Components.Anchor href='#'>Olvidaste tu contraseña?</Components.Anchor>
                            <Components.Button onClick={(e) => handleLogin(e)} >Iniciar Sesión</Components.Button>
 			    
                                          {/* display success message */}
              {login ? (
                <p className="text-success">Has Iniciado Sesion</p>
              ) : (
                <p className="text-danger"> </p>
              )}
                            
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