import React, { useRef } from "react";
import './Hero.css'
import me from "../../Assets/Images/ME.png"
import Lottie from "lottie-react";
import heroAnimation from '../../../src/animation/dev.json'
import { motion } from "framer-motion";


export default function Hero() {
  const lottieRef = useRef();

  return <>

    <section id="hero" className="hero mt-5 ">
      <div className="heroMainContent">

        <div className="row">


          <div className="col-lg-7  ">

            <div className="avatar position-relative">
              <motion.img initial={{transform:"scale(0)"}} animate={{transform:"scale(.9)"}} transition={{damping:6,type:"spring",stiffness:100}} className="" src={me} alt="" />
              <i className="icon-verified  "></i>
            </div>

            <h2 className="mt-3 ">Omar Mohamed Twfik </h2>
            <h2 >Front End developer(React.js)</h2>
            <p className="my-4">I'm Omar, a skilled front-end developer specializing in HTML, CSS, JavaScript, the MATERIAL-UI
              library, and React. With a strong commitment to precision and creativity, I bring web projects to life.
              I stay updated on the latest trends, ensuring that I provide top-notch results.
            </p>
            <div className="icons  d-flex cursor-pointer  my-4 fs-5  ">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-linkedin"></i>

            </div>


          </div>


          <div className="col-lg-5 heroAnimation d-flex align-items-center justify-content-center ">
            <Lottie  lottieRef={lottieRef} onLoadedImages={() => {lottieRef.current.setSpeed(.5) }} animationData={heroAnimation} />

          </div>

        </div>
      </div>
    </section>

  </>
}
