import { db } from "@/lib/db"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { TrackCard } from "@/components/track-card"

export const metadata = {
  title: "Learn",
}

export default async function LearnPage() {
  const tracks = await db.track.findMany({
    where: { visible: true },
  })

  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <DashboardShell>
        <DashboardHeader heading="Learning Tracks" text=""></DashboardHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-wrap">
          {tracks.map((track) => (
            <TrackCard track={track} />
          ))}
        </div>
      </DashboardShell>
    </main>
  )
}
