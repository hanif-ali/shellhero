import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { Icons } from "@/components/icons"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Learn",
}

export default async function LearnPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <DashboardShell>
        <DashboardHeader heading="Learning Tracks" text=""></DashboardHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-wrap">
          <Card>
            <CardHeader>
              <CardTitle>Basics</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>Get familiar with navigation, file system and permissions</CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
              <button type="submit" className={cn(buttonVariants())}>
                Get Started
              </button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>Get familiar with navigation, file system and permissions</CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
              <button type="submit" className={cn(buttonVariants())}>
                Get Started
              </button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>Get familiar with navigation, file system and permissions</CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
              <button type="submit" className={cn(buttonVariants())}>
                Get Started
              </button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>Get familiar with navigation, file system and permissions</CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
              <button type="submit" className={cn(buttonVariants())}>
                Get Started
              </button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>Get familiar with navigation, file system and permissions</CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
              <button type="submit" className={cn(buttonVariants())}>
                Get Started
              </button>
            </CardFooter>
          </Card>
        </div>
      </DashboardShell>
    </main>
  )
}
