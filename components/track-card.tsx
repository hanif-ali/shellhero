import { Track } from "@prisma/client"

import { db } from "@/lib/db"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface Props {
  track: Track
}

export function TrackCard(props: Props) {
  const { track } = props

  return (
    <Card>
      <CardHeader>
        <CardTitle>{track.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{track.description}</p>
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
        {track.disabled ? (
          <a className={cn(buttonVariants({ variant: "ghost" }))} href="#">
            Coming Soon
          </a>
        ) : (
          <a className={cn(buttonVariants())} href={`/tracks/${track.slug}/introduction`}>
            Get Started
          </a>
        )}
      </CardFooter>
    </Card>
  )
}
