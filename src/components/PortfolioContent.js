import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";
import "../styles/Portfolio.scss";
import { PortfolioListItem } from "./PortfolioListItem";

export const PortfolioContent = () => {
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);
  const upArrowRef = useRef(null);
  const downArrowRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const projects = [
    {
      title: "Headball",
      subtitle: "A Persuasive Game",
      reference: project1Ref,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
    {
      title: "Snacc on PennMac",
      subtitle: "A Service Innovation",
      reference: project2Ref,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
    {
      title: "Placeholder",
      subtitle: "Probably a cool project",
      reference: project3Ref,
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
      let moveDirection = "+";
      mouseClickHandler(moveDirection);
    };

    const moveDown = () => {
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
  }, [setNavHoverCheck, project1Ref]);

  useEffect(() => {
    gsap.from(project1Ref.current, {
      duration: 0.4,
      opacity: 0,
      delay: 0.2,
    });
  }, [project1Ref]);

  return (
    <div className="portfolio-content">
      <div className="up-arrow" ref={upArrowRef}>
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

      <div className="down-arrow" ref={downArrowRef}>
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
  );
};
