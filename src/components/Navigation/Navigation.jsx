import "./Navigation.scss";

const navItems = [
  { label: "About me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacts", href: "#contacts" },
  { label: "Feedback", href: "#feedback" },
];

const Navigation = ({ activeSection, onNavigate }) => {
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
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;