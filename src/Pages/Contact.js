import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import "./Contact.css";
import { IoSendSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />

      <div className="contact-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5164.288590747774!2d90.39227121373631!3d23.757951040116886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1694542798566!5m2!1sen!2sbd"
                width="600"
                height="500"
                allowfullscreen=""
                loading="lazy"
                className="border-0 w-100"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* --Contact-info-- */}

          <div id="content">
            <h1>Contact Us</h1>

            <form action=" " method="post" autocomplete="on">
              <p>
                <label for="username" class="icon-user">
                  Name
                  <span class="required">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  placeholder="Your Name"
                />
              </p>
              <p>
                <label for="usermail" class="icon-envelope">
                  E-mail address
                  <span class="required">*</span>
                </label>
                <input
                  type="email"
                  name="usermail"
                  id="usermail"
                  placeholder="I promise I hate spam too!"
                  required
                />
              </p>
              <p>
                <label for="usersite" class="icon-link">
                  Website
                </label>
                <input
                  type="url"
                  name="usersite"
                  id="usersite"
                  placeholder="eg: http://www.example.com"
                />
              </p>
              <p>
                <label for="subject" class="icon-bullhorn">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="What would you like to talk about?"
                />
              </p>
              <p>
                <label for="message" class="icon-comment">
                  Message
                  <span class="required">*</span>
                </label>
                <textarea
                  placeholder="Your message here and I'll answer as soon as possible "
                  required="required"
                ></textarea>
              </p>
              <p class="indication">
                Fields with
                <span class="required"> * </span>are required
              </p>
              <button class="button-72">
                <IoSendSharp />
                &nbsp; Send US Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
