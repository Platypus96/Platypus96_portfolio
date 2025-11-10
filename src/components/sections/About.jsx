import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "MongoDB", "Hardhat", "Ethers.js"];

  const blockchainSkills = ["Solidity", "IPFS", "Remix IDE"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer specializing in secure, scalable, and efficient Web3 applications, particularly in DeFi and smart contract development. Proficient in full-stack development with modern frameworks like React and Next.js.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blockchain Skills Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Blockchain</h3>
                <div className="flex flex-wrap gap-2">
                  {blockchainSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Electronics and Communication Engineering </strong> - IIIT Allahabad (CGPA: 8.5/10)
                </li>
                <li>
                  <strong> Minor in Economics and Finance </strong> - IIIT Allahabad (CGPA: 8.5/10)
                </li>
                <li>
                  <strong> Senior Secondary (PCM) </strong> - National Public School, Gaya (Percentage: 94%)
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adarsh-kumar-6a403a297/details/certifications/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">View Certifications</a>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Research Intern at Network Security & Cryptography Lab, IIIT Allahabad (Sept 2023 - Present){" "}
                  </h4>
                  <p>
                    Engineered firmware analysis tool using binary reverse engineering, reducing vulnerability detection time by 40%.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Open Source Maintainer at Opencode’24 (May 2024 - Jul 2024){" "}
                  </h4>
                  <p>
                    Led development team of 30+ contributors for CryptoWallet project, accelerating release timeline by 3 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
