import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Address.scss";

const Address = ({ email, phone, location, linkedin, github }) => {
  return (
    <address className="address">
      <ul className="address__list">
        <li className="address__item">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${email}`}>{email}</a>
        </li>

        <li className="address__item">
          <FontAwesomeIcon icon={faPhone} />
          <a href={`tel:${phone}`}>{phone}</a>
        </li>

        <li className="address__item">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{location}</span>
        </li>

        <li className="address__item">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>

        <li className="address__item">
          <FontAwesomeIcon icon={faGithub} />
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;