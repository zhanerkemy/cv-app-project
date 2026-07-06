import { Link } from "react-router-dom";
import "./StartPage.scss";

const StartPage = () => {
  return (
    <main className="start-page">
      <section className="start-page__content">
        <h1>John Doe</h1>
        <p>Programmer. Creative. Innovator</p>
        <Link className="start-page__button" to="/resume">
          Know more
        </Link>
      </section>
    </main>
  );
};

export default StartPage;