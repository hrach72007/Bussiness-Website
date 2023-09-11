import React, { useState } from "react"
import contact from '../img/contact.png'
import banner from '../img/banner.png'
import logo from '../img/logo.png'
import last from '../img/lastone.png'
// import Validate from "./Validation"
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { app } from  './firebaseConfig'
import { addDoc,collection } from "firebase/firestore"


function Contact(){
// const [value,Setvalue] = useState({
//     username: '',
//     email: '',
//     message: ''
// })

// const [error,Seterror] = useState([])

// const [email,Setemail] = useState('')
// const [validate,Setvalidate] = useState('')

// const Change = (evt) => {
//     Setvalue({
//       ...value,
//       [evt.target.name] : evt.target.value
//     });
//   }

const [name,Setname] = useState('')
const [email,Setemail] = useState('')
const [text,Settext] = useState('')

const userCollection = collection(app,'Contacts') 

  const Submit = (evt) => {
    evt.preventDefault();

    addDoc(userCollection, {
        name: name,
        email: email,
        message: text
    },alert('Message has been submitted'))

    Setname('')
    Setemail('')
    Settext('')
    // // Seterror(Validate(value))

    // app.collection('contacts')
    // .add({
    //   name: name,
    //   email: email,
    //   text: text
    // }).then(() => {
    //     alert('Message has been submitted')
    // })
 
    // Setname('')
    // Setemail('')
    // Settext('')
    
    // const RegEx =/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    /// /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    /// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    /// /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2-6}$/
    // if(RegEx.test(email)){
    //     Setvalidate('')
    // }
    // else if(!RegEx.test(email) && email === ''){
    //     Setvalidate('Email is’nt Valid')
    // }
    // else{
    //     Setvalidate('')
    // }
    }

//     const onChange = (evt) => {
// Setemail(evt.target.value)
//     }



    return(
        <>
                    <div className='top-0 left-0 relative'>
    <img src={banner} className='relative top-0 left-0' alt='/'/>
<img src={logo} className='absolute top-[15%] left-[10%]' alt='/'/>
<img src={contact} className='absolute slider top-[36%] left-[55%] w-[35%] ' alt='/'/>
<div className='absolute flex space-x-[28%] bottom-[78%] left-[56%]'>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/'>Home</Link></p>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/About'>About</Link></p>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/Service'>Service</Link></p>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/Contact'>Contact</Link></p>
</div>
        </div>
        <div className='slide-in-from-bottom absolute text-gray bottom-[60%] left-[10%] font-sans font-medium text-6xl space-y-5'>
<h2>Contact us</h2>
<p className='slider-in-from-bootom font-sans text-p text-base'>Pleasure rationally encounter consequences<br/>
are extremely painful great oppurtunity</p>
</div>
<div className="space-y-4 ml-[9rem] mt-[5rem]">
    <h1 className="font-sans text-2xl text-gray font-sans duration-300 hover:text-green">Get in touch</h1>
    <p className="font-sans text-p">Top rated construction packages we pleasure rationally encounter<br/>
consequences interesting who loves or pursue or desires</p>
</div>
<div className="relative mt-[3.5rem]">
<div className="absolute h-[32rem] w-[30rem] ml-[50rem] bottom-[-40%] bg-contact">
    <div>
    <div className="space-y-5 mt-[2rem]">
        <h1 className=" flex justify-center font-sans text-2xl text-gray font-sans underline">Office Address</h1>
<div className="font-sans text-p ">
    <p className="ml-[6rem]">245 Southern Street, Apartment no. 174</p>
<p className="ml-[8rem]">Central Twon, New Yourk, USA</p>
</div>
    </div>
    <div className="space-y-5 mt-[4.5rem]">
        <h1 className=" flex justify-center font-sans text-2xl text-gray font-sans underline">Phone Number</h1>
<div className="font-sans text-p ">
    <p className="ml-[11rem]">+12345 678 987</p>
<p className="ml-[11.1rem]">+12345 678 987</p>
</div>
    </div>
    <div className="space-y-5 mt-[4rem]">
        <h1 className=" flex justify-center font-sans text-2xl text-gray font-sans underline">Web Address</h1>
<div className="font-sans text-p ">
    <p className="ml-[11rem]">info@example.com</p>
<p className="ml-[11.1rem]">www.example.com</p>
</div>
    </div>
    </div>


</div>
    <div className="relative">
<input className=" absolute ml-[9rem] bottom-[1%] shadow appearance-none border border-green rounded w-[15%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" value={name} onChange={(e) => Setname(e.target.value)} type="text" placeholder="Username"/>
{
    // error.username && <p className="absolute text-red font-sans ml-[9.2rem]">{error.username}</p>
}
<input className="absolute ml-[25rem] bottom-[1%] shadow appearance-none border border-green rounded w-[15%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" value={email} onChange={(e) => Setemail(e.target.value)} type="email" placeholder="Your Email"/>
{
//    error.email && <p className="absolute text-red font-sans ml-[25rem]">{error.email}</p>
}
</div>
<textarea className=" ml-[9rem] mt-[3rem] text-start shadow appearance-none border border-green rounded w-[33%] h-[10rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='message' value={text}  onChange={(e) => Settext(e.target.value)} type="text" placeholder="Message"/>
{
    // error.message && <p className="text-red font-sans ml-[9.2rem]">{error.message}</p>
}
</div>
<div>
<button onClick={Submit} className='bg-gray mt-[2.5rem] ml-[8.8rem] duration-300 hover:bg-green text-white text-lg h-14 rounded-full w-[11.5%]'>Send Message</button>
    </div>
    

    <div className='relative mt-[10rem]'>
  <img src={last} alt=''/>
  <img className='absolute bottom-[18.5rem] left-[9.5rem]' src={logo} alt=''/>
  <p className='absolute bottom-[12.2rem] left-[9.8rem] font-sans text-base text-p'>Pleasure rationally encounter<br/> consequences that are extremely<br/> painful. Nor again is there</p>
  <div className='absolute bottom-[10rem] left-[10.3rem] flex justify-between w-[10%]'>
      <FaFacebook className=' duration-300 hover:text-green'/>
      <FaInstagram className=' duration-300 hover:text-green'/>
      <FaTwitter className=' duration-300 hover:text-green'/>
      <FaWhatsapp className=' duration-300 hover:text-green'/>
  </div>
  <div className='absolute left-[35rem] bottom-[19rem] text-2xl font-sans'>
      <h1 className='text-Qcolor'>Quick Link</h1>
      <div className='absolute left-1 top-[3rem] space-y-2'>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>About Us</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='Service'>Pricing Plan</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>Conditions</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>Blog Post</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>Our Clients</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='Contact'>Contact Us</Link></p>
      </div>
  </div>

  <div className='absolute left-[53rem] bottom-[9.3rem] text-2xl font-sans'>
      <h1 className='absolute text-Qcolor'>Services</h1>
      <div className='relative left-1 top-[3rem] space-y-2.5'>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>Business Plan</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='Service'>Creative Strategy</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>Branding</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>Digital Solution</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>Marketing Policy</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>Campaign & PR</Link></p>
      </div>
  </div>

  <div className='absolute left-[70rem] bottom-[10.5rem] text-2xl font-sans'>
      <h1 className='absolute text-Qcolor'>Contact info</h1>
      <div className='relative left-1 top-[3rem] space-y-3'>
        <div className='space-y-1'>
            <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>245 Southern Street, Apt. 147</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>New York, USA</Link></p>
        </div>
        <div className='space-y-1'>
            <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>+12354 569 874</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>+98745 612 398</Link></p>
        </div>
        <div className='space-y-1'>
            <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>info@example.com</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>www.example.com</Link></p>
        </div>
      </div>
  </div>

</div>
  
        </>
    )
}
export default Contact