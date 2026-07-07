import { createServer } from "miragejs";
import cvData from "../data/cvData";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";
      this.timing = 3000;

      this.get("/educations", () => {
        return cvData.education;
      });

      this.get("/skills", () => {
        const savedSkills = localStorage.getItem("skills");
        return savedSkills ? JSON.parse(savedSkills) : cvData.skills;
      });

      this.post("/skills", (schema, request) => {
        const newSkill = JSON.parse(request.requestBody);
        const savedSkills = localStorage.getItem("skills");
        const skills = savedSkills ? JSON.parse(savedSkills) : cvData.skills;

        const updatedSkills = [...skills, newSkill];
        localStorage.setItem("skills", JSON.stringify(updatedSkills));

        return newSkill;
      });
    },
  });
}