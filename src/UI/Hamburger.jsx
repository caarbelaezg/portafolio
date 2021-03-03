import React from 'react';

const Hamburger = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="" className="navigation__link">
              About me
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              My hobbies
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Experience
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Education
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
