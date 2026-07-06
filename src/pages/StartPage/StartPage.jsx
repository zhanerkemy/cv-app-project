import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import PhotoBox from "../../components/PhotoBox";
import avatar from "../../assets/images/avatar.jpg";

import "./StartPage.scss";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <main className="start-page">
      <div className="start-page__overlay">
        <PhotoBox
          name="Zhanerke Myrzabekova"
          title="Computer Science Student"
          description="Welcome to my personal CV portfolio."
          avatar={avatar}
        />

        <Button text="Know more" onClick={() => navigate("/resume")} />
      </div>
    </main>
  );
};

export default StartPage;