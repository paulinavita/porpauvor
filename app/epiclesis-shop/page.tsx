import React from "react";
import { TypingAnimation } from "../../components/ui/typing-animation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center space-y-4">
        <TypingAnimation>magic&apos;s working on it..</TypingAnimation>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
          in the meantime you can book my tarot reading (personal & events)
          directly by dm-ing me
          <Link href={"https://instagram.com/paulydvne"} className="bold">
            {" "}
            @paulydvne
          </Link>
        </p>
        <Link
          href={"/"}
          className="text-sm text-black-800 dark:text-gray-400 mt-6 text-underline"
        >
          back to home
        </Link>
      </div>
    </div>
  );
}
