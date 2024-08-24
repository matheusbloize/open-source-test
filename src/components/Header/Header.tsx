import car from "/car.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={car} alt="Carro." width={32} height={32} />
      <h1>Fiscalização de Placas do Brasil</h1>
      <img src={car} alt="Carro." width={32} height={32} />
    </header>
  );
};

export default Header;
