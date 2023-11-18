import { allLessonFiles } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"
import { notFound } from "next/navigation"

export default async function LessonPage({
  params,
}: {
  params: { slug: string, lessonSlug: string }
}) {
  const page = allLessonFiles.find(
    (page) => page.slugAsParams === `${params.slug}/${params.lessonSlug}`
  )
  if (!page) {
    return notFound()
  }

  return <Mdx code={page.body.code} />
}
