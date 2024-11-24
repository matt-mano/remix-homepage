import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "~/styles/application.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export const meta: MetaFunction = () => {
  return [
    { title: "Matt Manoleras" },
    { name: "description", content: "MattManoleras.com" },
  ];
};

export const hiImMatt = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="content-container">
        <div className="flex-3">
          <h1 className="right-text">
            Hi! I'm Matt
          </h1>
          <h2>
            I'm a software engineer from Charlotte, NC!
          </h2>
        </div>
        <div className="flex-7 text-right">
          <img src="me.jpeg" alt="Matt Manoleras" width={500} />
        </div>
      </div>
    </div>
  )
};

export const iHaveWorkedAt = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="content-container reversed">
      <div className="flex-7">
          <h2 className="darker-text text-right">
            I've worked in software for 7 years!
          </h2>
        </div>
        <div className="flex-5">
          <h2> Shopify </h2>
          <p>April 2024 to present</p>
          <br />
          <h2> Cardinal Health </h2>
          <p>March 2020 to April 2024</p>
        </div>
        
      </div>
    </div>
  )
}

export const iKnowStuff = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="content-container">
        <div className="flex-4">
          <h2 className="darker-text">
            I've have full-stack skills!
          </h2>
        </div>
        <div className="flex-3 text-right">
          <h2> Frontend </h2>
          <p>React, Redux, TailwindCSS</p>
          <br />
          <h2>Backend</h2>
          <p>Node, Express, Postgres</p>
        </div>
        <div className="flex-3 text-right">
          <h2> Frontend </h2>
          <p>React, Redux, TailwindCSS</p>
          <br />
          <h2>Backend</h2>
          <p>Node, Express, Postgres</p>
        </div>
        <div className="flex-3 text-right">
          <h2> Frontend </h2>
          <p>React, Redux, TailwindCSS</p>
          <br />
          <h2>Backend</h2>
          <p>Node, Express, Postgres</p>
        </div>
      </div>
    </div>
  )
}

export const iBuildStuff = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="content-container reversed">
      <div className="flex-6">
          <h2 className="darker-text text-right">
            And I've built stuff!
          </h2>
        </div>
        <div className="flex-6">
          <h2> Project with a name </h2>
          <p>Homina homina homina</p>
          <p>Yadda yadda yadda</p>
          <p>Homina homina homina</p>
          <br />
          <h2>Project with a rad different name</h2>
          <p>Homina homina homina</p>
          <p>Homina homina homina</p>
          <p>Yadda yadda yadda</p>
        </div>
      </div>
    </div>
  )
}

export default function Index() {
  return (

    <div>
      <header>
        Header here
      </header>


      {hiImMatt()}
      <hr />
      {iHaveWorkedAt()}
      <hr />

      {iKnowStuff()}
      <hr />
      {iBuildStuff()}
      <hr />
      <p>Socials here</p>
    </div>
  );
}