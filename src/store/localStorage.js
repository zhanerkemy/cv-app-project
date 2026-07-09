const SKILLS_STORAGE_KEY = "skills";

export const loadSkillsFromLocalStorage = () => {
  try {
    const savedSkills = localStorage.getItem(SKILLS_STORAGE_KEY);
    return savedSkills ? JSON.parse(savedSkills) : [];
  } catch {
    return [];
  }
};

export const saveSkillsToLocalStorage = (skills) => {
  try {
    localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(skills));
  } catch {

  }
};