import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navHoverCheckState, portfolioSelectionState } from "../store/atoms";
import "../styles/Portfolio.scss";
import { PortfolioListItem } from "./PortfolioListItem";

export const PortfolioContent = () => {
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);
  const upArrowRef = useRef(null);
  const downArrowRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const [portfolioSelection, setPortfolioSelection] = useRecoilState(
    portfolioSelectionState
  );
  useEffect(() => {
    setPortfolioSelection(1);
  }, [setPortfolioSelection]);

  const projects = [
    {
      title: "Headball",
      subtitle: "A Persuasive Game",
      reference: project1Ref,
      link: "headball",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
    {
      title: "Snacc on PennMac",
      subtitle: "A Service Innovation",
      reference: project2Ref,
      link: "snacc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
    {
      title: "Placeholder",
      subtitle: "Probably a cool project",
      reference: project3Ref,
      link: "placeholder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
  ];

  const displayProjects = () => {
    let projectsToDisplay = [];
    projects.forEach((project, i) => {
      projectsToDisplay.push(
        <PortfolioListItem
          key={i}
          number={i + 1}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          reference={project.reference}
          link={project.link}
        />
      );
    });
    return <div className="projects-list">{projectsToDisplay}</div>;
  };

  useEffect(() => {
    const upArrow = upArrowRef.current;
    const downArrow = downArrowRef.current;
    const arrowList = [upArrow, downArrow];

    const mouseEnterHandler = () => {
      setNavHoverCheck(true);
    };
    const mouseLeaveHandler = () => {
      setNavHoverCheck(false);
    };

    const mouseClickHandler = (direction) => {
      gsap.to([project1Ref.current, project2Ref.current, project3Ref.current], {
        duration: 0.5,
        y: `${direction}=100%`,
        ease: "back.out(1.2)",
      });
    };

    const moveUp = () => {
      if (portfolioSelection === 1) {
        return;
      }
      setPortfolioSelection((prevSelection) => prevSelection - 1);
      let moveDirection = "+";
      mouseClickHandler(moveDirection);
    };

    const moveDown = () => {
      if (portfolioSelection === 3) {
        return;
      }
      setPortfolioSelection((prevSelection) => prevSelection + 1);
      let moveDirection = "-";
      mouseClickHandler(moveDirection);
    };

    arrowList.forEach((arrow) => {
      arrow.addEventListener("mouseenter", mouseEnterHandler);
      arrow.addEventListener("mouseleave", mouseLeaveHandler);
      upArrow.addEventListener("click", moveUp);
      downArrow.addEventListener("click", moveDown);
    });

    return () => {
      arrowList.forEach((arrow) => {
        arrow.removeEventListener("mouseenter", mouseEnterHandler);
        arrow.removeEventListener("mouseleave", mouseLeaveHandler);
        upArrow.removeEventListener("click", moveUp);
        downArrow.removeEventListener("click", moveDown);
      });
    };
  }, [
    setNavHoverCheck,
    project1Ref,
    setPortfolioSelection,
    portfolioSelection,
  ]);

  // useEffect(() => {
  //   setPortfolioSelection(1);
  //   gsap.to(project1Ref.current, {
  //     duration: 0.4,
  //     opacity: 1,
  //     delay: 0.2,
  //   });

  //   gsap.from(project1Ref.current, {
  //     duration: 0.4,
  //     y: 200,
  //     delay: 0.2,
  //   });
  // }, [project1Ref, setPortfolioSelection]);

  return (
    <>
      <div className="portfolio-content">
        <div
          className={
            portfolioSelection === 1 ? "up-arrow inactive-arrow" : "up-arrow"
          }
          ref={upArrowRef}
        >
          <svg
            className="portfolio-navigation-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 46.09 23.74"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M45.09,23.74a1,1,0,0,1-.71-.29L23.69,2.76a.91.91,0,0,0-1.29,0L1.71,23.45A1,1,0,1,1,.29,22L21.82.51a1.74,1.74,0,0,1,2.46,0L45.8,22a1,1,0,0,1,0,1.42A1,1,0,0,1,45.09,23.74Z" />
            </g>
          </svg>
        </div>

        {displayProjects()}

        <div
          className={
            portfolioSelection === 3
              ? "down-arrow inactive-arrow"
              : "down-arrow"
          }
          ref={downArrowRef}
        >
          <svg
            className="portfolio-navigation-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 46.09 23.74"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M1,0a1,1,0,0,1,.71.29L22.4,21a.91.91,0,0,0,1.29,0L44.38.29A1,1,0,1,1,45.8,1.71L24.28,23.23a1.74,1.74,0,0,1-2.46,0L.29,1.71A1,1,0,0,1,.29.29,1,1,0,0,1,1,0Z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="portfolio-selection-pips">
        <div
          className="selection-pip"
          style={
            portfolioSelection === 1
              ? { backgroundColor: "#b2f1ec" }
              : { backgroundColor: "transparent" }
          }
        ></div>
        <div
          className="selection-pip"
          style={
            portfolioSelection === 2
              ? { backgroundColor: "#b2f1ec" }
              : { backgroundColor: "transparent" }
          }
        ></div>
        <div
          className="selection-pip"
          style={
            portfolioSelection === 3
              ? { backgroundColor: "#b2f1ec" }
              : { backgroundColor: "transparent" }
          }
        ></div>
      </div>
    </>
  );
};
