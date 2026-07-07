import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Skills from "../Skills";
import { fetchSkills } from "../../store/skillsSlice";

const SkillsSection = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  if (loading) {
    return <p>Loading skills...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <Skills skills={items} />;
};

export default SkillsSection;