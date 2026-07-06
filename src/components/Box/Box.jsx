import "./Box.scss";

const Box = ({ title, children }) => {
  return (
    <section className="box">
      <h2 className="box__title">{title}</h2>
      <div className="box__content">{children}</div>
    </section>
  );
};

export default Box;