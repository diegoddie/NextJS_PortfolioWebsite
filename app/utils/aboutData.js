export const ABOUT_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="font-semibold rounded-full border-2 border-[#595d60] dark:border-white px-5 md:px-6 py-2 md:py-3 text-lg md:text-xl mx-auto">Backend</h1>
            <ul className="list-disc pl-4 pt-4 text-base md:text-lg">
              <li className="mb-1">Node.js</li>
              <li className="mb-1">Express.js</li>
              <li className="mb-1">MongoDB</li>
              <li className="mb-1">PostgreSQL</li>
              <li className="mb-1">Python</li>
              <li className="mb-1">Solidity</li>
              <li className="mb-1">Redis</li>
            </ul>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="font-semibold rounded-full border-2 border-[#595d60] dark:border-white px-5 md:px-6 py-2 md:py-3 text-lg md:text-xl mx-auto">Frontend</h1>
            <ul className="list-disc pl-4 pt-4 text-base md:text-lg">
              <li className="mb-1">HTML</li>
              <li className="mb-1">CSS</li>
              <li className="mb-1">TailwindCSS</li>
              <li className="mb-1">Javascript</li>
              <li className="mb-1">Typescript</li>
              <li className="mb-1">Bootstrap</li>
              <li className="mb-1">React</li>
              <li className="mb-1">Web3.js</li>
            </ul>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <h1 className="font-semibold rounded-full border-2 border-[#595d60] dark:border-white px-5 md:px-6 py-2 md:py-3 text-lg md:text-xl mx-auto">Frameworks</h1>
            <ul className="list-disc pl-4 pt-4 text-base md:text-lg">
              <li className="mb-1">NextJS</li>
              <li className="mb-1">Django</li>
              <li className="mb-1">Hardhat</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-4 text-lg">
          <li><div className="flex flex-col"><span className="text-lg md:text-xl font-semibold">2012-2017 - I.T.C. A. Lunardi, Brescia</span> H.S. Diploma in Business Administration, Finance, and Marketing</div></li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-4 text-lg">
          <li className="mb-5"><div className="flex flex-col"><span className="text-lg md:text-xl font-semibold">2024 - Start2Impact University</span> Master's in Full Stack Development</div></li>
          <li className="mb-5"><div className="flex flex-col"><span className="text-lg md:text-xl font-semibold">2023 - Start2Impact University</span> Master's in Blockchain Development</div></li>
          <li><div className="flex flex-col"><span className="text-lg md:text-xl font-semibold">2023 - Alchemy University</span> Ethereum Developer Certification</div></li>
        </ul>
      ),
    },
];
  