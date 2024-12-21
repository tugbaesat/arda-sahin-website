import React from "react";

const Contact = () => {
  return (
    <section className="flex justify-center items-center pt-10">
      <ul className="flex flex-col  gap-3 lg:w-3/5">
        <li>
          <h2 className="text-3xl underline">Contact Information</h2>
        </li>
        <li>
          <p>arda120222@ucla.edu</p>
        </li>
        <li>
          {" "}
          <p>3771 Boelter Hall</p>
        </li>
        <li>
          <p>University of California Los Angeles, CA 90095-1593</p>
        </li>
        <li>
          <p>Department of Civil and Environmental Engineering</p>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
