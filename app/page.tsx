import Intro from "@/components/Intro";
// import Edu from "@/components/Edu";
import { Meteors } from "@/components/ui/meteors";
import WorkExperience from "@/components/WorkExperience";
import SkillsList from "@/components/SkillsList";
import ProjectList from "@/components/ProjectList";
import { CustomDock } from "@/components/CustomDock";
import Research from "@/components/Research";
import Btn from "./components/photoblog/Btn";
import OtherExperience from "@/components/Others";
export default function Home() {
  return (
    <div className="relative w-8/12 sm:w-10/12 md:w-6/12 lg:w-6/10  mx-auto items-center justify-items-center min-h-screen lg:p-8 py-10 sm:p-20 pb-20 gap-16 sm:py-10 sm:px-1 md:px-1 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Meteors />
        <Intro />
        <section className="flex gap-1">
          <Btn path="/photoblog" label="/photowalk" />
          <Btn path="/epiclesis-shop" label="/tarot booking" />
        </section>
        <SkillsList />
        <ProjectList />
        <Research />
        <WorkExperience />
        <OtherExperience />
        {/* <Edu /> */}
        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
