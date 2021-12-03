import React from "react";
// import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export const LandingContent = () => {
  const landingTitleRef1 = useRef(null);
  const landingTitleRef2 = useRef(null);
  const landingTitleRef3 = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  // useEffect(() => {
  //   gsap.from(
  //     [
  //       landingTitleRef1.current,
  //       landingTitleRef2.current,
  //       landingTitleRef3.current,
  //       paragraph1Ref.current,
  //       paragraph2Ref.current,
  //     ],

  //     {
  //       duration: 0.8,
  //       delay: 0.4,
  //       stagger: {
  //         amount: 0.4,
  //       },
  //       ease: "power3.out",
  //       y: 64,
  //       // opacity: 0,
  //     }
  //   );
  //   gsap.to(
  //     [
  //       landingTitleRef1.current,
  //       landingTitleRef2.current,
  //       landingTitleRef3.current,
  //       paragraph1Ref.current,
  //       paragraph2Ref.current,
  //     ],

  //     {
  //       duration: 0.8,
  //       delay: 0.4,
  //       stagger: {
  //         amount: 0.4,
  //       },
  //       ease: "power3.out",
  //       opacity: 1,
  //     }
  //   );
  // }, [
  //   landingTitleRef1,
  //   landingTitleRef2,
  //   landingTitleRef3,
  //   paragraph1Ref,
  //   paragraph2Ref,
  // ]);

  return (
    <div className="landing-content">
      <h1 className="landing-title">
        <span ref={landingTitleRef1} data-aos="fade-up">
          Hello!
        </span>
        <span ref={landingTitleRef2} data-aos="fade-up" data-aos-delay="50">
          I'm
        </span>
        <span
          ref={landingTitleRef3}
          className="name"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Vinod.
        </span>
      </h1>
      <p
        className="paragraph-1"
        ref={paragraph1Ref}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias
        quisquam culpa reprehenderit atque corrupti qui! Blanditiis laboriosam
        dolores animi eos, architecto quibusdam deserunt placeat quod a tempore
        quas ut cumque voluptas ex vel. Expedita totam veniam magni labore
        commodi?
      </p>
      <p
        className="paragraph-2"
        ref={paragraph2Ref}
        data-aos="fade-up"
        data-aos-delay="250"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        recusandae nam nostrum commodi eveniet necessitatibus illum. Itaque sunt
        praesentium optio.
      </p>
    </div>
  );
};
