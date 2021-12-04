import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import "../styles/PortfolioPiece.scss";
import Plc from "../icons/plcholder.jpg";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";
import headballKey from "../images/headball.png";
import headball1 from "../images/headball_1.png";
import headball3 from "../images/headball_3.png";
import snaccKey from "../images/snacc.png";
import snacc1 from "../images/snacc_1.png";
import snacc2 from "../images/snacc_2.png";

export const PortfolioPiece = () => {
  //declaring refs, recoil states and parameters of page (to identify which project to display)
  const projectName = useParams().name;
  const navigate = useNavigate();
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);

  const backToTopRef = useRef(null);
  const backButtonRef = useRef(null);
  const scrollDownRef = useRef(null);

  //setting page scroll value
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  //checking cursor hover over buttons to change cursor state
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

  //json object with al content for all projects to load into the JSX
  const projectList = {
    headball: {
      title: "Headball",
      subtitle: "A Persuasive Game",
      keyImage: headballKey,
      roleInfo: "Researcher Designer",
      timelineInfo: "3.5 Months",
      skillsInfo: "Game Design Visual Design Interviewing Motion Design",
      brief:
        "Despite the growing attention and major names like Michael Phelps and Simon Biles speaking about their mental health issues, many student-athletes still struggle with finding the right resources to cope with the stressors in their day to day life.",
      insights:
        "Our research revealed that having a strong relationship with their team and being comfortable enough to share their problems and struggles, especially about mental health, played a critical role in helping college athletes cope with anxiety, stress, and fear while recovering from injuries.",
      insightsImage: headball1,
      problem:
        "The problem to be tackled was the stigma around mental health issues in sports, and unjustified expectations that athletes need to have a ‘strong mentality’ and can’t be ‘weak.’ A statistic to address and affect was that only 10% of college athletes with mental health issues sought help.",
      solution:
        "Headball is a game that aims to help student athletes foster relationships with their teammates and engender an environment where they can confidently seek support. Played in teams, it uses a randomly generated game board that provides players the option to choose paths that involve one of three minigames. These paths can either be high-risk high-reward or safe routes to create an element of strategy and teamwork.",
      solutionImage: headball3,
    },
    snacc: {
      title: "Snacc on PennMac",
      subtitle: "A Service Innovation",
      keyImage: snaccKey,
      roleInfo: "Designer Researcher",
      timelineInfo: "2 Months",
      skillsInfo: "Service Design Business Strategy Research",
      brief:
        "Pittsburgh's population is on the decline, and the Pennsylvania Macaroni Company, a 120 year old institution in the heart of Pittsburgh, needs new blood to keep it's business running. How can we bring new and young families to PennMac and forge new traditions?",
      insights:
        "Since the end of the steel era in the late 60s, Pittsburgh's population has declined from a high of near 700,000 to just under 300,000 in 2021. This matches up to the population of the city in 1902 when PennMac was founded. Most of the customers we interviewed said that they visit PennMac since that was what they did as a child or they married into a family that had that tradition. New Millennial Tech Workers moving into Pittsburgh do not have this tradition.",
      insightsImage: snacc1,
      problem:
        "PennMac faces the threat of commercial decline if they do not tap into a new population demographic. Previous attempts at expanded business operations (wholesaling, delivery, etc.) were not successful. But without an injection of new ideas, the business model faces the risk of growing stale and falling behind.",
      solution:
        "Our solution was a cooking demonstration with a partner catering company at the campus of a tech company to bring young millennial techies into the PennMac fold. Receiving quality ingredients and recipies from PennMac via an easy QR code, young families can experience the culture and tradition of Pittsburgh's oldest families in their homes.",
      solutionImage: snacc2,
    },
    placeholder: {
      title: "Placeholder",
      subtitle: "Probably a cool project",
      keyImage: Plc,
      roleInfo: "Designer",
      timelineInfo: "To be decided",
      skillsInfo: "Design, Strategy, Research",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium et alias aspernatur! Dolore similique modi itaque quod vero porro alias.",
      insights:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in temporibus. Ea magni porro esse magnam doloremque ratione incidunt aliquid.",
      insightsImage: Plc,
      problem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minus, quo quia delectus id rem est nemo expedita ratione odio.",
      solution:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus eius repellat ipsa recusandae reprehenderit culpa nam eaque assumenda cumque.",
      solutionImage: Plc,
    },
  };
  const project = projectList[projectName];

  return (
    <>
      <div
        ref={scrollDownRef}
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
      <div className="project-content">
        <button
          ref={backButtonRef}
          className="back-button"
          onClick={() => navigate("/portfolio")}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <p style={{ display: "none" }}>Text to fix WAVE empty button error</p>
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
        <h1
          className="project-subtitle"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {project.subtitle}
        </h1>
        <img
          src={project.keyImage}
          alt="key graphic"
          className="project-image"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <div className="project-details" data-aos="fade-up">
          <div className="role">
            <h2 className="role-title">Role</h2>
            <h3 className="role-info">{project.roleInfo}</h3>
          </div>
          <div className="timeline">
            <h2 className="timeline-title">Timeline</h2>
            <h3 className="timeline-info">{project.timelineInfo}</h3>
          </div>
          <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <h3 className="skills-info">{project.skillsInfo}</h3>
          </div>
          <p className="project-brief">{project.brief}</p>
        </div>
        <div className="project-insights project-slab" data-aos="fade-up">
          <div className="project-slab-title">Insights</div>
          <p className="project-insights-text  project-slab-text">
            {project.insights}
          </p>
          <img
            src={project.insightsImage}
            alt="insights graphic"
            className="project-insights-image project-slab-image"
          />
        </div>
        <div className="project-problem project-slab" data-aos="fade-up">
          <div className="project-slab-title">Problem</div>
          <p className="project-problem-text  project-slab-text">
            {project.problem}
          </p>
        </div>
        <div className="project-solution project-slab" data-aos="fade-up">
          <div className="project-slab-title">Solution</div>
          <p className="project-solution-text project-slab-text">
            {project.solution}
          </p>
          <img
            src={project.solutionImage}
            alt="solution graphic"
            className="project-solution-image project-slab-image"
          />
        </div>
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
    </>
  );
};
