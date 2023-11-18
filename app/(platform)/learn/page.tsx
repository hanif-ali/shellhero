import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DashboardHeader } from "@/components/header"
import { Icons } from "@/components/icons"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Learn",
}

export default async function LearnPage() {
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
            <CardContent>
              <p>Get familiar with navigation, file system and permissions</p>
              <ul className="text-sm text-muted-foreground mt-4">
                <li className="flex items-center">
                  <Icons.laptop className="mr-2 h-4 w-4" /> 15 Lessons
                </li>
                <li className="flex items-center">
                  <Icons.chevronRight className="mr-2 h-4 w-4" /> 12 exercises
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
              <a className={cn(buttonVariants())} href='/tracks/123'>
                Get Started
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Basics</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get familiar with navigation, file system and permissions</p>
              <ul className="text-sm text-muted-foreground mt-4">
                <li className="flex items-center">
                  <Icons.laptop className="mr-2 h-4 w-4" /> 15 Lessons
                </li>
                <li className="flex items-center">
                  <Icons.chevronRight className="mr-2 h-4 w-4" /> 12 exercises
                </li>
              </ul>
            </CardContent>
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
            <CardContent>
              <p>Get familiar with navigation, file system and permissions</p>
              <ul className="text-sm text-muted-foreground mt-4">
                <li className="flex items-center">
                  <Icons.laptop className="mr-2 h-4 w-4" /> 15 Lessons
                </li>
                <li className="flex items-center">
                  <Icons.chevronRight className="mr-2 h-4 w-4" /> 12 exercises
                </li>
              </ul>
            </CardContent>
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
            <CardContent>
              <p>Get familiar with navigation, file system and permissions</p>
              <ul className="text-sm text-muted-foreground mt-4">
                <li className="flex items-center">
                  <Icons.laptop className="mr-2 h-4 w-4" /> 15 Lessons
                </li>
                <li className="flex items-center">
                  <Icons.chevronRight className="mr-2 h-4 w-4" /> 12 exercises
                </li>
              </ul>
            </CardContent>
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
            <CardContent>
              <p>Get familiar with navigation, file system and permissions</p>
              <ul className="text-sm text-muted-foreground mt-4">
                <li className="flex items-center">
                  <Icons.laptop className="mr-2 h-4 w-4" /> 15 Lessons
                </li>
                <li className="flex items-center">
                  <Icons.chevronRight className="mr-2 h-4 w-4" /> 12 exercises
                </li>
              </ul>
            </CardContent>
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
            <CardContent>
              <p>Get familiar with navigation, file system and permissions</p>
              <ul className="text-sm text-muted-foreground mt-4">
                <li className="flex items-center">
                  <Icons.laptop className="mr-2 h-4 w-4" /> 15 Lessons
                </li>
                <li className="flex items-center">
                  <Icons.chevronRight className="mr-2 h-4 w-4" /> 12 exercises
                </li>
              </ul>
            </CardContent>
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
