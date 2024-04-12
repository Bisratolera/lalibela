import { useState, useEffect } from "react"
import mountain from "../assets/mountain.png"
import mountain2 from "../assets/mountain2.png"
import birds1 from "../assets/bitds1.png"
import birds2 from "../assets/bitds2.png"
import dronemaxi from "../assets/dronemaxi.png"
import dronemini from "../assets/dronemini.png"
import lalibela from "../assets/lalibela.png"
import cloud from "../assets/cloud.png"
import cloud2 from "../assets/cloud2.png"
// import slice from "../assets/slice1.png"

const Landing = () => {
  const [topVal, setTopVal] = useState(0);
  useEffect(() => {
    function scroll(e) {

    }
  }, [])
  return (
  <>
    <div className={`wrapper w-full h-screen bg-sky-300 bg-opacity-60 overflow-hidden relative`}>
      <img className={` w-[100%] top-[20rem] `} src={cloud2} alt="" />
      <img className={`w-full -bottom-28 left-[40%] translate-x-[-50%] z-10`} src={mountain} alt="" />
      <img className={`w-full -bottom-28 left-[50%] translate-x-[-50%]`} src={mountain2} alt="" />
      <img className={`w-[10rem]`} src={birds1} alt="" />
      <img className={`w-[10rem] right-[20rem]`} src={birds2} alt="" />
      <img className={`w-[23rem] left-[55rem] translate-x-[-50%]`} src={dronemaxi} alt="" />
      <img className={`w-[10rem] rotate-[5deg] right-[4rem]`} src={dronemini} alt="" />
      <img className={` w-[80%] -top-[5rem] -left-16`} src={cloud} alt="" />
      <img className="-bottom-4 left-1/2 translate-x-[-50%] w-[31rem] " src={lalibela} alt="" />
      {/* <span className="w-full h-full bg-sky-500 mix-blend-overlay opacity-20"></span> */}
    </div>

  </>
  )
}

export default Landing