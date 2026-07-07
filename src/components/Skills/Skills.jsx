import "./Skills.scss";

const Skills = ({ skills }) => {
  if (!skills.length) {
    return <p>No skills added yet.</p>;
  }

  return (
    <div className="skills">
      {skills.map((skill) => (
        <div className="skills__item" key={skill.name}>
          <div className="skills__bar" style={{ width: `${skill.range}%` }}>
            {skill.name}
          </div>
        </div>
      ))}

      <div className="skills__scale">
        <span>Beginner</span>
        <span>Proficient</span>
        <span>Expert</span>
        <span>Master</span>
      </div>
    </div>
  );
};

export default Skills;