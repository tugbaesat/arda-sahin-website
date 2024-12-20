import React from "react";

const Awards = () => {
  return (
    <section className="flex justify-center items-center py-20">
      <ul className="flex flex-col  gap-4 lg:w-3/5">
        <li>
          <h2 className="text-5xl">Awards and Honors</h2>
        </li>
        <li>
          <p>2023 High Honor Graduate, Middle East Technical University</p>
        </li>
        <li>
          <p>
            2021 High Honor Graduate, Middle East Technical University (Ranked
            2nd out of 337 students)
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Awards;