import "./PhotoBox.scss";

const PhotoBox = ({ name, title, description, avatar }) => {
  return (
    <section className="photo-box">
      <img className="photo-box__avatar" src={avatar} alt={`${name} avatar`} />

      <div className="photo-box__content">
        <h1 className="photo-box__name">{name}</h1>
        <p className="photo-box__title">{title}</p>
        {description && <p className="photo-box__description">{description}</p>}
      </div>
    </section>
  );
};

export default PhotoBox;