import Satisfecho from '../assets/Satisfecho.png';
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';  

const CardDeal = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Contacto');
  };
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          ¡Garantía de satisfacción  <br className="sm:block hidden" /> 100%!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Si no está completamente satisfecho con nuestro servicio, ¡háganoslo saber! Nos aseguraremos de que se sienta feliz y seguro con su inversión.
        </p>

        <Button styles={`mt-10`} mensaje="Contáctenos" onClick={handleButtonClick} />
      </div>

      <div className={layout.sectionImg}>
        <img src={Satisfecho} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};
export default CardDeal;
