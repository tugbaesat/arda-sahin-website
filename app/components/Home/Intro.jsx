import React from "react";

const Intro = () => {
  return (
    <section className="flex justify-center items-center pt-20">
      <ul className="flex flex-col  gap-4 lg:w-3/5">
        <li>
          <p>
            <span className="font-bold">Advisors:</span> Prof. Jonathan P.
            Stewart and Prof. Scott J. Brandenberg
          </p>
        </li>
        <li>
          <p>
            I am currently a Ph.D. candidate specializing in Geotechnical
            Earthquake Engineering at UCLA, where I am deeply engaged in
            research focused on liquefaction susceptibility and cyclic strength
            of fine-grained soils. During my Master’s studies, I have focused on
            liquefaction triggering of gravelly soils. Prior to my academic
            studies, I gained professional experience as a Geotechnical Design
            Engineer.
          </p>
        </li>
        <li>
          <p>
            Beyond my research and professional endeavors, I am passionate about
            teaching and mentoring the next generation of engineers. I have
            served as a teaching assistant for several courses, providing
            guidance and support to students. I actively participate in industry
            conferences and workshops to stay updated with the latest
            advancements in geotechnical engineering and to network with fellow
            professionals and researchers.
          </p>
        </li>
        <li>
          <p>
            <span className="font-bold"> Skills:</span> Liquefaction
            assessments, deep foundation systems, slope stability, deep
            excavation, foundation system assessment, ground improvement design,
            retaining wall design
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
