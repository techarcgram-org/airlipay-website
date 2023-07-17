import Image from 'next/image'
import {Introduction,Rules} from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='container' >
        <Introduction/>
        <Rules/>
      </div> 
    </main>
  )
}
