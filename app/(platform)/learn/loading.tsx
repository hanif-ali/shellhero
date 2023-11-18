import { CardSkeleton } from "@/components/card-skeleton"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export default function LearnLoading() {
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <DashboardShell>
        <DashboardHeader
          heading="Learning Tracks"
          text=""
        ></DashboardHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-wrap">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </DashboardShell>
    </main>
  )
}
