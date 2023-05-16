import styles from "../style";
import { logo2 } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo2}
          alt="brainspark"
          className="w-[250px] h-[80px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Una nueva manera de administrar y expandir tu negocio.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] mx-4`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 BrainSpark. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
            <img
              src={social.icon}
              alt={social.id}
              width="21"
              height="21"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
