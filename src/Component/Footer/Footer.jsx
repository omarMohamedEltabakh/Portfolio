import React from "react";
import './Footer.css'

export default function Footer() {


  return <>

    <footer className="">

      <div className="row pb-4 d-flex justify-content-between ">

        <div className="col-lg-6  " >
         
            <ul className="d-flex gap-4 m-0 p-0 ">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#speaking">Speaking</a></li>
              <li><a href="#uses">Uses</a></li>
            </ul>
          
        </div>

        <div className="col-lg-6  madeByWith">

          <p className="m-0 ">Made With By Omar Mohamed © 2023</p>
        </div>
      </div>


    </footer>

  </>
}
