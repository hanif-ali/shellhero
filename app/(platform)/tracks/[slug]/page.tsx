import { allLessonFiles } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"
import { notFound } from "next/navigation"

export default function TrackPage({
  params,
}: {
  params: { slug: string }
}) {
  const page = allLessonFiles.find(
    (page) => page.slugAsParams === `${params.slug}/introduction`
  )
  if (!page) {
    return notFound()
  }
  console.log(page.body.code)

  return <Mdx code={page.body.code} />
}
