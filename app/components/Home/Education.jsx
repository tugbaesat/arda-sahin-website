import React from "react";

const Education = () => {
  return (
    <section className="flex justify-center items-center pt-20">
      <ul className="flex flex-col  gap-4 lg:w-3/5">
        <li>
          <h2 className="text-5xl">Education</h2>
        </li>
        <li>
          <p className="font-bold">
            Ph.D. Candidate in Geotechnical Earthquake Engineering (2024 -
            Present)
          </p>
          <p>University of California, Los Angeles</p>
        </li>
        <li>
          <p className="font-bold">
            Ph.D. Student in Geotechnical Earthquake Engineering (2023 - 2024)
          </p>
          <p>University of California, Los Angeles</p>
        </li>
        <li>
          <p className="font-bold">
            M.Sc. Geotechnical Earthquake Engineering (2021 - 2023)
          </p>
          <p>Middle East Technical University</p>
        </li>
        <li>
          <p className="font-bold">B.Sc. Civil Engineering (2016 - 2021)</p>
          <p>Middle East Technical University</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
