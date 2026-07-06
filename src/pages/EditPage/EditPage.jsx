import { useState } from "react";
import { Link } from "react-router-dom";

import { useCvData } from "../../hooks/useCvData";
import Skills from "../../components/Skills";

import "./EditPage.scss";

const EditPage = () => {
  const { data, setData } = useCvData();
  const [skillName, setSkillName] = useState("");
  const [skillRange, setSkillRange] = useState("");

  const addSkill = (event) => {
    event.preventDefault();

    if (!skillName.trim() || !skillRange) return;

    const newSkill = {
      name: skillName,
      range: Number(skillRange),
    };

    setData({
      ...data,
      skills: [...data.skills, newSkill],
    });

    setSkillName("");
    setSkillRange("");
  };

  return (
    <main className="edit-page">
      <div className="edit-page__header">
        <h1>Skills</h1>

        <Link className="edit-page__button" to="/resume">
          Back to CV
        </Link>
      </div>

      <form className="edit-page__form" onSubmit={addSkill}>
        <label>
          Skill name:
          <input
            type="text"
            placeholder="Enter skill name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </label>

        <label>
          Skill range:
          <input
            type="number"
            min="1"
            max="100"
            placeholder="Enter skill range"
            value={skillRange}
            onChange={(e) => setSkillRange(e.target.value)}
          />
        </label>

        <button type="submit">Add skill</button>
      </form>

      <Skills skills={data.skills} />
    </main>
  );
};

export default EditPage;