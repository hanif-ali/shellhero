"use client"

import Link from "next/link"
import { Lesson } from "@prisma/client"

import { cn } from "@/lib/utils"

type LessonWithTrackSlug = Lesson & { track: { slug: string } }

export function LessonsSidebar({
  lessons,
}: {
  lessons: LessonWithTrackSlug[]
}) {
  return (
    <nav className="grid items-start gap-2">
      {lessons.map((lesson) => (
        <Link href={`/tracks/${lesson.track.slug}/${lesson.slug}/`}>
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
      ))}
    </nav>
  )
}
