import "./Expertise.scss";

const Expertise = ({ data }) => {
  return (
    <div className="expertise">
      {data.map((item) => (
        <article className="expertise__item" key={`${item.date}-${item.info.company}`}>
          <span className="expertise__date">{item.date}</span>

          <div className="expertise__content">
            <h3 className="expertise__company">{item.info.company}</h3>
            <p className="expertise__job">{item.info.job}</p>
            <p className="expertise__description">{item.info.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Expertise;