import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPen,
  faCode,
  faBriefcase,
  faPaperPlane,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./Navigation.scss";

const navItems = [
  { label: "About me", href: "#about", icon: faUser },
  { label: "Education", href: "#education", icon: faGraduationCap },
  { label: "Experience", href: "#experience", icon: faPen },
  { label: "Skills", href: "#skills", icon: faCode },
  { label: "Portfolio", href: "#portfolio", icon: faBriefcase },
  { label: "Contacts", href: "#contacts", icon: faPaperPlane },
  { label: "Feedback", href: "#feedback", icon: faComment },
];

const Navigation = ({ activeSection, onNavigate, isExpanded }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item) => (
          <li className="navigation__item" key={item.href}>
            <a
              className={`navigation__link ${
                activeSection === item.href ? "navigation__link--active" : ""
              }`}
              href={item.href}
              onClick={() => onNavigate(item.href)}
              title={item.label}
            >
              <FontAwesomeIcon className="navigation__icon" icon={item.icon} />

              {isExpanded && (
                <span className="navigation__label">{item.label}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;