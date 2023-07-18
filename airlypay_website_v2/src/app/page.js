import Image from 'next/image'
import {FAQ, Introduction,Rules,Statistics} from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='container' >
        <Introduction/>
        <Rules/>
        <Statistics/>
        <FAQ/>
      </div> 
    </main>
  )
}
