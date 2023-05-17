import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Contacto');
  };
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Enfócate en tu negocio, <br className="sm:block hidden" /> nosotros nos encargamos del marketing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nuestra compañia puede ayudarle a tu empresa a crear
          y administrar cuentas en redes sociales como Facebook, Instagram, Twitter,
          LinkedIn, y a crear contenido atractivo para llegar a su público objetivo.
        </p>

        <Button styles={`mt-10`} mensaje="Contáctenos" onClick={handleButtonClick} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
