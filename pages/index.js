import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Services from '../Components/Services'
import Bio from '../Components/Bio'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'



export default function Home() {
  return (
 <div>
   <Head>
     <title>AJWRITER-Digital Marketer and Content Creator</title>
     <meta name="keywords" content="digital marketing content writing blog"/>
   </Head>
  <Header />
<Services />
<Bio />
<Blog />
<Contact/>
 </div>
  )
}
