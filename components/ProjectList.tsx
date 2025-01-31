import ProjectCard from "./ProjectCard";

export interface IProjectCard {
  name: string;
  description: string;
  asset: string;
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
        "An e-commerce platform specializing in the procurement and sale of paint and related building materials, designed to streamline construction operations for our clients",
      asset: "/videos/paintpro.gif",
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
      description:
        "A digital marketplace facilitating  secure and convenient purchase point of game vouchers and in-game items. The platform provides promotions, blogs, and game reviews.",
      asset: "/videos/game.gif",
      stacks: ["Nuxt.js", "React.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
      name: "Recurring Bills Payment and Reminder",
      type: "phone",
      description:
        "An integrated feature within the DANA Wallet application that enables users to automate bill payments according to their preferred cyclical schedule",
      link: "https://www.dana.id/personal/lifestyle",
      asset: "/videos/recurringbill.gif",
      stacks: ["Vue.js", "TypeScript", "Tailwind CSS", "REST API"],
    },
    {
      name: "Mobile Credit and Data Package",
      type: "phone",
      description:
        "Compare mobile credit and data packages for all major Indonesian telcos directly within the app and make instant payments",
      link: "https://www.dana.id/personal/lifestyle",
      asset: "/videos/pulsa.gif",
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
      asset: "/img/bora.png",
      stacks: ["Flutter", "Firebase", "Bloc / Cubit", "CodeMagic", "REST API"],
    },
    {
      name: "Justip ",
      type: "desktop",
      description:
        "A specialized marketplace and service offering commissioned hand-carry items acquired from overseas or certain areas.",
      link: "https://www.openjustip.id/",
      asset: "/img/jt.png",
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
          <h1 className="text-2xl font-bold">Web | Webview Projects</h1>
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
