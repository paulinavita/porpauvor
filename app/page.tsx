import Intro from "@/components/Intro";
// import Edu from "@/components/Edu";
import { Meteors } from "@/components/ui/meteors";
import WorkExperience from "@/components/WorkExperience";
import SkillsList from "@/components/SkillsList";
import ProjectList from "@/components/ProjectList";
import { CustomDock } from "@/components/CustomDock";
import Research from "@/components/Research";
import Link from "next/link";
import Btn from "./components/photoblog/Btn";
export default function Home() {
  return (
    <div className="relative w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
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
        {/* <Edu /> */}
        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
