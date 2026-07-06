import "./Feedback.scss";

const Feedback = ({ data }) => {
  return (
    <div className="feedback">
      {data.map((item) => (
        <blockquote className="feedback__item" key={item.reporter.name}>
          <p className="feedback__text">“{item.feedback}”</p>

          <footer className="feedback__reporter">
            <img
              className="feedback__photo"
              src={item.reporter.photoUrl}
              alt={item.reporter.name}
            />

            <a
              className="feedback__name"
              href={item.reporter.citeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {item.reporter.name}
            </a>
          </footer>
        </blockquote>
      ))}
    </div>
  );
};

export default Feedback;