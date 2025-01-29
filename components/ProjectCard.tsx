import { IProjectCard } from "./ProjectList";
import Iphone15Pro from "./ui/iphone-15-pro";
import Safari from "./ui/safari";

const ProjectCard = ({ project }: { project: IProjectCard }) => {
  const phone = ({ v }: { v: string }) => {
    return <Iphone15Pro scale={0.44} videoSrc={v} />;
  };
  const desktop = ({ v }: { v: string }) => {
    return (
      <Safari
        url="magicui.design"
        className="size-full"
        videoSrc={v}
        imageSrc={v}
      />
    );
  };
  return (
    <div className="flex flex-col border border-gray-100 rounded-lg  justify-between">
      <div className="flex justify-center py-2">
        {project.type === "phone"
          ? phone({ v: project.video })
          : desktop({ v: project.video })}
      </div>
      <div className="flex flex-col gap-2 p-4 justify-between h-full">
        <h2 className="fond-bold">{project.name}</h2>
        <p className="text-sm text-gray-500">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.stacks.map((stack, i) => {
            return (
              <div
                key={i}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-2 py-0.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {stack}
              </div>
            );
          })}
        </div>
        <div className=" align-end justify-end">
          <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
