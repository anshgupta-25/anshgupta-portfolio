import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Zent Corporation</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on the Engineering / Product team on CodersZ LMS—building
              and maintaining frontend &amp; backend features, integrating APIs,
              working with databases and cloud services, and writing clean,
              production-ready code in a real product environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>E-Cell IIT Roorkee · E-Summit'26</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Represented E-Summit'26, IIT Roorkee by driving awareness,
              engagement, and student participation for one of India's most
              impactful entrepreneurship and innovation platforms. Secured 2nd
              position in DataForge'26 at E-Summit IIT Roorkee.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (Gen AI)</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science with
              specialization in Generative AI. Maintaining a CGPA of 8.20.
              HackXlerate 2025 Top 7 Finalist. Solved 500+ DSA problems on ByteXL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Cloud Arcade</h4>
                <h5>Legend Tier</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed 400+ hands-on labs and earned 50+ verified skill badges
              for AI, Cloud, and DevOps projects. Achieved the Legend Tier
              distinction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
