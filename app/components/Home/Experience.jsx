import React from "react";

const Experience = () => {
  return (
    <section className="flex justify-center items-center pt-10">
      <ul className="flex flex-col  gap-3 lg:w-3/5">
        <li>
          <h2 className="text-3xl underline">Experience</h2>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">Teaching Assistant (2024 - Present)</p>
          <p>UCLA Samueli Civil and Environmental Engineering Department</p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">
            Graduate Student Researcher (2023 - Present)
          </p>
          <p>UCLA Samueli Civil and Environmental Engineering Department</p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">Research/Teaching Assistant (2022 - 2023)</p>
          <p>
            METU Civil Engineering Department Geotechnical Engineering Division
          </p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="font-bold">
            Geotechnical Design Engineer (2021 - 2022)
          </p>
          <p>GeoDestek</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
