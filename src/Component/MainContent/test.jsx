import React, { useEffect, useState } from "react";
import './MainContent.css'
import image from "../../Assets/Images/1.png"
import { AnimatePresence, motion } from "framer-motion";


export default function MainContent() {

  // nav animation=======================>

  const [currentTab, setCurrentTab] = useState("AllProjects");

  const handleTabClick = (category) => {
    setCurrentTab(category);

  };

  const projects = [
    { id: "aa", category: "AllProjects" },
    { id: "dd", category: "HTML-CSS" },
    { id: "ff", category: "JavaScript" },
  ];
  const filteredProjects = projects.filter((project) =>
    currentTab === "AllProjects" ? true : project.category === currentTab
  );
  // nav animation=======================>

  const [showScrollBtn, setshowScrollBtn] = useState(0)

  useEffect(() => {

    window.onscroll = () => {
      if (window.scrollY >= 562) {
        setshowScrollBtn(1)
      }

      else {
        setshowScrollBtn(0)
      }
    }
  }, [])





  return <>


    <div style={{ opacity: showScrollBtn }} className="arrowUpPtn  d-flex justify-content-center align-items-center">
      <a href="#header"><i className="fa-solid fa-angle-up"></i></a>
    </div>


    <section id="mainContent" className="mainContent d-flex ">

      <div className="nav d-block   nav-pills me-3  w-100  " id="v-pills-tab" role="tablist" aria-orientation="vertical">

        <button
          className="nav-link active "
          id="v-pills-AllProjects-tab" data-bs-toggle="pill" data-bs-target="#v-pills-AllProjects" type="button" role="tab" aria-controls="v-pills-AllProjects" aria-selected="true"
          onClick={() => handleTabClick("AllProjects")} 
        >
          AllProjects
        </button>

        <button onClick={() => handleTabClick("AllProjects")} className="nav-link" id="v-pills-HTML-CSS-tab" data-bs-toggle="pill" data-bs-target="#v-pills-HTML-CSS" type="button" role="tab" aria-controls="v-pills-HTML-CSS" aria-selected="false">HTML & CSS</button>
        <button onClick={() => handleTabClick("HTML-CSS")} className="nav-link" id="v-pills-javaScript-tab" data-bs-toggle="pill" data-bs-target="#v-pills-javaScript" type="button" role="tab" aria-controls="v-pills-javaScript" aria-selected="false">JavaScript</button>
        <button onClick={() => handleTabClick("JavaScript")} className="nav-link" id="v-pills-REACT-MUI-tab" data-bs-toggle="pill" data-bs-target="#v-pills-REACT-MUI" type="button" role="tab" aria-controls="v-pills-REACT-MUI" aria-selected="false">React & MUI</button>
        <button onClick={() => handleTabClick("AllProjects")} className="nav-link" id="v-pills-Next-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Next" type="button" role="tab" aria-controls="v-pills-Next" aria-selected="false">Next.js</button>
      </div>

      <div className="d-flex align-items-start">


        <div className="tab-content carts" id="v-pills-tabContent">

          <div className="tab-pane fade show active" id="v-pills-AllProjects" role="tabpanel" aria-labelledby="v-pills-AllProjects-tab">


            <div className="">

              <div className="row  gy-3">
                <AnimatePresence>

                  {filteredProjects.map((item) =>

                    <motion.div
                      layout
                      initial={{ transform: "scale(0.4)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ type: "spring", damping: 8, stiffness: 50 }}
                      key={item} className="col-xl-4 col-lg-6 ">

                      <div className="cartContent  rounded-3 overflow-hidden  pb-3 ">
                        <img className="w-100" src={image} alt="" />

                        <h5 className="mt-3 px-2">React Project</h5>
                        <p className="px-2">Lorem ipsum dolor sit ametcseteur adsicing elit. Placeat, consectetur dsicing elit. Placeat, consectetulkj</p>

                        <div className=" d-flex justify-content-between align-items-center px-2 ">

                          <div className="d-flex fs-5 icon  ">
                            <i className="fa-solid fa-link me-3 "></i>
                            <i className="fa-brands fa-github"></i>
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
          
          <div className="tab-pane fade" id="v-pills-HTML-CSS" role="tabpanel" aria-labelledby="v-pills-HTML-CSS-tab">
            
          </div>
          <div className="tab-pane fade" id="v-pills-javaScript" role="tabpanel" aria-labelledby="v-pills-javaScript-tab">...</div>
          <div className="tab-pane fade" id="v-pills-REACT-MUI" role="tabpanel" aria-labelledby="v-pills-REACT-MUI-tab">...</div>
          <div className="tab-pane fade" id="v-pills-Next" role="tabpanel" aria-labelledby="v-pills-Next-tab">...</div>

        </div>

      </div>


    </section >


  </>
}
