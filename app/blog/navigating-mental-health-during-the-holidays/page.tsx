"use client"
import type { Metadata } from "next";
import { Open_Sans, Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";
import Scrollspy from 'react-scrollspy'

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    //👇 Add variable to our object
    variable: '--font-manrope',
})

export default function NavigatingMentalHealthDuringTheHolidays() {
    return (
    <main className="">
        <div className="lg:pt-72 lg:pb-24 pt-24 pb-12 relative intro-banner-blog">
            <div className="flex lg:flex-row flex-col lg:gap-5 gap-5 max-w-7xl mx-auto px-5 xl:px-0 w-full">
                <div className="lg:w-5/12 self-center bg-gradient-to-t from-[#1A70BA] to-[#02C088] lg:py-10 py-6 px-6 lg:pl-6 lg:pr-12 rounded-lg text-center lg:text-left">
                    <div className="lg:mb-8 mb-2">
                        <div className="title-h3 text-white">December 12th, 2023</div>
                        <div className="title-h3 text-white">By Editorial Team</div>
                    </div>                    
                    <h1 className={manrope.className}>
                        <span className="lg:block title-h1 text-white">Navigating Mental Health During The Holidays: A Comprehensive Guide</span>
                    </h1>
                </div>
                <div className="lg:w-7/12">
                    <Image
                        src="/navigating-mental-health-during-the-holidays.webp"
                        alt="navigating-mental-health-during-the-holidays"
                        className="w-full border-2 rounded-3xl border-2 border-[#02C088] drop-shadow-xl"
                        width={941}
                        height={631}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>        
        
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-8 max-w-7xl w-full mx-auto lg:pb-20 pb-8 px-5 lg:px-0">
            <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'] } className="lg:w-3/12 w-full flex flex-col gap-3 text-center lg:text-left blog-sidebar-links lg:sticky lg:top-56 z-10 self-start" currentClassName="is-current">
                <li className="border-b-2 border-[#02C088] pb-3">
                    <Link href={'#section-1'}>Remote Patient Monitoring Providing Easy Virtual Chronic Care Management?</Link>
                </li>                
                <li className="border-b-2 border-[#02C088] pb-3">
                    <Link href={'#section-2'}>H2 Title 1</Link>
                </li>                
                <li className="border-b-2 border-[#02C088] pb-3">
                    <Link href={'#section-3'}>H2 Title 2</Link>
                </li>                
                <li className="border-b-2 border-[#02C088] pb-3">
                    <Link href={'#section-4'}>H3 Title 3</Link>
                </li>                
                <li className="border-b-2 border-[#02C088] pb-3">
                    <Link href={'#section-5'}>H3 Title 4</Link>
                </li>                
                <li className="border-b-2 border-[#02C088] pb-3">
                    <Link href={'#section-6'}>H2 Title 5</Link>
                </li>
            </Scrollspy>
            <div className="lg:w-9/12 w-full text-center lg:text-left">
                <section id="section-1" className="lg:mb-6 mb-6 section-scrollspy">
                    <h2 className="title-h2">Remote Patient Monitoring Providing Easy Virtual Chronic Care Management</h2>
                    <p className="lg:mb-4 mb-4">RPM enables doctors to get critical data in between different hours while empowering individuals to take charge of their health. At Caresync Health, we allow you to keep an eye on your patient&rsquo;s medical records and boost their involvement from the convenience of their own homes, offices, or other locations.</p>
                    <h3 className="title-h3">A Latest Approach To Improving The Overall Health</h3>
                    <p className="lg:mb-4 mb-4">RPM service supports healthcare professionals in providing treatment for their patients outside of the conventional office environment. Patients utilize at-home linked equipment, such as blood pressure cuffs and heart monitors, to automatically send health data to their doctor over a cellular network. Although many patients currently make daily efforts to manage their chronic health conditions, remote monitoring ensures that nobody really forgets to take a measurement.</p>
                    <h3 className="title-h3">All RPM Treatment Aligns With EHR</h3>
                    <p className="lg:mb-4 mb-4">Health vital signs, patient demographics, reporting, and clinical activity are all linked in almost real time to the industry-leading EHR connection capabilities. You may manage all of your data from a single access point.</p>
                    <h3 className="title-h3">Basic RPM</h3>
                    <p className="lg:mb-0">You don&rsquo;t have to be concerned about your patient&rsquo;s age, level of tech proficiency, or ability to pay for an RPM program while booking our remote patient monitoring service. We provide the ideal patient monitoring service to people in every area. Simplify your health!</p>
                </section>
                <section id="section-2" className="lg:mb-6 mb-6 section-scrollspy">
                    <h2 className="title-h2">H2 Title 1</h2>
                    <p className="lg:mb-4 mb-4">RPM enables doctors to get critical data in between different hours while empowering individuals to take charge of their health. At Caresync Health, we allow you to keep an eye on your patient&rsquo;s medical records and boost their involvement from the convenience of their own homes, offices, or other locations.</p>
                    <h3 className="title-h3">A Latest Approach To Improving The Overall Health</h3>
                    <p className="lg:mb-4 mb-4">RPM service supports healthcare professionals in providing treatment for their patients outside of the conventional office environment. Patients utilize at-home linked equipment, such as blood pressure cuffs and heart monitors, to automatically send health data to their doctor over a cellular network. Although many patients currently make daily efforts to manage their chronic health conditions, remote monitoring ensures that nobody really forgets to take a measurement.</p>
                    <h3 className="title-h3">All RPM Treatment Aligns With EHR</h3>
                    <p className="lg:mb-4 mb-4">Health vital signs, patient demographics, reporting, and clinical activity are all linked in almost real time to the industry-leading EHR connection capabilities. You may manage all of your data from a single access point.</p>
                    <h3 className="title-h3">Basic RPM</h3>
                    <p className="lg:mb-0">You don&rsquo;t have to be concerned about your patient&rsquo;s age, level of tech proficiency, or ability to pay for an RPM program while booking our remote patient monitoring service. We provide the ideal patient monitoring service to people in every area. Simplify your health!</p>
                </section>
                <section id="section-3" className="lg:mb-6 mb-6 section-scrollspy">
                    <h2 className="title-h2">H2 Title 2</h2>
                    <p className="lg:mb-4 mb-4">RPM enables doctors to get critical data in between different hours while empowering individuals to take charge of their health. At Caresync Health, we allow you to keep an eye on your patient&rsquo;s medical records and boost their involvement from the convenience of their own homes, offices, or other locations.</p>
                    <h3 className="title-h3">A Latest Approach To Improving The Overall Health</h3>
                    <p className="lg:mb-4 mb-4">RPM service supports healthcare professionals in providing treatment for their patients outside of the conventional office environment. Patients utilize at-home linked equipment, such as blood pressure cuffs and heart monitors, to automatically send health data to their doctor over a cellular network. Although many patients currently make daily efforts to manage their chronic health conditions, remote monitoring ensures that nobody really forgets to take a measurement.</p>
                    <h3 className="title-h3">All RPM Treatment Aligns With EHR</h3>
                    <p className="lg:mb-4 mb-4">Health vital signs, patient demographics, reporting, and clinical activity are all linked in almost real time to the industry-leading EHR connection capabilities. You may manage all of your data from a single access point.</p>
                    <h3 className="title-h3">Basic RPM</h3>
                    <p className="lg:mb-0">You don&rsquo;t have to be concerned about your patient&rsquo;s age, level of tech proficiency, or ability to pay for an RPM program while booking our remote patient monitoring service. We provide the ideal patient monitoring service to people in every area. Simplify your health!</p>
                </section>
                <section id="section-4" className="lg:mb-6 mb-6 section-scrollspy">
                    <h3 className="title-h3">H3 Title 3</h3>
                    <p className="lg:mb-4 mb-4">RPM enables doctors to get critical data in between different hours while empowering individuals to take charge of their health. At Caresync Health, we allow you to keep an eye on your patient&rsquo;s medical records and boost their involvement from the convenience of their own homes, offices, or other locations.</p>
                    <h3 className="title-h3">A Latest Approach To Improving The Overall Health</h3>
                    <p className="lg:mb-4 mb-4">RPM service supports healthcare professionals in providing treatment for their patients outside of the conventional office environment. Patients utilize at-home linked equipment, such as blood pressure cuffs and heart monitors, to automatically send health data to their doctor over a cellular network. Although many patients currently make daily efforts to manage their chronic health conditions, remote monitoring ensures that nobody really forgets to take a measurement.</p>
                    <h3 className="title-h3">All RPM Treatment Aligns With EHR</h3>
                    <p className="lg:mb-4 mb-4">Health vital signs, patient demographics, reporting, and clinical activity are all linked in almost real time to the industry-leading EHR connection capabilities. You may manage all of your data from a single access point.</p>
                    <h3 className="title-h3">Basic RPM</h3>
                    <p className="lg:mb-0">You don&rsquo;t have to be concerned about your patient&rsquo;s age, level of tech proficiency, or ability to pay for an RPM program while booking our remote patient monitoring service. We provide the ideal patient monitoring service to people in every area. Simplify your health!</p>
                </section>
                <section id="section-5" className="lg:mb-6 mb-6 section-scrollspy">
                    <h3 className="title-h3">H3 Title 4</h3>
                    <p className="lg:mb-4 mb-4">RPM enables doctors to get critical data in between different hours while empowering individuals to take charge of their health. At Caresync Health, we allow you to keep an eye on your patient&rsquo;s medical records and boost their involvement from the convenience of their own homes, offices, or other locations.</p>
                    <h3 className="title-h3">A Latest Approach To Improving The Overall Health</h3>
                    <p className="lg:mb-4 mb-4">RPM service supports healthcare professionals in providing treatment for their patients outside of the conventional office environment. Patients utilize at-home linked equipment, such as blood pressure cuffs and heart monitors, to automatically send health data to their doctor over a cellular network. Although many patients currently make daily efforts to manage their chronic health conditions, remote monitoring ensures that nobody really forgets to take a measurement.</p>
                    <h3 className="title-h3">All RPM Treatment Aligns With EHR</h3>
                    <p className="lg:mb-4 mb-4">Health vital signs, patient demographics, reporting, and clinical activity are all linked in almost real time to the industry-leading EHR connection capabilities. You may manage all of your data from a single access point.</p>
                    <h3 className="title-h3">Basic RPM</h3>
                    <p className="lg:mb-0">You don&rsquo;t have to be concerned about your patient&rsquo;s age, level of tech proficiency, or ability to pay for an RPM program while booking our remote patient monitoring service. We provide the ideal patient monitoring service to people in every area. Simplify your health!</p>
                </section>
                <section id="section-6" className="lg:mb-6 mb-6 section-scrollspy">
                    <h2 className="title-h2">H2 Title 5</h2>
                    <p className="lg:mb-4 mb-4">RPM enables doctors to get critical data in between different hours while empowering individuals to take charge of their health. At Caresync Health, we allow you to keep an eye on your patient&rsquo;s medical records and boost their involvement from the convenience of their own homes, offices, or other locations.</p>
                    <h3 className="title-h3">A Latest Approach To Improving The Overall Health</h3>
                    <p className="lg:mb-4 mb-4">RPM service supports healthcare professionals in providing treatment for their patients outside of the conventional office environment. Patients utilize at-home linked equipment, such as blood pressure cuffs and heart monitors, to automatically send health data to their doctor over a cellular network. Although many patients currently make daily efforts to manage their chronic health conditions, remote monitoring ensures that nobody really forgets to take a measurement.</p>
                    <h3 className="title-h3">All RPM Treatment Aligns With EHR</h3>
                    <p className="lg:mb-4 mb-4">Health vital signs, patient demographics, reporting, and clinical activity are all linked in almost real time to the industry-leading EHR connection capabilities. You may manage all of your data from a single access point.</p>
                    <h3 className="title-h3">Basic RPM</h3>
                    <p className="lg:mb-0">You don&rsquo;t have to be concerned about your patient&rsquo;s age, level of tech proficiency, or ability to pay for an RPM program while booking our remote patient monitoring service. We provide the ideal patient monitoring service to people in every area. Simplify your health!</p>
                </section>
            </div>
        </div>
        
        <div className="flex flex-col lg:gap-6 gap-0 max-w-7xl w-full mx-auto relative px-5 lg:px-0 lg:pb-20 pb-8 products-services-links">
            <div className={manrope.className}><h2 className="title-h2 text-center mb-3 lg:w-9/12 mx-auto">Additional products to support your employees</h2></div>
            <ul>
                <li>
                    <Link href={''} className="flex justify-between link block text-center lg:text-left">
                        <span>Behavioral Health for Health Plans</span>
                        <AiOutlineArrowRight className="self-center icon" />
                    </Link>
                </li>
                <li>
                    <hr className="border-t-0 bg-[#02C088] h-[2px] my-4" />
                </li>
                <li>
                    <Link href={''} className="flex justify-between link block text-center lg:text-left">
                        <span>Everyday & Urgent Care for Health Plans</span>
                        <AiOutlineArrowRight className="self-center icon" />
                    </Link>
                </li>
                <li>
                    <hr className="border-t-0 bg-[#02C088] h-[2px] my-4" />
                </li>
                <li>
                    <Link href={''} className="flex justify-between link block text-center lg:text-left">
                        <span>Communities for Health Plans</span>
                        <AiOutlineArrowRight className="self-center icon" />
                    </Link>
                </li>
            </ul>
        </div>
        
    </main>
    );
}