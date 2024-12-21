import Link from "next/link";
import React from "react";
import { articles } from "./Articles";
import { conferences } from "./Conferences";
import { reports } from "./Reports";
import { datasets } from "./Datasets";


const Publications = () => {
  return (
    <section className="flex justify-center items-center py-20 bg-white">
      <ul className="flex flex-col gap-4 lg:w-3/5">
        <li>
          <h2 className="text-3xl underline">Publications</h2>
        </li>
        <li>
          <h3 className="text-xl underline font-bold">
            Archival Journal Articles
          </h3>
        </li>
        {articles
          .slice()
          .reverse()
          .map((paper) => (
            <li key={paper.id}>
              <ul className="flex flex-col gap-2 px-0">
                <li>
                  <h4 className="font-bold">{paper.title}</h4>
                </li>
                <li>
                  <p className="italic">{paper.type}</p>
                </li>
                <li>
                  <p>{paper.authors}</p>
                </li>
                <li className="text-ucla-blue underline">
                  <Link href={paper.link}>{paper.link}</Link>
                </li>
              </ul>
            </li>
          ))}
        <li>
          <h3 className="text-xl underline font-bold">
            Conference Proceedings
          </h3>
        </li>
        {conferences
          .slice()
          .reverse()
          .map((paper) => (
            <li key={paper.id}>
              <ul className="flex flex-col gap-2 px-0">
                <li>
                  <h4 className="font-bold">{paper.title}</h4>
                </li>
                <li>
                  <p className="italic">{paper.type}</p>
                </li>
                <li>
                  <p>{paper.authors}</p>
                </li>
                <li className="text-ucla-blue underline">
                  <Link href={paper.link}>{paper.link}</Link>
                </li>
              </ul>
            </li>
          ))}
        <li>
          <h3 className="text-xl underline font-bold">Reports and Theses</h3>
        </li>
        {reports
          .slice()
          .reverse()
          .map((paper) => (
            <li key={paper.id}>
              <ul className="flex flex-col gap-2 px-0">
                <li>
                  <h4 className="font-bold">{paper.title}</h4>
                </li>
                <li>
                  <p className="italic">{paper.type}</p>
                </li>
                <li>
                  <p>{paper.authors}</p>
                </li>
                <li className="text-ucla-blue underline">
                  <Link href={paper.link}>{paper.link}</Link>
                </li>
              </ul>
            </li>
          ))}
                  <li>
          <h3 className="text-xl underline font-bold">Datasets</h3>
        </li>
        {datasets
          .slice()
          .reverse()
          .map((paper) => (
            <li key={paper.id}>
              <ul className="flex flex-col gap-2 px-0">
                <li>
                  <h4 className="font-bold">{paper.title}</h4>
                </li>
                <li>
                  <p className="italic">{paper.type}</p>
                </li>
                <li>
                  <p>{paper.authors}</p>
                </li>
                <li className="text-ucla-blue underline">
                  <Link href={paper.link}>{paper.link}</Link>
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Publications;
