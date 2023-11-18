import { Icons } from '@/components/icons'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center space-y-3">
			<Icons.warning  className="mx-auto w-10 h-10 text-yellow-400" />
      <h2>Not Found</h2>
      <p>Could not find the track you requested.</p>
			<p className="underline">
				<Link href="/learn">Go back to Learn page</Link>
			</p>
    </div>
  )
}