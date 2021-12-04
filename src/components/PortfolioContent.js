import React, { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { navHoverCheckState } from "../store/atoms";
import "../styles/Portfolio.scss";
import { PortfolioListItem } from "./PortfolioListItem";

export const PortfolioContent = () => {
  //declaring refs and recoil states
  const backToTopRef = useRef(null);
  const scrollDownRef = useRef(null);
  const setNavHoverCheck = useSetRecoilState(navHoverCheckState);

  //check if cursor is hovering over buttons to change cursor state
  useEffect(() => {
    const buttonList = [backToTopRef.current, scrollDownRef.current];
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

  const projects = [
    {
      title: "Headball",
      subtitle: "A Persuasive Game",
      link: "headball",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
    {
      title: "Snacc on PennMac",
      subtitle: "A Service Innovation",
      link: "snacc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam nulla facere ad earum laboriosam, cumque rerum vitae exercitationem unde architecto facilis repudiandae ullam quam enim vero, accusantium explicabo minima! Ex sequi quos praesentium maiores, quo suscipit sed harum mollitia.",
    },
    {
      title: "Placeholder",
      subtitle: "Probably a cool project",
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
          link={project.link}
        />
      );
    });
    return <div className="projects-list">{projectsToDisplay}</div>;
  };

  return (
    <>
      <div className="portfolio-content">{displayProjects()}</div>
      <div
        className="scroll-down"
        ref={scrollDownRef}
        onClick={() => {
          window.scrollTo(0, 600);
        }}
      >
        <h3 className="scroll-down-text">Scroll down to see more</h3>
        <svg className="down-arrow" viewBox="0 0 46.09 23.74">
          <g id="Layer_2" data-name="Layer 2">
            <path d="M1,0a1,1,0,0,1,.71.29L22.4,21a.91.91,0,0,0,1.29,0L44.38.29A1,1,0,1,1,45.8,1.71L24.28,23.23a1.74,1.74,0,0,1-2.46,0L.29,1.71A1,1,0,0,1,.29.29,1,1,0,0,1,1,0Z" />
          </g>
        </svg>
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
