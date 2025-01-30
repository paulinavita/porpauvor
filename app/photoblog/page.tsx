import Intro from "../components/photoblog/Intro";
import { CustomDock } from "@/components/CustomDock";
// import Link from "next/link";
import Photoblog from "../components/photoblog/Grid";
export default function Home() {
  return (
    <div className="relative w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Intro />
        {/* <Link href="/"></Link> */}
        <Photoblog />
        <CustomDock orientation="vertical" />
      </main>
    </div>
  );
}
