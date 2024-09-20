import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="wrapper">
        <h2>Skills</h2>
        <div className="row-content">
          <div className="col1">
            <div className="image-container">
              <img src="/images/people.webp" alt="" />
            </div>
          </div>
          <div className="col2">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              consequatur iste laborum accusamus. Earum ipsum ipsa illum"
            </p>
            <p>Select a button to see what skills I have</p>
            <div className="iconContainer">
              <div className="image-container">
                <img src="/images/instagram.png" alt="" />
              </div>
              <div className="image-container">
                <img src="/images/instagram.png" alt="" />
              </div>
              <div className="image-container">
                <img src="/images/instagram.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
