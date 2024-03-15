import React from 'react'
import { Slide } from 'react-reveal'
// import AnimatedNumbers from "react-animated-numbers";
import dynamic from 'next/dynamic'
import SwapButton from '@/components/SwapButton'

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
    ssr: false
})

function Aboutsection() {
  return (
    <div>
      <div className='aboutsection_main'>
        <div className='aboutsection_textimagedivider'>
          <div>
            <div className='aboutsection_imagebackground block lg:hidden '>
              <img className='aboutsection_rightimage' src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/AboutSection/image+42.png" alt="aboutsectionImage" />
            </div>
          </div>
          <div className='pt-[2.25rem] px-[2.063rem] lg:pt-0 lg:px-0'>
            <Slide left delay={100}>
            <p className='aboutsection_titletext'>ABOUT US</p>
            </Slide>
            <Slide left delay={100}>
            <h2 className='aboutsection_headertext'>
              Pioneering Disposable Medical Devices Since 1952
            </h2>
            </Slide>
            <Slide right delay={100}>
            <p className='aboutsection_para'>
              Romsons is a trailblazer in the field of disposable medical devices, revolutionizing healthcare since 1952. With a commitment to innovation and quantity, we have been providing healthcare professionals with reliable and efficient solutions to meet their patient’s needs.
            </p>
            </Slide>
            <Slide right delay={100}>
              <SwapButton
                className={"mt-6 text-lg"}
                width={"214px"}
                text="Learn More"
                background1={"#006C68"}
                background2={"#fff"}
                color1={"#fff"}
                color2={"#006C68"}
              />
            </Slide>
          </div>
          <div>
            <div className='aboutsection_imagebackground hidden lg:block'>
              <img className='aboutsection_rightimage' src="https://romsons.s3.ap-south-1.amazonaws.com/site-assets/homepage/AboutSection/image+42.png" alt="aboutsectionImage" />
            </div>
          </div>
        </div>
        <div>
          <div className='aboutsection_bottomcontainer'>
            <div>
            <Slide left>
              <h2 className='aboutsection_bottomtitle'>Why Romsons?</h2>
              </Slide>
            </div>
            <div className='aboutsection_countscontainer'>
              <div className='aboutsection_countsmain1'>
                <Slide top>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <mask id="mask0_2235_2239" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40">
                      <rect x="0.5" width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2235_2239)">
                      <path d="M20.5 36.6667C18.1667 36.6667 15.9861 36.2292 13.9583 35.3542C11.9306 34.4792 10.1667 33.2917 8.66668 31.7917C7.16668 30.2917 5.98612 28.5209 5.12501 26.4792C4.2639 24.4375 3.83334 22.25 3.83334 19.9167C3.83334 17.5834 4.2639 15.4098 5.12501 13.3959C5.98612 11.382 7.16668 9.62504 8.66668 8.12504C10.1667 6.62504 11.9306 5.45143 13.9583 4.60421C15.9861 3.75699 18.1667 3.33337 20.5 3.33337C22.8333 3.33337 25.0139 3.75699 27.0417 4.60421C29.0695 5.45143 30.8333 6.62504 32.3333 8.12504C33.8333 9.62504 35.0139 11.382 35.875 13.3959C36.7361 15.4098 37.1667 17.5834 37.1667 19.9167C37.1667 22.25 36.7361 24.4375 35.875 26.4792C35.0139 28.5209 33.8333 30.2917 32.3333 31.7917C30.8333 33.2917 29.0695 34.4792 27.0417 35.3542C25.0139 36.2292 22.8333 36.6667 20.5 36.6667ZM20.5 34.25C21.4722 33.25 22.2847 32.1042 22.9375 30.8125C23.5903 29.5209 24.125 27.9862 24.5417 26.2084H16.5C16.8889 27.875 17.4097 29.375 18.0625 30.7084C18.7153 32.0417 19.5278 33.2223 20.5 34.25ZM16.9583 33.75C16.2639 32.6945 15.6667 31.5556 15.1667 30.3334C14.6667 29.1112 14.25 27.7362 13.9167 26.2084H7.66668C8.72223 28.1806 9.94445 29.7292 11.3333 30.8542C12.7222 31.9792 14.5972 32.9445 16.9583 33.75ZM24.0833 33.7084C26.0833 33.0695 27.882 32.1112 29.4792 30.8334C31.0764 29.5556 32.3611 28.0139 33.3333 26.2084H27.125C26.7639 27.7084 26.3403 29.0695 25.8542 30.2917C25.3681 31.5139 24.7778 32.6528 24.0833 33.7084ZM6.83334 23.7084H13.4583C13.375 22.9584 13.3264 22.2848 13.3125 21.6875C13.2986 21.0903 13.2917 20.5 13.2917 19.9167C13.2917 19.2223 13.3056 18.6042 13.3333 18.0625C13.3611 17.5209 13.4167 16.9167 13.5 16.25H6.83334C6.6389 16.9167 6.50695 17.5139 6.43751 18.0417C6.36807 18.5695 6.33334 19.1945 6.33334 19.9167C6.33334 20.6389 6.36807 21.2848 6.43751 21.8542C6.50695 22.4237 6.6389 23.0417 6.83334 23.7084ZM16.0417 23.7084H25C25.1111 22.8473 25.1806 22.1459 25.2083 21.6042C25.2361 21.0625 25.25 20.5 25.25 19.9167C25.25 19.3612 25.2361 18.8264 25.2083 18.3125C25.1806 17.7987 25.1111 17.1112 25 16.25H16.0417C15.9306 17.1112 15.8611 17.7987 15.8333 18.3125C15.8056 18.8264 15.7917 19.3612 15.7917 19.9167C15.7917 20.5 15.8056 21.0625 15.8333 21.6042C15.8611 22.1459 15.9306 22.8473 16.0417 23.7084ZM27.5 23.7084H34.1667C34.3611 23.0417 34.4931 22.4237 34.5625 21.8542C34.632 21.2848 34.6667 20.6389 34.6667 19.9167C34.6667 19.1945 34.632 18.5695 34.5625 18.0417C34.4931 17.5139 34.3611 16.9167 34.1667 16.25H27.5417C27.625 17.2223 27.6806 17.9653 27.7083 18.4792C27.7361 18.9931 27.75 19.4723 27.75 19.9167C27.75 20.5278 27.7292 21.1042 27.6875 21.6459C27.6458 22.1875 27.5833 22.875 27.5 23.7084ZM27.0833 13.75H33.3333C32.4167 11.8334 31.1597 10.2362 29.5625 8.95837C27.9653 7.6806 26.125 6.77782 24.0417 6.25004C24.7361 7.27782 25.3264 8.38893 25.8125 9.58337C26.2986 10.7778 26.7222 12.1667 27.0833 13.75ZM16.5 13.75H24.5833C24.2778 12.2778 23.7639 10.8542 23.0417 9.47921C22.3195 8.10421 21.4722 6.88893 20.5 5.83337C19.6111 6.58337 18.8611 7.56949 18.25 8.79171C17.6389 10.0139 17.0556 11.6667 16.5 13.75ZM7.66668 13.75H13.9583C14.2639 12.25 14.6528 10.9098 15.125 9.72921C15.5972 8.54865 16.1945 7.40282 16.9167 6.29171C14.8333 6.81948 13.0139 7.70837 11.4583 8.95837C9.90279 10.2084 8.6389 11.8056 7.66668 13.75Z" fill="#006C68" />
                    </g>
                  </svg>
                </div>
                </Slide>
                <p className='aboutsection_countstext1'>
                  <span className="flex">
                  <AnimatedNumbers
                    includeComma
                    locale={"en-IN"}
                    className={""}
                    transitions={(index) => ({ type: "spring", duration: index + 0.1, })}
                    animateToNumber={80}
                  />+
                  </span>
                </p>
                <Slide bottom duration={2000}>
                <p className='aboutsection_countsmaintext'>
                  COUNTRIES Served
                </p>
                </Slide>
              </div>
              <div className='aboutsection_countsmain2'>
                <Slide top>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <mask id="mask0_2235_2246" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                      <rect width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2235_2246)">
                      <path d="M5 36.6667V25.4167H10V18.75H18.75V14.5834H13.75V3.33337H26.25V14.5834H21.25V18.75H30V25.4167H35V36.6667H22.5V25.4167H27.5V21.25H12.5V25.4167H17.5V36.6667H5ZM16.25 12.0834H23.75V5.83337H16.25V12.0834ZM7.5 34.1667H15V27.9167H7.5V34.1667ZM25 34.1667H32.5V27.9167H25V34.1667Z" fill="#006C68" />
                    </g>
                  </svg>
                </div>
                </Slide>
                <p className='aboutsection_countstext1'>
                <span className="flex">
                  <AnimatedNumbers
                    includeComma
                    locale={"en-IN"}
                    className={""}
                    transitions={(index) => ({ type: "spring", duration: index + 0.1, })}
                    animateToNumber={1500}
                  />+
                  </span>
                </p>
                <Slide bottom duration={2000}>
                <p className='aboutsection_countsmaintext'>
                  DISTRIBUTOR NETWOK
                </p>
                </Slide>
              </div>
              <div className='aboutsection_countsmain3'>
                <Slide top>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                    <mask id="mask0_2235_2252" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40">
                      <rect x="0.5" width="40" height="40" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2235_2252)">
                      <path d="M11.375 18.0834L20.5417 3.33337L29.7083 18.0834H11.375ZM29.9167 36.6667C27.8611 36.6667 26.1389 35.9723 24.75 34.5834C23.3611 33.1945 22.6667 31.4723 22.6667 29.4167C22.6667 27.3612 23.3611 25.6389 24.75 24.25C26.1389 22.8612 27.8611 22.1667 29.9167 22.1667C31.9722 22.1667 33.6944 22.8612 35.0833 24.25C36.4722 25.6389 37.1667 27.3612 37.1667 29.4167C37.1667 31.4723 36.4722 33.1945 35.0833 34.5834C33.6944 35.9723 31.9722 36.6667 29.9167 36.6667ZM5.5 35.625V22.9584H18.1667V35.625H5.5ZM29.9202 34.1667C31.2512 34.1667 32.375 33.7072 33.2917 32.7882C34.2083 31.8692 34.6667 30.7442 34.6667 29.4132C34.6667 28.0822 34.2072 26.9584 33.2882 26.0417C32.3691 25.125 31.2441 24.6667 29.9131 24.6667C28.5822 24.6667 27.4583 25.1262 26.5417 26.0452C25.625 26.9642 25.1667 28.0892 25.1667 29.4202C25.1667 30.7512 25.6262 31.875 26.5452 32.7917C27.4642 33.7084 28.5892 34.1667 29.9202 34.1667ZM8 33.125H15.6667V25.4584H8V33.125ZM15.875 15.5834H25.2083L20.5417 8.04171L15.875 15.5834Z" fill="#006C68" />
                    </g>
                  </svg>
                </div>
                </Slide>
                <p className='aboutsection_countstext1'>
                  <span className="flex">
                    <AnimatedNumbers
                      includeComma
                      locale={"en-IN"}
                      transitions={(index) => ({ type: "spring", duration: index + 0.1, })}
                      animateToNumber={200}
                    />+
                  </span>
                </p>
                <Slide bottom duration={2000}>
                <p className='aboutsection_countsmaintext'>
                  Diverse Products
                </p>
                </Slide>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutsection