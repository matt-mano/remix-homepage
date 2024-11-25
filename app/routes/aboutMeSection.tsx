export const aboutMeSection = () => {
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