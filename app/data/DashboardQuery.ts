import { db } from "./DbClient";

export async function dashboardData() {
  const experiences = db.collection("Experiences").find().toArray();
  const projects = db.collection("Projects").find().toArray();
  const skills = db.collection("Skills").find().toArray();

  return {
    experiences: await experiences,
    projects: await projects,
    skills: await skills,
  }
}