import React from "react";

export const LandingContent = () => {
  //html content of the landing page
  return (
    <div className="landing-content">
      <h1 className="landing-title">
        <span data-aos="fade-up">Hello!</span>
        <span data-aos="fade-up" data-aos-delay="50">
          I'm
        </span>
        <span className="name" data-aos="fade-up" data-aos-delay="100">
          Vinod.
        </span>
      </h1>
      <p className="paragraph-1" data-aos="fade-up" data-aos-delay="200">
        At heart I'm a generalist, with a special love for Visual Design and
        Illustration and more recently, UX Design. With experience in varied
        fields like Motion Design and traditional Animation, 3D Sculpting and
        Modelling to Logo Design and Branding, I bring strong design principles
        gained from all of these experiences to the table.
      </p>
      <p className="paragraph-2" data-aos="fade-up" data-aos-delay="250">
        Any project where I can tap into several of my passions is a dream
        project.
      </p>
    </div>
  );
};
