import React from "react";
import { Helmet } from "react-helmet";
import { Trans } from "react-i18next";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "JavaScript / TypeScript", level: 98 },
        { name: "HTML5 / CSS3 / Tailwind", level: 96 },
        { name: "Angular", level: 90 },
        { name: "Performance Optimization", level: 92 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 94 },
        { name: "Java / Spring Boot", level: 93 },
        { name: ".NET / C#", level: 88 },
        { name: "GraphQL / REST APIs", level: 95 },
        { name: "Microservices Architecture", level: 91 }
      ]
    },
    {
      category: "Databases & DevOps",
      skills: [
        { name: "PostgreSQL / MongoDB", level: 94 },
        { name: "Docker / Kubernetes", level: 87 },
        { name: "Git / CI-CD Pipelines", level: 96 },
        { name: "AWS / Cloud Services", level: 89 },
        { name: "System Design & Architecture", level: 93 }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technical Skills | Full Stack Developer</title>
        <meta
          name="description"
          content="Expert full-stack developer with 8+ years of experience in JavaScript, Java, React, Node.js, and cloud architecture."
        />
        <meta
          name="keywords"
          content="full-stack developer, React, Next.js, Java, Node.js, TypeScript, AWS, microservices"
        />
      </Helmet>

      <div
        name="skills"
        className="w-full min-h-screen text-black bg-gradient-to-b from-gray-50 to-white py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
              Technical Skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-6 text-blue-600">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, sidx) => (
                    <div key={sidx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">8+</p>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">50+</p>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">15+</p>
              <p className="text-gray-600 mt-2">Companies Worked With</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <p className="text-3xl font-bold text-orange-600">25+</p>
              <p className="text-gray-600 mt-2">Open Source Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
