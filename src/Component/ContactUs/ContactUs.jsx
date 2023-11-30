import React from "react";
import './ContactUs.css'
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json"
import contactAnimation from "../../../src/animation/contact.json"

import { ValidationError, useForm } from "@formspree/react";

export default function ContactUs() {

  const [state, handleSubmit] = useForm("xyyqqnre");

  return <>

    <section id="Contact" className="contactUs">

      <div id="Speaking" className="row">





        <div className="col-md-7 col1Content  ">

          <div className=" d-flex  gap-4  w-50 align-items-center">
            <i className="fa-solid fa-envelope fs-3"></i>
            <h2 className="p-0 m-0">Contact us</h2>
          </div>
          <p className="mt-3">Contact us for more information and Get notified when I publish something new.</p>

          <form onSubmit={handleSubmit} className="mt-5">

            <div className="email  d-flex  align-items-center gap-4 ">
              <label htmlFor="email" className="m-0">Email Address:</label>
              <input autoComplete="none" name="email" id="email" className="form-control w-50" type="text" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="message mt-4 d-flex  align-items-center gap-4 ">
              <label htmlFor="message" className="m-0">Your message:</label>
              <textarea name="message" id="message" cols="30" rows="7" className="form-control w-50 " type="text" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button disabled={state.submitting} className="btnSubmit mt-4" type="submit">{state.submitting ? "Submitting....." : "submit"}</button>
            {state.succeeded ? <p className="mt-4 d-flex align-items-center">
              <Lottie loop={false} style={{ height: "37px" }} animationData={doneAnimation} />
              Thanks for contact me</p> : ""}



          </form>

        </div>









        <div className="col-md-5 col2Content  d-flex align-items-center justify-content-center">
          <Lottie  animationData={contactAnimation} />

        </div>


      </div>


    </section>

  </>
}
