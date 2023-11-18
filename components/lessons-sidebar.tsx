"use client"

import Link from "next/link"
import { Lesson } from "@prisma/client"

import { cn } from "@/lib/utils"

type LessonWithTrackSlug = Lesson & { track: { slug: string } }

export function LessonsSidebar({
  lessons,
	trackSlug,
	activeLessonSlug
}: {
  lessons: Lesson[]
	trackSlug: string
	activeLessonSlug: string
}) {
  return (
    <nav className="grid items-start gap-2">
			<Link href={`/tracks/${trackSlug}/introduction/`}>
				<span
					className={cn(
						"group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
						activeLessonSlug === 'introduction' ? "bg-accent" : "transparent",
						false && "cursor-not-allowed opacity-80"
					)}
				>
					Introduction
				</span>
			</Link>
      {lessons.map((lesson) => (
        <Link href={`/tracks/${trackSlug}/${lesson.slug}/`}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              lesson.slug === activeLessonSlug ? "bg-accent" : "transparent",
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
