import React,{useState,useRef} from 'react'
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import LazyLoad from 'react-lazy-load';
import SocialLinks from './SocialLinks';
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import {SectionWrapper} from "../hoc"
import { slideIn  } from '../utils/motion'

const Contact = () => {
  const formRef= useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name:'',
    email : '',
    message : '',
  })
//template_2pg73ec
// service_h2vv6oq
// 4B8LGhZJczTInOOb3

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
     "service_h2vv6oq",
      "template_2pg73ec",
      {
        from_name: form.name,
        to_name: "Asad Ullah",
        from_email: form.email,
        to_email: "shaikhasad183@gmail.com",
        message: form.message,
      },
      "4B8LGhZJczTInOOb3"
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse  flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
>
      <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <hr className="-mt-4"/>
        <SocialLinks/>
      <form      ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>

<label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
              </label>
             <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>

      </motion.div>
      
      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" variants={slideIn("right", "tween", 0.2, 1)}>

        <EarthCanvas/>  
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")