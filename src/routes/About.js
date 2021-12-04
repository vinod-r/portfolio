import React, { useRef } from "react";
import "../styles/About.scss";
import Image from "../icons/me.png";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { buttonHoverCheckState } from "../store/atoms";
import Resume from "../images/Vinod Reddy - Resume 2021.pdf";

export const About = () => {
  //declaring recoil states and refs
  const setNavHoverCheck = useSetRecoilState(buttonHoverCheckState);

  const resumeRef = useRef(null);
  const linkedinRef = useRef(null);
  const behanceRef = useRef(null);

  //checking for cursor hover over links for contextual cursor effects
  useEffect(() => {
    const linkList = [
      resumeRef.current,
      linkedinRef.current,
      behanceRef.current,
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

    linkList.forEach((navItem) => {
      navItem.addEventListener("mouseenter", mouseEnterHandler);
      navItem.addEventListener("mouseleave", mouseLeaveHandler);
      navItem.addEventListener("click", mouseClickHandler);
    });

    return () => {
      linkList.forEach((navItem) => {
        navItem.removeEventListener("mouseenter", mouseEnterHandler);
        navItem.removeEventListener("mouseleave", mouseLeaveHandler);
        navItem.removeEventListener("click", mouseClickHandler);
      });
    };
  }, [setNavHoverCheck]);

  return (
    <div className="about-content">
      <h1 className="about-title" data-aos="fade-up" data-aos-delay="100">
        About
      </h1>
      <p className="paragraph-1" data-aos="fade-up" data-aos-delay="200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        obcaecati et temporibus mollitia repudiandae eveniet nihil libero
        impedit saepe sed explicabo atque corporis eaque, nemo, doloribus eius
        quasi ut sunt voluptatem quis quam? Doloremque eum id minus, ad vitae
        praesentium.
      </p>
      <p className="paragraph-2" data-aos="fade-up" data-aos-delay="300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        magnam sed quaerat architecto sequi aspernatur vitae expedita debitis
        soluta veniam?
      </p>
      <p className="paragraph-3" data-aos="fade-up" data-aos-delay="400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        magnam sed quaerat architecto sequi aspernatur vitae expedita debitis
        soluta veniam?
      </p>
      <a
        href={Resume}
        className="link resume"
        data-aos="fade-up"
        data-aos-delay="500"
        ref={resumeRef}
      >
        Resume
      </a>
      <a
        href="https://www.linkedin.com/in/vinod-reddy-7680a99b"
        className="link linkedin"
        data-aos="fade-up"
        data-aos-delay="600"
        ref={linkedinRef}
      >
        LinkedIn
      </a>
      <a
        href="https://www.behance.net/vinod_reddy"
        className="link behance"
        data-aos="fade-up"
        data-aos-delay="700"
        ref={behanceRef}
      >
        Behance
      </a>
      <img
        src={Image}
        alt="Portrait of me"
        className="photo"
        data-aos="fade-up"
        data-aos-delay="800"
      />
    </div>
  );
};
