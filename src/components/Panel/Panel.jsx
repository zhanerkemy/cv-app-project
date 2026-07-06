import { useState } from "react";

import Navigation from "../Navigation";
import PhotoBox from "../PhotoBox";

import avatar from "../../assets/images/avatar.jpg";

import "./Panel.scss";

const Panel = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`panel ${isOpen ? "panel--open" : "panel--closed"}`}>
      <button
        className="panel__hamburger"
        type="button"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className="panel__content">
          <PhotoBox
            name="Zhanerke Myrzabekova"
            title="Computer Science Student"
            avatar={avatar}
          />

          <Navigation activeSection={activeSection} onNavigate={onNavigate} />
        </div>
      )}
    </aside>
  );
};

export default Panel;