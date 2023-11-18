import { notFound } from "next/navigation"
import { allLessons } from "contentlayer/generated"

import { LessonsNav } from "@/components/ui/lessons-nav"
import { Mdx } from "@/components/mdx-components"

async function getPageContent(params) {
  const id = params.id
  const page = allLessons.find((page) => page.slugAsParams === `${id}/content`)
  if (!page) {
    null
  }
  return page
}

export default async function TrackPage({
  params,
}: {
  params: { id: string }
}) {
  const page = await getPageContent(params)
  if (!page) {
    return notFound()
  }

  return (
    <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex border-r px-4">
        <LessonsNav />
      </aside>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
				<Mdx code={page.body.code} />
			</main>
    </div>
  )
}
