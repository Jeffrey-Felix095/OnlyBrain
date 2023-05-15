import styled from 'styled-components';

export const Container = styled.div`
 background-color: #c2c2c2;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 1080px;
 max-width: 100%;
 min-height: 600px;
 `;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  font-size: 26px;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
    : null}
 `;


export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 font-size: 26px;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;

export const Form = styled.form`
 background-color: #c2c2c2;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 font-size: 26px;
 `;

export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 font-size: 36px;
 `;

export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 font-size: 20px;
 `;


export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #ccf9ff;
    background-color: #0080bf;
    border-radius: 10px;

    font-size: 18px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
        color: #000000;
    }
    &:focus {
        outline: none;
        color: #ffffff;
    }
 `;
export const ButtonBrain = styled.button`
 display: flex;
 align-items: center;
 position: absolute;
 top: 10px;
 left: 10px;
 background: linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%);
 padding: 5px;
 border-radius: 25px;
 width: 300px;
 margin-top: 15px;
 height: 85px;
 }

 .logo {
   display: inline-block;
   vertical-align: middle;
   width: 75px;
 }

 .text {
   font-size: 28px;
   font-weight: bold;
   background: linear-gradient(to right, yellow, white);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   margin-left: 5px;
`;

export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;

export const Anchor = styled.a`
 color: #333;
 font-size: 18px;
 text-decoration: none;
 margin: 15px 0;
 `;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
font-size: 18px;
backgroundImage: "url('../assets/robot.png')",
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center center',
${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
font-size: 18px;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
     font-size: 18px;
 `;

export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   font-size: 20px;
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     font-size: 20px;
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

export const LeftOverlayPanel2 = styled(OverlayPanel)`
 transform: translateX(-20%);
 font-size: 20px;
 backgroundImage: "url('../assets/robot.png')",
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat',
 backgroundPosition: 'center center',
 ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel2 = styled(OverlayPanel)`
   right: 0;
   transform: translateX(0);
   font-size: 20px;
   backgroundImage: "url('../assets/robot.png')",
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center center',
   ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
 font-size: 18px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px;
   margin-right: 5px
 `;