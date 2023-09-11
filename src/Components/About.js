import '../App.css';
import headerimg from '../img/footer.png'
import footerimg from '../img/header.png'
import logo from '../img/logo.png'
import slider from '../img/slide2.png'
import first_brand from '../img/brand1.png'
import second_brand from '../img/brand2.png'
import third_brand from '../img/brand3.png'
import fourth_brand from '../img/brand4.png'
import secure from '../img/secure.png'
import lamp from '../img/lamp.png'
import briliant from '../img/briliant.png'
import grow from '../img/grow.png'
import digital from '../img/dig.png'
import TV from '../img/TV.png'
import puzzle from '../img/puzzle.png'
import media from '../img/media.png'
import chess from '../img/chess.png'
import bag from '../img/bag.png'
import banner from '../img/banner.png'
import rouber from '../img/rouber.png'
import banner1 from '../img/banner1.png'
import ipaid from '../img/newipade.png'
import David from '../img/David.png'
import John from '../img/John.png'
import head from '../img/headofidea.png'
import Rebeca from '../img/Rebeca.png'
import Ricardo from '../img/Ricardo.png'
import last from '../img/lastone.png'
import Carousel from "nuka-carousel"
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './languageSwitcher';

function App() {

const [cout,Setcout] = useState(0)
const [cout1,Setcout1] = useState(0)
const [cout2,Setcout2] = useState(0)
const [cout3,Setcout3] = useState(0)


useEffect(() => {
  const interval = setInterval(() => {
    if(cout < 1200){
      Setcout(cout + 1)
    }
  },0.1)

  return(() => {
    clearInterval(interval)
  })
},[cout])

useEffect(() => {
  const interval = setInterval(() => {
    if(cout1 < 934){
      Setcout1(cout1 + 1)
    }
  }, 0.1)

  return(() => {
    clearInterval(interval)
  })
},[cout1])

useEffect(() => {
  const interval = setInterval(() => {
    if(cout2 < 1492){
Setcout2(cout2 + 1)
    }
  },0.1)

  return(() => {
    clearInterval(interval)
  })

},[cout2])

useEffect(() => {
  const interval = setInterval(() => {
    if(cout3 < 909){
      Setcout3(cout3 + 1)
    }
  },0.1);

  return(() => {
    clearInterval(interval)
  })
},[cout3])

/// Translation
const {t} = useTranslation()

return(
  /// 3999
  /// 101
<>
<div className='top-0 left-0 relative'>
    <img src={banner} className='relative top-0 left-0' alt='/'/>
<img src={logo} className='absolute top-[15%] left-[10%]' alt='/'/>
<img src={banner1} className='absolute slider top-[25%] left-[53%] w-[40%] ' alt='/'/>
<LanguageSwitcher/>
<div className='absolute flex space-x-[28%] bottom-[78%] left-[56%]'>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/'>{t('header.main.Home')}</Link></p>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/About'>{t('header.main.About')}</Link></p>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/Service'>{t('header.main.Service')}</Link></p>
<p className='font-medium text-xl rounded-lg hover:text-green duration-300'><Link to='/Contact'>{t('header.main.Contact')}</Link></p>
</div>
<div className='slide-in-from-bottom absolute text-gray bottom-[25%] left-[10%] font-sans font-medium text-6xl space-y-4'>
<h2>{t('header.newtext')}</h2>
<p className='font-sans text-p text-lg'>{t('header.newtext1')} <br/> {t('header.newtext2')}</p>
</div>

</div>


<div>
  <div className='absolute top-[75%] left-[29%] space-y-4'>
  <span className='font-sans text-lg flex justify-center text-smoke  w-[93.5%]'>{t('body.text')}</span>
  <h3 className=' font-sans text-gray font-medium text-5xl'>{t('body.text2')} <span className='text-green'>{t('body.text2_')}</span> {t('body.text3_')}</h3>
  <div className='font-sans text-p text-'>
      <p>{t('body.text3')}</p>
  <p className='flex justify-center'>{t('body.text4')}</p>
  </div>
  <button className='absolute bg-gray duration-300 hover:bg-green text-white text-xl h-14 py-2 px-4 rounded-full w-[25%] left-[34%] top-[120%]'>{t('header.text2')}</button>
</div>
<div className='absolute top-[115%] left-24 w-[25%]'>
  <div
  class="absolute rounded-lg bg-card space-y-6 duration-300 cursor-pointer hover:shadow-green shadow-2xl">
  <div class="relative overflow-hidden bg-cover bg-no-repeat left-10 top-8 ">
    <img
      class="rounded-t-lg"
      src={secure}
      alt=""/>
  </div>
  <div class="p-8 space-y-8">
    <h3 className=' font-sans text-2xl'>{t('body.security')}</h3>
    <p class="font-sans text-p text-base">
    {t('body.underall')}
    </p>
  </div>
</div>
<div
  class="relative rounded-lg bg-card  space-y-6 duration-300 left-[110%] top-28 cursor-pointer hover:shadow-green shadow-2xl">
  <div class="relative overflow-hidden bg-cover bg-no-repeat left-10 top-8 ">
    <img
      class="rounded-t-lg"
      src={lamp}
      alt=""/>
  </div>
  <div class="p-8 space-y-8">
    <h3 className=' font-sans text-2xl'>{t('body.idea')}</h3>
    <p class="font-sans text-p text-base">
    {t('body.underall')}
    </p>
  </div>
</div>
<div
  class="relative rounded-lg bg-card space-y-6 duration-300 left-[220%] bottom-[18.5rem] cursor-pointer hover:shadow-green shadow-2xl">
  <div class="relative overflow-hidden bg-cover bg-no-repeat left-10 top-8 ">
    <img
      class="rounded-t-lg"
      src={briliant}
      alt=""/>
  </div>
  <div class="p-8 space-y-8">
    <h3 className='font-sans text-2xl'>{t('body.service')}</h3>
    <p class="font-sans text-p text-base">
    {t('body.underall')}
    </p>
  </div>
</div>
<div className='absolute flex justify-between top-[88%] w-[65rem] h-14 left-[20%]'>
  <img src={first_brand} alt=''/>
  <img src={second_brand} alt=''/>
  <img src={third_brand} alt=''/>
  <img src={fourth_brand} alt=''/>
</div>
</div>
<div className='absolute space-y-5 top-[102rem] left-[10rem]'>
  <p className='text-smoke font-sans text-xl font-semibold'>{t('body.aboutus')}</p>
  <h1 className='font-sans text-gray font-medium text-5xl'>{t('body.aboutus_')} <span className='text-green'>{t('body.aboutus1_')}</span><br/>{t('body.aboutus2_')}</h1>
  <p className='flex justify-between font-sans text-xl text-gray'>{t('body.underaboutus')} 2023 <div className='absolute bg-gray top-[41%] w-24 h-[1px] left-[9rem]'></div></p>
  <p className='font-sans text-p text-base'>{t('body.underab.text')} <br/>{t('body.underab.text2')}<br/>{t('body.underab.text3')}</p>
  <p className='font-style text-gray text-lg'>{t('body.underab.text4')}<br/>{t('body.underab.text5')}</p>
  <button className='bg-gray duration-300 hover:bg-green text-white text-xl h-14 py-2 px-4 rounded-full w-[34%]'>{t('body.underaboutus2')}</button>
</div>
  <img src={grow} className='absolute top-[96.5rem] left-[50rem]' alt=''/>
</div>
<div className='absolute top-[135rem] flex justify-center w-[94%] space-y-[2.5%]'>
<span className='absolute font-sans text-smoke text-lg left-[39rem]'>{t('body.services.text')}</span>
<h3 className='font-sans top-[30%] text-gray font-medium text-5xl'>{t('body.services.text2')} <span className='text-green'>{t('body.services.text2_')}</span> {t('body.services.text3')}</h3>
<p className='absolute font-sans text-p top-[80%]'>{t('body.underab.text4')}
</p>
<p className='absolute font-sans text-p top-[110%]'>{t('body.underab.text2_')}</p>
</div>
<div className='absolute top-[150rem] left-[6rem] space-y-5'>
  <div className=''>
    <img src={digital} alt=''/>
    <h1 className='relative font-sans left-[5.6rem] bottom-[4.4rem] text-gray text-2xl duration-300 hover:text-green'>{t('body.services.digital')}</h1>
    <p className='relative font-sans text-p left-[5.5rem] bottom-[4rem]'>{t('body.services.main')}<br/> {t('body.services.main2')}</p>
    <div className='absolute bg-p bottom-8 w-[20rem] h-[1px] '></div>
  </div>
  <div className='absolute space-y-5'>
    <img src={TV} alt=''/>
    <div className='relative left-[5.9rem] bottom-[6.1rem]'>
      <h1 className='relative text-2xl text-gray font-sans duration-300 hover:text-green'>{t('body.services.bussiness')}</h1>
    <p className='relative font-sans text-p'>{t('body.services.main')}<br/> {t('body.services.main2')}</p>
    </div>
    <div className='absolute bg-p bottom-10 w-[20rem] h-[1px] '></div>
  </div>
  <div className='absolute top-[21rem]'>
<img src={puzzle} alt=''/>
<div className='relative left-[5.9rem] bottom-[5rem] space-y-1.5'>
  <h1 className='relative text-2xl text-gray font-sans duration-300 hover:text-green'>{t('body.services.creative')}</h1>
  <p className='relative font-sans text-p'>{t('body.services.main')}<br/> {t('body.services.main2')}</p>
</div>
  </div>
</div>
<img src={media} className='relative left-[29rem] top-[121rem]' alt=''/>
<div className='absolute top-[150rem] left-[64rem] space-y-5'>
  <div className=''>
    <img src={chess} alt=''/>
    <h1 className='relative font-sans left-[5.6rem] bottom-[4.4rem] text-gray text-2xl duration-300 hover:text-green'>{t('body.services.brand')}</h1>
    <p className='relative font-sans text-p left-[5.5rem] bottom-[4rem]'>{t('body.services.main')}<br/> {t('body.services.main2')}</p>
    <div className='absolute bg-p bottom-8 w-[20rem] h-[1px] '></div>
  </div>
  <div className='absolute space-y-5'>
    <img src={bag} alt=''/>
    <div className='relative left-[6.1rem] bottom-[6.1rem]'>
      <h1 className='relative text-2xl text-gray font-sans duration-300 hover:text-green'>{t('body.services.policy')}</h1>
    <p className='relative font-sans text-p'>{t('body.services.main')}<br/> {t('body.services.main2')}</p>
    </div>
    <div className='absolute bg-p bottom-10 w-[20rem] h-[1px]'></div>
  </div>
  <div className='absolute top-[21rem]'>
<img src={rouber} alt=''/>
<div className='relative left-[5.9rem] bottom-[5rem] space-y-1.5'>
  <h1 className='relative text-2xl text-gray font-style duration-300 hover:text-green'>{t('body.services.PR')}</h1>
  <p className='relative font-sans text-p'>{t('body.services.main')}<br/> {t('body.services.main2')}</p>
</div>
  </div>
</div>
<div className='relative top-[132rem] left-[3.6rem]'>
<img src={ipaid} alt=''/>
<p className='relative bottom-[36.5rem] left-[47rem] text-smoke font-sans text-xl font-semibold'>{t('body.testim')}</p>
<h1 className='relative bottom-[35rem] left-[47rem] font-sans top-[30%] text-gray font-medium text-5xl'>{t('body.undertestim')}<br/> {t('body.undertestim_')}<span className='text-green'> {t('body.undertestim__')}</span> {t('body.undertestim___')}</h1>
<h1 className='relative bottom-[33.2rem] left-[47.39rem] font-sans text-xl text-gray'>{t('body.undertestim2')}</h1>
<h1 className='relative bottom-[31.6rem] left-[47.5rem] font-sans top-[30%] text-gray font-medium text-3xl'>{t('body.undertestim3')}<span className='text-green'> {t('body.undertestim3_')}</span></h1>
<div className='relative w-[30%] bottom-[25rem] left-[47.5rem]'>
  <Carousel className='bottom-[5rem]'>
 <div>
      <p className='font-normal text-p bottom-[2.7rem] duration-300 hover:text-green'>{t('body.carousel.text')}</p>
      <img src={David} alt=''/>
      <h1 className='relative text-gray font-sans left-[3.7rem] bottom-[2.8rem]'>David Loyed</h1>
      <p className='relative text-p font-sm left-[3.7rem] bottom-[2.9rem]'>CEO, OMEX</p>
 </div>
 <div>
    <p className='font-normal text-p bottom-[2rem]  duration-300 hover:text-green'>{t('body.carousel.text')}</p>
      <img src={John} alt=''/>
      <h1 className='relative text-gray font-sans left-[3.7rem] bottom-[2.8rem]'>John Loyed</h1>
      <p className='relative text-p font-sm left-[3.7rem] bottom-[2.9rem]'>CEO, OMEX</p>
      </div>
      <div>
    <p className='font-normal text-p bottom-[2rem]  duration-300 hover:text-green'>{t('body.carousel.text')}</p>
      <img src={John} alt=''/>
      <h1 className='relative text-gray font-sans left-[3.7rem] bottom-[2.8rem]'>John Loyed</h1>
      <p className='relative text-p font-sm left-[3.7rem] bottom-[2.9rem]'>CEO, OMEX</p>
      </div>
      <div>
        <p className='font-normal text-p bottom-[2rem]  duration-300 hover:text-green'>{t('body.carousel.text')}</p>
      <img src={David} alt=''/>
      <h1 className='relative text-gray font-sans left-[3.7rem] bottom-[2.8rem]'>David Loyed</h1>
      <p className='relative text-p font-sm left-[3.7rem] bottom-[2.9rem]'>CEO, OMEX</p>
 </div>
 <div>
 <p className='font-normal text-p bottom-[2rem]  duration-300 hover:text-green'>{t('body.carousel.text')}</p>
      <img src={John} alt=''/>
      <h1 className='relative text-gray font-sans left-[3.7rem] bottom-[2.8rem]'>John Loyed</h1>
      <p className='relative text-p font-sm left-[3.7rem] bottom-[2.9rem]'>CEO, OMEX</p>
      </div>
      <div>
        <p className='font-normal text-p bottom-[2rem] delay-100 duration-500 hover:text-green'>{t('body.carousel.text')}</p>
        <img src={David} alt=''/>
      <h1 className='relative text-gray font-sans left-[3.7rem] bottom-[2.8rem]'>David Loyed</h1>
      <p className='relative text-p font-sm left-[3.7rem] bottom-[2.9rem]'>CEO, OMEX</p>
 </div>
</Carousel>
</div>
</div>

<div className='relative top-[119rem] left-[9rem] font-sans text-gray text-3xl'>
  <span className='relative font-medium duration-300 hover:text-green left-[2.8rem]'>{cout}+</span>
  <h3 className='relative font-light text-gray'>{t('body.projects.text1')}</h3>
</div>
<div className='relative top-[114.44rem] left-[28rem] font-sans text-gray text-3xl'>
<span className='relative font-medium duration-300 hover:text-green left-[2.8rem]'>{cout1}+</span>
  <h3 className='relative font-light text-gray'>{t('body.projects.text2')}</h3>
</div>
<div className='relative top-[109.8rem] left-[48rem] font-sans text-gray text-3xl'>
<span className='relative font-medium duration-300 hover:text-green left-[1.8rem]'>{cout2}+</span>
  <h3 className='relative font-light text-gray'>{t('body.projects.text3')}</h3>
</div>
<div className='relative top-[105.3rem] left-[68rem] font-sans text-gray text-3xl'>
<span className='relative font-medium duration-300 hover:text-green left-[2.8rem]'>{cout3}+</span>
  <h3 className='relative font-light text-gray'>{t('body.projects.text4')}</h3>
</div>
<div className='flex relative left-[38rem] bottom-[5rem]'>
  <div className='card relative top-[120rem] w-[14.5rem] h-[19rem] bg-smoke'>
  <img src={head} className='absolute items-center w-[9rem] h-[9rem] left-[2.65rem] top-7' alt=''/>
  <h3 className='new absolute text-card-color duration-300 left-[2.1rem] top-[12rem] hover:text-green'>Cristopher Williams</h3>
  <p className='absolute left-[4.17rem] top-[14rem] text-p font-sans'>Head of Idea</p>
</div>
<div className='card relative top-[120rem] w-[14.5rem] h-[19rem] right-[2rem] bg-smoke'>
  <img src={Rebeca} className='absolute items-center w-[9rem] h-[9rem] left-[2.65rem] top-7' alt=''/>
  <h3 className='new absolute text-card-color duration-300 left-[3.6rem] top-[12rem] hover:text-green'>Rebeca Smith</h3>
  <p className='absolute left-[4.44rem] top-[14rem] text-p font-sans'>Head of HR</p>
</div>
<div className='card relative top-[120rem] w-[14.5rem] h-[19rem] right-[4rem] bg-smoke'>
  <img src={Ricardo} className='absolute items-center w-[9rem] h-[9rem] left-[2.65rem] top-7' alt=''/>
  <h3 className='new absolute text-card-color duration-300 left-[3.7rem] top-[12rem] hover:text-green'>Ricardo Powel</h3>
  <p className='absolute left-[2.4rem] top-[14rem] text-p font-sans'>Head of Development</p>
</div>
</div>
<div className='relative top-[130rem] right-[40rem]'>
<p className='relative bottom-[36.5rem] left-[47rem] text-smoke font-sans text-xl font-semibold'>{t('body.testim')}</p>
<h1 className='relative bottom-[35rem] left-[47rem] font-sans top-[30%] text-gray font-medium text-5xl space-y-3'>{t('body.peoples.text1')} <span className='text-green'>{t('body.peoples.text2')}</span> {t('body.peoples.text3')}<br/>{t('body.peoples.text4')}</h1>
<p className='relative bottom-[33.2rem] left-[47.39rem] font-sans text-lg text-p'>{t('body.underab.text4')}<br/> {t('body.underab.text2')}<br/> {t('body.underab.text3')}</p>
<p className='relative bottom-[31.6rem] left-[47.5rem] font-sans top-[30%] text-newgray font-medium text-base'>{t('body.underab.text6')}<br/> {t('body.underab.text7')}</p>
<button className='relative bg-gray duration-300 hover:bg-green text-white text-xl h-14 py-2 px-4 rounded-full bottom-[30rem] left-[47.5rem]'>{t('body.underaboutus2')}</button>
</div>
<div className='relative flex justify-center top-[110rem]'>
<p className='text-smoke font-sans text-xl font-semibold'>{t('body.news.text1')}</p>
<h1 className='absolute top-[3rem] text-gray font-medium text-4xl'>{t('body.news.text2')} <span className='text-green'>{t('body.news.text3')}</span> {t('body.news.text4')}</h1>
<h1 className='absolute top-[5.5rem] text-gray font-medium text-4xl'>{t('body.news.text5')}</h1>
{/* <input type="email" className="inp absolute top-[10rem] bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[22rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/> */}
<div className='absolute top-[10rem]'>
<label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-p">{t('body.news.email')}</label>
<input type="text" className="h-[3rem] bg-gray-50 border border-gray-300 border-p text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John72007@gmail.com" required/>
<button className='absolute bg-gray duration-300 hover:bg-green text-white text-xl h-14 py-2 px-4 rounded-full top-[6rem]'>{t('body.underaboutus2')}</button>
</div>
</div>
<div className='relative top-[130rem]'>
  <img src={last} alt=''/>
  <img className='absolute bottom-[18.5rem] left-[9.5rem]' src={logo} alt=''/>
  <p className='absolute bottom-[12.2rem] left-[9.8rem] font-sans text-base text-p'>{t('body.footers.main.text1')}<br/> {t('body.footers.main.text2')}<br/> {t('body.footers.main.text3')}</p>
  <div className='absolute bottom-[10rem] left-[10.3rem] flex justify-between w-[10%]'>
      <FaFacebook className=' duration-300 hover:text-green'/>
      <FaInstagram className=' duration-300 hover:text-green'/>
      <FaTwitter className=' duration-300 hover:text-green'/>
      <FaWhatsapp className=' duration-300 hover:text-green'/>
  </div>
  <div className='absolute left-[35rem] bottom-[19rem] text-2xl font-sans'>
      <h1 className='text-Qcolor'>{t('body.footers.quick.main')}</h1>
      <div className='absolute left-1 top-[3rem] space-y-2'>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>{t('body.footers.quick.aboutus')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='Service'>{t('body.footers.quick.price')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>{t('body.footers.quick.cond')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>{t('body.footers.quick.blog')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>{t('body.footers.quick.clients')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='Contact'>{t('body.footers.quick.us')}</Link></p>
      </div>
  </div>

  <div className='absolute left-[53rem] bottom-[9.3rem] text-2xl font-sans'>
      <h1 className='absolute text-Qcolor'>{t('body.footers.services.main')}</h1>
      <div className='relative left-1 top-[3rem] space-y-2.5'>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>{t('body.footers.services.business')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='Service'>{t('body.footers.services.creative')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>{t('body.footers.services.brand')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='About'>{t('body.footers.services.solution')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>{t('body.footers.services.police')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>{t('body.footers.services.pr')}</Link></p>
      </div>
  </div>

  <div className='absolute left-[70rem] bottom-[10.5rem] text-2xl font-sans'>
      <h1 className='absolute text-Qcolor'>{t('body.footers.contactinfo.main')}</h1>
      <div className='relative left-1 top-[3rem] space-y-3'>
        <div className='space-y-1'>
            <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>{t('body.footers.contactinfo.address')}</Link></p>
        <p className='font-sans text-base text-p duration-300 hover:text-green'><Link to='/'>{t('body.footers.contactinfo.address2')}</Link></p>
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
export default App;


