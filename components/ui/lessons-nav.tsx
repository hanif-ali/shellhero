"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function LessonsNav() {
  return (
    <nav className="grid items-start gap-2">
      <Link href="#">
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            false ? "bg-accent" : "transparent",
            false && "cursor-not-allowed opacity-80"
          )}
        >
          What is the Shell?
        </span>
      </Link>
      <Link href="#">
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            false ? "bg-accent" : "transparent",
            false && "cursor-not-allowed opacity-80"
          )}
        >
          Navigations
        </span>
      </Link>
    </nav>
  )
}
