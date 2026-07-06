import "./TimeLine.scss";

const TimeLine = ({ data }) => {
  return (
    <div className="timeline">
      {data.map((item) => (
        <article className="timeline__item" key={`${item.date}-${item.title}`}>
          <time className="timeline__date">{item.date}</time>
          <div className="timeline__content">
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__text">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TimeLine;