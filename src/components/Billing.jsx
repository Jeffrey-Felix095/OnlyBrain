import React from 'react';
import { useNavigate } from 'react-router-dom';
import { work } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';


const Billing = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Registrarse');
  };

  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={work} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      ¿Te gustaría formar  <br className="sm:block hidden" /> parte de nuestro equipo?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      ¡Únete a nuestro equipo de especialistas y hagamos realidad grandes proyectos! Si eres apasionado por la tecnología y de trabajar en equipo, este es tu lugar. Ofrecemos un ambiente de trabajo dinámico y creativo, donde podrás poner en práctica tus habilidades y seguir
      aprendiendo de la mano de profesionales en el área.

        
      </p>

      <Button
        mensaje="Trabaja Con Nosotros"
        marginTop={20}
        marginLeft={80}
        onClick={handleButtonClick}
      />
    </div>
  </section>
  );
};

export default Billing;
