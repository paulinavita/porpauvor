import Intro from "../components/photoblog/Intro";
import { CustomDock } from "@/components/CustomDock";
// import Link from "next/link";
import Photoblog from "../components/photoblog/Grid";
export default function Home() {
  return (
    <div className="relative w-8/12 sm:w-10/12 md:w-6/12 lg:w-6/10  mx-auto items-center justify-items-center min-h-screen lg:p-8 py-10 sm:p-20 pb-20 gap-16 sm:py-10 sm:px-1 md:px-1 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Intro />
        {/* <Link href="/"></Link> */}
        <Photoblog />
        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
