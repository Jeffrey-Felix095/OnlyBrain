import React from "react";

const Button = ({ styles, mensaje, marginTop, marginLeft, onClick }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    style={{ marginTop: `${marginTop}px`, marginLeft: `${marginLeft}px` }}
    onClick={onClick}
  >
    {mensaje}
  </button>
);

export default Button;
