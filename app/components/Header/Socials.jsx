import React from "react";
import Image from "next/image";
import Link from "next/link";
import linkedin from "@/public/icons/linkedin.svg";
import scholar from "@/public/icons/scholar.svg";
import orcid from "@/public/icons/orcid.svg";
import research from "@/public/icons/research.svg";

const Socials = () => {
  return (
    <ul className="flex gap-6 justify-center items-center mt-4">
      <li>
        <Link href={"https://www.linkedin.com/in/arda-sahin98/"}>
          <Image
            src={linkedin}
            width={32}
            height={32}
            alt="LinkedIn"
            className=""
          />
        </Link>
      </li>
      <li>
        <Link
          href={"https://scholar.google.com/citations?user=MdPhpaMAAAAJ&hl=en"}
        >
          <Image
            src={scholar}
            width={32}
            height={32}
            alt="Google Scholar"
            className=""
          />
        </Link>
      </li>
      <li>
        <Link href={"https://orcid.org/my-orcid?orcid=0009-0009-7676-6567/"}>
          <Image src={orcid} width={32} height={32} alt="ORCID" className="" />
        </Link>
      </li>
      <li>
        <Link href={"https://www.researchgate.net/profile/Arda-Sahin-7"}>
          <Image
            src={research}
            width={32}
            height={32}
            alt="ResearchGate"
            className=""
          />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
