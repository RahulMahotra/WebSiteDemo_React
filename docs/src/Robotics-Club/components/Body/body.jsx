import React from "react";
import About from "./About/About";
import Styles from "./body.module.css";
import Events from "./Events/Events";
import Contact from "./Contact_Us/Contact";
import Coordinators from "./Coordinators/Coordinators";

function body() {
  return (
    <div>
      <div className={Styles.body}>
        <About />
      </div>
      <div className={Styles.events}>
        <Events />
      </div>
      <div className={Styles.coordinators}>
        <Coordinators />
      </div>
      <div className={Styles.contactus}>
        <Contact />
      </div>
    </div>
  );
}

export default body;
