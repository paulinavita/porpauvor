const SkillsList = () => {
  const skillsData = [
    {
      name: "React.js",
      icon: "react",
      color: "bg-blue-500",
    },
    {
      name: "Node.js",
      icon: "nodejs",
      color: "bg-green-500",
    },
    {
      name: "React Native",
      icon: "nodejs",
      color: "bg-green-500",
    },
    {
      name: "Vue.js",
      icon: "nodejs",
      color: "bg-green-500",
    },
    {
      name: "Nuxt.js",
      icon: "nodejs",
      color: "bg-green-500",
    },
    {
      name: "Next.js",
      icon: "nextjs",
      color: "bg-black",
    },
    {
      name: "Tailwind CSS",
      icon: "tailwindcss",
      color: "bg-cyan-500",
    },
    {
      name: "Express",
      icon: "express",
      color: "bg-gray-500",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
      color: "bg-green-500",
    },
    {
      name: "PostgreSQL",
      icon: "mongodb",
      color: "bg-green-500",
    },
    {
      name: "GraphQL",
      icon: "graphql",
      color: "bg-pink-500",
    },
    {
      name: "Firebase",
      icon: "firebase",
      color: "bg-yellow-500",
    },
    {
      name: "Docker",
      icon: "docker",
      color: "bg-blue-500",
    },
    {
      name: "Solidity",
      icon: "github",
      color: "bg-black",
    },
    {
      name: "Web3",
      icon: "github",
      color: "bg-black",
    },

    {
      name: "AWS",
      icon: "aws",
      color: "bg-yellow-500",
    },
    {
      name: "Google Cloud",
      icon: "googlecloud",
      color: "bg-blue-500",
    },
    {
      name: "Web Performance",
      icon: "vercel",
      color: "bg-black",
    },
    {
      name: "LLM",
      icon: "heroku",
      color: "bg-purple-500",
    },
    {
      name: "Data Science",
      icon: "github",
      color: "bg-black",
    },
    {
      name: "Agile Project Management",
      icon: "github",
      color: "bg-black",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {skillsData.map((skill, index) => (
        <button
          key={index}
          className="relative inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
            {skill.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SkillsList;
