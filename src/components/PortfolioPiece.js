import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import "../styles/PortfolioPiece.scss";
import Plc from "../icons/plcholder.jpg";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";

export const PortfolioPiece = () => {
  const projectName = useParams().name;
  const navigate = useNavigate();
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);

  const backToTopRef = useRef(null);
  const backButtonRef = useRef(null);
  const scrollDownRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const buttonList = [
      backToTopRef.current,
      backButtonRef.current,
      scrollDownRef.current,
    ];

    const mouseEnterHandler = () => {
      setNavHoverCheck(true);
    };
    const mouseLeaveHandler = () => {
      setNavHoverCheck(false);
    };

    const mouseClickHandler = () => {
      setNavHoverCheck(false);
    };

    buttonList.forEach((button) => {
      button.addEventListener("mouseenter", mouseEnterHandler);
      button.addEventListener("mouseleave", mouseLeaveHandler);
      button.addEventListener("click", mouseClickHandler);
    });

    return () => {
      buttonList.forEach((button) => {
        button.removeEventListener("mouseenter", mouseEnterHandler);
        button.removeEventListener("mouseleave", mouseLeaveHandler);
        button.removeEventListener("click", mouseClickHandler);
      });
    };
  }, [setNavHoverCheck]);

  const projectList = {
    headball: {
      title: "Headball",
      subtitle: "A Persuasive Game",
      keyImage: "",
      roleInfo: "Designer",
      timelineInfo: "2 Weeks",
      skillsInfo: "Design, Strategy, Research",
      brief:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti aliquid magni facilis quibusdam similique aspernatur. Tempore cum dignissimos earum.",
      insights:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti aliquid magni facilis quibusdam similique aspernatur. Tempore cum dignissimos earum.",
      insightsImage: "",
      problem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti aliquid magni facilis quibusdam similique aspernatur. Tempore cum dignissimos earum.",
      problemImage: "",
      solution:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti aliquid magni facilis quibusdam similique aspernatur. Tempore cum dignissimos earum.",
      solutionImage: "",
    },
    snacc: {
      title: "Snacc on PennMac",
      subtitle: "A Service Innovation",
      keyImage: "",
      roleInfo: "Designer",
      timelineInfo: "2 Weeks",
      skillsInfo: "Design, Strategy, Research",
      brief: "LoremIpsum",
      insights: "LoremIpsum",
      insightsImage: "",
      problem: "LoremIpsum",
      problemImage: "",
      solution: "LoremIpsum",
      solutionImage: "",
    },
    placeholder: {
      title: "Placeholder",
      subtitle: "Probably a cool project",
      keyImage: "",
      roleInfo: "Designer",
      timelineInfo: "2 Weeks",
      skillsInfo: "Design, Strategy, Research",
      brief: "LoremIpsum",
      insights: "LoremIpsum",
      insightsImage: "",
      problem: "LoremIpsum",
      problemImage: "",
      solution: "LoremIpsum",
      solutionImage: "",
    },
  };
  const project = projectList[projectName];

  return (
    <div className="project-content" ref={scrollDownRef}>
      <div
        className="scroll-down"
        onClick={() => {
          window.scrollTo(0, 800);
        }}
      >
        <h3 className="scroll-down-text">Scroll down to see more</h3>
        <svg className="down-arrow" viewBox="0 0 46.09 23.74">
          <g id="Layer_2" data-name="Layer 2">
            <path d="M1,0a1,1,0,0,1,.71.29L22.4,21a.91.91,0,0,0,1.29,0L44.38.29A1,1,0,1,1,45.8,1.71L24.28,23.23a1.74,1.74,0,0,1-2.46,0L.29,1.71A1,1,0,0,1,.29.29,1,1,0,0,1,1,0Z" />
          </g>
        </svg>
      </div>
      <button
        ref={backButtonRef}
        className="back-button"
        onClick={() => navigate("/portfolio")}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <svg
          className="back-button-icon"
          width="53"
          height="24"
          viewBox="0 0 53 24"
          fill="none"
        >
          <path d="M10.4853 22.6066L0.93934 13.0606C0.353555 12.4748 0.353555 11.5251 0.93934 10.9393L10.4853 1.39335C11.0711 0.807564 12.0208 0.807564 12.6066 1.39335C13.1924 1.97914 13.1924 2.92888 12.6066 3.51467L5.62132 10.5L53 10.5L53 13.5L5.62132 13.5L12.6066 20.4852C13.1924 21.071 13.1924 22.0208 12.6066 22.6066C12.0208 23.1923 11.0711 23.1923 10.4853 22.6066Z" />
        </svg>
      </button>

      <h1 className="project-title" data-aos="fade-up" data-aos-delay="100">
        {project.title}
      </h1>
      <h1 className="project-subtitle" data-aos="fade-up" data-aos-delay="150">
        {project.subtitle}
      </h1>
      <img
        src={Plc}
        alt="key"
        className="project-image"
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <div className="project-details" data-aos="fade-up">
        <div className="role">
          <h2 className="role-title">Role</h2>
          <p className="role-info">{project.roleInfo}</p>
        </div>
        <div className="timeline">
          <h2 className="timeline-title">Timeline</h2>
          <p className="timeline-info">{project.timelineInfo}</p>
        </div>
        <div className="skills">
          <h2 className="skills-title">Skills</h2>
          <p className="skills-info">{project.skillsInfo}</p>
        </div>
        <p className="project-brief">{project.brief}</p>
      </div>
      <div className="project-insights project-slab" data-aos="fade-up">
        <div className="project-slab-title">Insights</div>
        <p className="project-insights-text  project-slab-text">
          {project.insights}
        </p>
        <img
          src={Plc}
          alt=""
          className="project-insights-image project-slab-image"
        />
      </div>
      <div className="project-problem project-slab" data-aos="fade-up">
        <div className="project-slab-title">Problem</div>
        <p className="project-problem-text  project-slab-text">
          {project.problem}
        </p>
        <img
          src={Plc}
          alt=""
          className="project-problem-image project-slab-image"
        />
      </div>
      <div className="project-solution project-slab" data-aos="fade-up">
        <div className="project-slab-title">Solution</div>
        <p className="project-solution-text project-slab-text">
          {project.solution}
        </p>
        <img
          src={Plc}
          alt=""
          className="project-solution-image project-slab-image"
        />
      </div>
      <div
        className="back-to-top"
        ref={backToTopRef}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <svg className="up-arrow" viewBox="0 0 46.09 23.74">
          <g id="Layer_2" data-name="Layer 2">
            <path d="M45.09,23.74a1,1,0,0,1-.71-.29L23.69,2.76a.91.91,0,0,0-1.29,0L1.71,23.45A1,1,0,1,1,.29,22L21.82.51a1.74,1.74,0,0,1,2.46,0L45.8,22a1,1,0,0,1,0,1.42A1,1,0,0,1,45.09,23.74Z" />
          </g>
        </svg>
        <h3 className="back-to-top-text">Back to Top</h3>
      </div>
    </div>
  );
};
