import Ourblogs from "./components/Ourblogs";
import Chair from "./components/Chair";
import Hero from "./components/Hero";
import Sofa from "./components/Sofa";
// import Sidetable from "./components/Sidetable";
import Twopic from "./components/Twopic";
import Insta from "./components/Insta";
import Navbar from "./components/Navbar";
// import Sam from "./components/Sam";


export default function Home() {
 return (
  <div>
{/* <Ourblogs /> */}
<Navbar />
<Hero/> 
<Twopic />
{/* <Sidetable/> */}
<Chair />
<Sofa/>
 <Ourblogs /> 
<Insta/>
{/* <Sam/> */}
  </div>
 );
}