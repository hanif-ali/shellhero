import { Suspense } from "react"

import { db } from "@/lib/db"
import { LessonsSidebar } from "@/components/lessons-sidebar"

import { LessonsNavLoading } from './loading'

interface Props {
  children?: React.ReactNode
  params: { slug: string; lessonSlug: string }
}

export default function TracksLayout({ children, params }: Props) {
  return (
    <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr] min-h-screen">
      <aside className="hidden w-[200px] flex-col md:flex border-r px-4">
        <Suspense fallback={<LessonsNavLoading />}>
          {/* @ts-expect-error Server Component */}
          <LessonsNav slug={params.slug} lessonSlug={params.lessonSlug} />
        </Suspense>
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
    </div>
  )
}

async function LessonsNav({
  slug,
  lessonSlug,
}: {
  slug: string
  lessonSlug: string
}) {
  const lessons = await db.lesson.findMany({
    where: { track: { slug: slug } },
  })
  return (
    <LessonsSidebar
      trackSlug={slug}
      lessons={lessons}
      activeLessonSlug={lessonSlug}
    />
  )
}
