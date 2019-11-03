import React, {useState} from 'react';
import "./Header.scss";
import logo from '../../assets/logo@1x.svg'

const Header = props => {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="Header">
      <div className="Header__logo">
        <div className="Header__logo__img"><img src={logo} alt="AUDI Racing Team" /></div>
        <div className="Header__logo__text">AUDI Racing Team</div>
      </div>
      <div className="Header__menu">
        <div className="Header__menu__hamburguer" onClick={() => setIsOpen(true)}>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <nav className={`Header__menu__list ${isOpen ? 'open' : ''}`}  onClick={() => setIsOpen(false)}>
          <div className="close" onClick={() => setIsOpen(false)}>x</div>
          <div className="item" onClick={e => e.stopPropagation()}>Teams</div>
          <div className="item" onClick={e => e.stopPropagation()}>Drivers</div>
          <div className="item" onClick={e => e.stopPropagation()}>Calendar</div>
        </nav>
      </div>
    </div>
  );
}

export default Header;