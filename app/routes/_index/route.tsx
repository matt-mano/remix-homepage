import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { dashboardData } from "~/data/DashboardQuery";

import styles from "~/styles/application.css";
import { experienceSection } from "./experienceSection";
import { aboutMeSection } from "../aboutMeSection";
import { skillsSection } from "../skillsSection";
import { projectsSection } from "../projectsSection";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export const meta: MetaFunction = () => {
  return [
    { title: "Matt Manoleras" },
    { name: "description", content: "MattManoleras.com" },
  ];
};

export async function loader() {
  return await dashboardData();
};


export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (

    <div>
      <header>
        Header here
      </header>


      {aboutMeSection()}
      <hr />
      {experienceSection(data.experiences)}
      <hr />

      {skillsSection(data.skills)}
      <hr />
      {projectsSection(data.projects)}
      <hr />
      <p>Socials here</p>
    </div>
  );
}