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
        return cvData.skills;
      });

      this.post("/skills", (schema, request) => {
        return JSON.parse(request.requestBody);
      });
    },
  });
}