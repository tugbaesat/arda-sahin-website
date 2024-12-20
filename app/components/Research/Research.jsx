import React from "react";

const Research = () => {
  return (
    <section className="flex justify-center items-center py-20 bg-white">
      <ul className="flex flex-col  gap-4 lg:w-3/5">
        <li>
          <h2 className="text-5xl">Research</h2>
        </li>
        <li>
          <p>
            I am currently working on the liquefaction susceptibility and cyclic
            strength of fine-grained soils as part of my PhD studies, advised by
            Prof. Jonathan P. Stewart and Prof. Scott J. Brandenberg at the
            University of California, Los Angeles (UCLA). Moreover, as a
            graduate student researcher on the NGL Liquefaction Susceptibility
            team, we are trying to quantify and assess the cyclic tests
            conducted on fine-grained soils. This study focuses especially on
            the translational soils that have the potential to exhibit
            “clay-like” and “sand-like” behavior. This phenomenon is significant
            because the cyclic strength of these two different behaviors is
            crucial, and engineers in practice may under- or over-design
            structures under seismic loading conditions as a result.
          </p>
        </li>
        <li>
          <p>
            As part of my M.Sc. studies, I investigated the probability of
            liquefaction of gravelly soils under the advisement of Prof. Kemal
            Onder Cetin at Middle East Technical University (METU). The research
            focused on developing a database containing case histories from
            prior earthquakes that exhibited gravelly soil surface
            manifestations. As the final product of the research, a
            probabilistic triggering model was developed based on the gathered
            case history data.
          </p>
        </li>
        <li>
          <p>
            On February 6, 2023, two earthquakes with magnitudes of 7.8 and 7.6
            struck the southeastern region of Turkey. Many researchers visited
            the site to investigate and gather crucial data after the earthquake
            sequence. As part of both the METU and GEER teams, I visited the
            site multiple times for reconnaissance studies, gathering samples,
            observing surface manifestations, and taking settlement and lateral
            spreading measurements.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Research;
