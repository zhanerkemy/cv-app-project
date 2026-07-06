import "./Button.scss";

const Button = ({ icon, text, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;