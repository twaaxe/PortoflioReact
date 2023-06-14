import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const emailAddress = "twaaxe@gmail.com";

const handleEmailClick = () => {
  window.location.href = `mailto:${emailAddress}`;
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  return (

    <div className={`xl:mt-12 flex xl:flex-row w-[100] justify-center flex-col-reverse  overflow-hidden`}>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 justify-around rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        {/* formulaire de contact */}

        <motion.div variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 justify-around rounded-2xl'>
          <p>E-mail :<a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
          <p><a href="https://be.linkedin.com/in/axel-twagirayezu-799b021b1/en-us"> <br /> Linkedin of Twagirayezu Axel</a></p>
          <br />
          <p>Phone:+32/493.46.92.34</p>
        </motion.div>

      </motion.div>



    </div>
  )
}

export default SectionWrapper(Contact, "contact");