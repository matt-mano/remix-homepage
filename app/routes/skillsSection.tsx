export const skillsSection = (skills: any) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="content-container">
        <div className="flex-4">
          <h2 className="darker-text">
            I have full-stack skills!
          </h2>
        </div>
        <div className="flex-8 text-right">
          {skills.map((skill: any) => skillsSubsection(skill))}
        </div>
      </div>
    </div>
  )
}

const skillsSubsection = (skill: any) => {
  return (
    <div key={skill._id}>
      <h2>{skill.categoryName}</h2>
      <ul style={{"listStyleType": "none"}}>
      {skill.skills.map((skill: any) => <li  key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}