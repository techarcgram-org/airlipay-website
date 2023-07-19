import Image from 'next/image'
import {Benefits, Contact, Dedication, FAQ, Footer, Introduction,Rules,Statistics} from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='container' >
        <Introduction/>
        <Rules/>
        <Statistics/>
        <FAQ/>
        <Dedication/>
        <Benefits/>
        <Contact/>
        <Footer/>
      </div> 
    </main>
  )
}
