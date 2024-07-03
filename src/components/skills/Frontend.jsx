import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">vue.js</h3>
              <span className="skills__level">Bacis</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Taiwind.css</h3>
              <span className="skills__level">intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
