import React from "react";

const Education = () => {
  return (
    <section className="flex justify-center items-center pt-10">
      <ul className="flex flex-col  gap-3 lg:w-3/5">
        <li>
          <h2 className="text-3xl underline">Education</h2>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">
            Ph.D. Candidate in Geotechnical Earthquake Engineering (2024 -
            Present)
          </p>
          <p><b>Advisors:</b> Prof. Jonathan P. Stewart, Prof. Scott J. Brandenberg</p>
          <p><b>Prospectus Topic:</b> Next Generation Liquefaction Database and Probabilistic Liquefaction Susceptibility Assessment</p>
          <p>University of California, Los Angeles</p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">
            Ph.D. Student in Geotechnical Earthquake Engineering (2023 - 2024)
          </p>
          <p><b>Advisors:</b> Prof. Jonathan P. Stewart, Prof. Scott J. Brandenberg</p>
          <p>University of California, Los Angeles</p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">
            M.Sc. Geotechnical Earthquake Engineering (2021 - 2023)
          </p>
          <p><b>Advisor:</b> Prof. Dr. Kemal Önder Çetin</p>
          <p><b>Thesis Topic:</b> The Assessment of Seismic Liquefaction Triggering of Gravelly Soils</p>
          <p>Middle East Technical University</p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">B.Sc. Civil Engineering (2016 - 2021)</p>
          <p>Middle East Technical University</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
