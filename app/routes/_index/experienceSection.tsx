export const experienceSection = (experiences: any[]) => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="content-container reversed">
        <div className="flex-7">
            <h2 className="darker-text text-right">
              I've worked in software for 7 years!
            </h2>
          </div>
          <div className="flex-5">
            {experiences.map((experience) => experienceSubsection(experience))}
          </div>
        </div>
      </div>
    )
  }

  const experienceSubsection = (experience: any) => {
    const startDate = experience.roles[experience.roles.length - 1].dates.split(" - ")[0].trim();
    const endDate = experience.roles[0].dates.split(" - ")[1].trim();

    return (
        <div key={experience._id}>
          <h2>{experience.company}</h2>
          <p>{startDate} to {endDate}</p>
        </div>
      )
  }