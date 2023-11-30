import React, { useEffect, useState } from "react";
import './Header.css'

export default function Header() {

  const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {

    if (theme === "light") {
      document.body.classList.remove("dark",)
      document.body.classList.add("light")
    }
    else {
      document.body.classList.remove("light",)
      document.body.classList.add("dark")

    }
  }, [theme])


  return <>
    <header id="header" className="d-flex justify-content-between align-items-center pt-4 px-5">


      <div className="circle menu d-none">
        <i data-bs-toggle="modal" data-bs-target="#exampleModal" className=" fa-solid fa-bars fs-5 cursor-pointer"></i>
      </div >

      <div />

      <nav >
        <ul className="d-flex justify-content-center   align-items-center m-0 gap-3  py-2 px-4 rounded-5   shadow ">
          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Articles">articles</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Speaking">Speaking</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>

        </ul>
      </nav>


      {theme === "dark" ? <div onClick={() => {

        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
        settheme(localStorage.getItem("currentMode"))
      }} className="circle">
        <i className="fa-regular fa-moon fs-5 cursor-pointer"></i>
      </div > : <div onClick={() => {
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
        settheme(localStorage.getItem("currentMode"))
      }} className="circle ">
        <i className="fa-regular icon-sun"></i>
      </div >}





    </header>





    {/* start modal===============================================> */}

    <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">

      <div className="modal-dialog ">

        <div className="modal-content  rounded-4  py-3 px-2">

          <div className="modal-header border-0 px-4">
            <h1 className="modal-title  fs-6 " id="exampleModalLabel">Navigation</h1>
            <i data-bs-dismiss="modal" aria-label="Close" className="fa-solid fa-xmark cursor-pointer fs-5"></i>
          </div>


          <div className="modal-body  p-0 ">

            <ul className=" m-0  p-0 px-4">
              <li >
                <a href="#About">About</a>
              </li>

              <li >
                <a href="#Articles">Articles</a>
              </li>
              <li >
                <a href="#Projects">Projects</a>
              </li>
              <li >
                <a href="#Speaking">Speaking</a>
              </li>

              <li >
                <a href="#Contact">Contact</a>
              </li>

            </ul>
          </div>

          <div className="modal-footer  border-0">
          </div>

        </div>
      </div>
    </div>


  </>
}
