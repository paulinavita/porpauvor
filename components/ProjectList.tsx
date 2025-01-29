import ProjectCard from "./ProjectCard";

export interface IProjectCard {
  name: string;
  description: string;
  video: string;
  type: string;
  stacks: string[];
}

const ProjectList = () => {
  const projectsDesktop = [
    {
      name: "PaintPro",
      type: "desktop",
      link: "https://paintpro.vercel.app/",
      description:
        "E-commerce platform for buying and selling paint and count their material cost.",
      video: "/videos/paintpro.mp4",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Firebase",
        "GraphQL",
      ],
    },
    {
      name: "DANA Games and Vouchers",
      type: "desktop",
      link: "https://m.dana.id/i/biller-app/game/home",
      description: "E-commerce for buying game vouchers and in-game items.",
      video: "/videos/game.mp4",
      stacks: ["Nuxt.js", "React.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
      name: "Recurring Bills Payment and Reminder",
      type: "phone",
      description:
        "Feature inside DANA Wallet app to do recurring bills payment based on user's cycle preference.",
      link: "https://www.dana.id/personal/lifestyle",
      video: "/videos/recurringbill.mp4",
      stacks: ["Vue.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
      name: "Mobile Credit and Data Package",
      type: "phone",
      description:
        "Feature inside DANA Wallet app to do recurring bills payment based on user's cycle preference.",
      link: "https://www.dana.id/personal/lifestyle",
      video: "/videos/pulsa.mp4",
      stacks: ["Vue.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
  ];

  const projectsPhone = [
    {
      name: "BORA-BORA Social E-Commerce",
      type: "desktop",
      description:
        "A social e-Commerce service that encourages users to buy stuff collectively with another user for reduced price",
      link: "https://danaventures.id/works/BoraBora",
      video: "/img/bora.png",
      stacks: ["Flutter", "Firebase", "Bloc / Cubit", "CodeMagic", "REST API"],
    },
    {
      name: "Justip ",
      type: "desktop",
      description:
        "Commisioned hand carry service for people who want to buy stuff from overseas.",
      link: "https://www.openjustip.id/",
      video: "/img/jt.png",
      stacks: [
        "React Native",
        "TypeScript",
        "React Native Reanimated",
        "React Navigation",
        "REST API",
        "MMKV",
        "FCM",
        "CodeMagic",
      ],
    },
  ];
  return (
    // Desktop Section
    <>
      <div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Web</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projectsDesktop &&
              projectsDesktop.map((project: IProjectCard, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Mobile</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projectsPhone &&
              projectsPhone.map((project: IProjectCard, i) => (
                <ProjectCard key={i} project={project} />
              ))}
          </div>
        </div>
      </div>
    </>
    // Phone Section
  );
};

export default ProjectList;
