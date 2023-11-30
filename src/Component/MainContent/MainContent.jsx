import React, { useState } from 'react'
import "./MainContent.css"
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion';
import { myProjects } from "./MyProjects"




export default function MainContent() {

  const [currentActive, setcurrentActive] = useState("AllProjects");

  // filter projects================================>
  const [filteringMyprojects, setfilteringMyprojects] = useState(myProjects);

  const handleFilter = (element) => {
    setcurrentActive(element);
    const newArray = myProjects.filter((items) => items.category === element)
    setfilteringMyprojects(newArray)
  }


  return <>

    <section id='Articles' className="mainContent">

      <div id='Projects' className="row justify-content-around ">

        <div className="col-2  col1content  ">

          <button onClick={() => {
            setcurrentActive("AllProjects")
            setfilteringMyprojects(myProjects)
          }} className={`d-flex justify-content-center align-items-center  ${currentActive === "AllProjects" ? "activeMine" : ""}`}>AllProjects</button>


          <button onClick={() => { handleFilter("HTML&CSS") }} className={`d-flex justify-content-center align-items-center ${currentActive === "HTML&CSS" ? "activeMine" : ""}`}> HTML & CSS</button>


          <button onClick={() => { handleFilter("javaScript") }} className={`d-flex justify-content-center align-items-center ${currentActive === "javaScript" ? "activeMine" : ""}`}>JavaScript</button>



          <button onClick={() => { handleFilter("React") }} className={`d-flex justify-content-center align-items-center ${currentActive === "React" ? "activeMine" : ""}`}>React & MUI</button>


          <button onClick={() => { handleFilter("Next") }} className={`d-flex justify-content-center align-items-center ${currentActive === "Next" ? "activeMine" : ""}`}>Next</button>



        </div>

        <div className="col-10 col2Content px-5  ">
    

            <div className="row  gy-3">
              <AnimatePresence>

                {filteringMyprojects.map((item) =>

                  <motion.div

                    layout
                    initial={{ transform: "scale(0.4)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ type: "spring", damping: 8, stiffness: 50 }}
                    key={item.projectName} className="col-xxl-4 col-xl-6 col-lg-6  ">

                    <div className="cartContent  rounded-3 overflow-hidden  pb-3 ">
                      <img className="w-100" src={item.imagePath} alt="" />

                      <h5 className="mt-3 px-2 h6">{item.projectName}</h5>
                      <p className="px-2 paragraph">{item.projectSummary}</p>

                      <div className=" d-flex justify-content-between align-items-center px-2 ">

                        <div className="d-flex  icon  ">
                          <a rel='noreferrer' target='_blank' href={item.LiveDemo}><i className="fa-solid fa-link me-3 "></i></a>
                          <a rel='noreferrer' target='_blank' href={item.GitHubRepo}> <i className="fa-brands fa-github"></i></a>
                        </div>

                        <div className=" details  d-flex align-items-center justify-content-center">
                          <p className="m-0 me-2 ">more</p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>

                    </div>



                  </motion.div>
                )}
              </AnimatePresence>
            </div>
       


        </div>

      </div>
    </section>


  </>
}
