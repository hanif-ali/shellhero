import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text=""></DashboardHeader>
        <div>
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title></EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description></EmptyPlaceholder.Description>
          </EmptyPlaceholder>
        </div>
      </DashboardShell>
    </main>
  )
}
