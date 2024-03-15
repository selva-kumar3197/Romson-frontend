import SwapButton from '@/components/SwapButton';
import React from 'react'
import Slide from 'react-reveal/Slide';

function Blog() {
    return (
        <div className='homeblog_main'>
            <div className='homeblog_Container'>
                <div className='flex justify-between items-center'>
                    <div>
                    <Slide left>
                        <h1 className='homeblog_titletext'>Blogs</h1>
                    </Slide>
                    <Slide right>
                        <p className='homeblog_paratext'>Explore the Latest Additions to Our Blog</p>
                    </Slide>
                    </div>
                    <Slide right>
                    <div className=' hidden lg:flex'>
                        <span className='relative'>
                            <svg className="absolute" onMouseOver={() => {console.log(this)}} style={{right: "32px", top: "47%" , zIndex:2}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="white">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9603 11.6423C15.18 11.862 15.18 12.2181 14.9603 12.4378L9.22541 18.1727C9.00573 18.3923 8.64963 18.3923 8.42996 18.1727L8.16476 17.9075C7.94508 17.6878 7.94508 17.3317 8.16476 17.112L13.2367 12.0401L8.16476 6.96812C7.94508 6.74844 7.94508 6.39234 8.16476 6.17267L8.42996 5.90747C8.64963 5.68779 9.00573 5.68779 9.22541 5.90747L14.9603 11.6423Z" fill="#fff" />
                            </svg>
                            <svg className="absolute" onMouseOver={() => {console.log(this)}} style={{right: "30px", top: "47%" , zIndex:2}} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9603 11.6423C15.18 11.862 15.18 12.2181 14.9603 12.4378L9.22541 18.1727C9.00573 18.3923 8.64963 18.3923 8.42996 18.1727L8.16476 17.9075C7.94508 17.6878 7.94508 17.3317 8.16476 17.112L13.2367 12.0401L8.16476 6.96812C7.94508 6.74844 7.94508 6.39234 8.16476 6.17267L8.42996 5.90747C8.64963 5.68779 9.00573 5.68779 9.22541 5.90747L14.9603 11.6423Z" fill="#006C68" />
                            </svg>
                            <SwapButton
                                className={"mt-6 text-lg "}
                                width={"254px"}
                                text="Explore More"
                                background1={"#006C68"}
                                background2={"#fff"}
                                color1={"#fff"}
                                color2={"#006C68"}
                            />
                        </span>
                        {/* Explore More
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4603 11.6423C15.68 11.862 15.68 12.2181 15.4603 12.4378L9.72541 18.1727C9.50573 18.3923 9.14963 18.3923 8.92996 18.1727L8.66476 17.9075C8.44508 17.6878 8.44508 17.3317 8.66476 17.112L13.7367 12.0401L8.66476 6.96812C8.44508 6.74844 8.44508 6.39234 8.66476 6.17267L8.92996 5.90747C9.14963 5.68779 9.50573 5.68779 9.72541 5.90747L15.4603 11.6423Z" fill="white" />
                        </svg> */}
                    </div>
                    </Slide>
                </div>
                <div className='homeblog_imageConatiner'>
                    <Slide bottom>
                    <div className='homeblog_leftimagediv'>
                        <div className='homeblog_leftimageinsidediv'>

                            <div className='homeblog_indicator'>
                                Facts
                            </div>
                            <div className='homeblog_leftimageinsidebottomdiv'>
                                <p className='homeblog_leftsideTitle'>
                                    Health & Hygiene
                                </p>
                                <p className='homeblog_leftsideDescription'>
                                    Did You Know? Worldwide, 5.3% of all deaths and 6.8% of all disability are caused by poor...
                                </p>
                                <p className='homeblog_leftsideReadmorebutton'>
                                    Read more
                                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.96028 6.64234C7.17996 6.86202 7.17996 7.21812 6.96028 7.43779L1.22541 13.1727C1.00573 13.3923 0.649631 13.3923 0.429956 13.1727L0.164756 12.9075C-0.0549187 12.6878 -0.0549187 12.3317 0.164756 12.112L5.23671 7.04007L0.164756 1.96812C-0.0549186 1.74844 -0.0549186 1.39234 0.164756 1.17267L0.429956 0.907467C0.649631 0.687792 1.00573 0.687792 1.22541 0.907467L6.96028 6.64234Z" fill="white" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    </Slide>
                    <div className='w-[50%] flex-col gap-[20px] hidden lg:flex'>
                        <Slide bottom>
                        <div className='homeblog_rightimagedivtop'>
                            <div className='homeblog_rightimageinsidediv'>
                                <div className='homeblog_rightimageinsidebottomdiv'>
                                    <div>
                                        <p className='homeblog_leftsideTitle'>
                                            Protection from pollution
                                        </p>
                                        <p className='homeblog_leftsideDescription'>
                                            If you don’t kill it, it will kill you’.
                                            Did you know? More than nine out of 10 of people...
                                        </p>
                                        <p className='homeblog_leftsideReadmorebutton'>
                                            Read more
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.96028 6.64234C7.17996 6.86202 7.17996 7.21812 6.96028 7.43779L1.22541 13.1727C1.00573 13.3923 0.649631 13.3923 0.429956 13.1727L0.164756 12.9075C-0.0549187 12.6878 -0.0549187 12.3317 0.164756 12.112L5.23671 7.04007L0.164756 1.96812C-0.0549186 1.74844 -0.0549186 1.39234 0.164756 1.17267L0.429956 0.907467C0.649631 0.687792 1.00573 0.687792 1.22541 0.907467L6.96028 6.64234Z" fill="white" />
                                            </svg>
                                        </p>
                                    </div>
                                    <div className='homeblog_indicator'>
                                        Protection
                                    </div>
                                </div>

                            </div>
                        </div>
                        </Slide>
                        <Slide bottom>
                        <div className='homeblog_rightimagedivbottom'>
                            <div className='homeblog_rightimageinsidediv'>
                                <div className='homeblog_rightimageinsidebottomdiv'>
                                    <div>
                                        <p className='homeblog_leftsideTitle'>
                                            Protection from pollution
                                        </p>
                                        <p className='homeblog_leftsideDescription'>
                                            If you don’t kill it, it will kill you’.
                                            Did you know? More than nine out of 10 of people...
                                        </p>
                                        <p className='homeblog_leftsideReadmorebutton'>
                                            Read more
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.96028 6.64234C7.17996 6.86202 7.17996 7.21812 6.96028 7.43779L1.22541 13.1727C1.00573 13.3923 0.649631 13.3923 0.429956 13.1727L0.164756 12.9075C-0.0549187 12.6878 -0.0549187 12.3317 0.164756 12.112L5.23671 7.04007L0.164756 1.96812C-0.0549186 1.74844 -0.0549186 1.39234 0.164756 1.17267L0.429956 0.907467C0.649631 0.687792 1.00573 0.687792 1.22541 0.907467L6.96028 6.64234Z" fill="white" />
                                            </svg>
                                        </p>
                                    </div>
                                    <div className='homeblog_indicator'>
                                        Protection
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    </div>
                </div>
                <div className='homeblog_buttontext1'>
                        Explore More
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.4603 11.6423C15.68 11.862 15.68 12.2181 15.4603 12.4378L9.72541 18.1727C9.50573 18.3923 9.14963 18.3923 8.92996 18.1727L8.66476 17.9075C8.44508 17.6878 8.44508 17.3317 8.66476 17.112L13.7367 12.0401L8.66476 6.96812C8.44508 6.74844 8.44508 6.39234 8.66476 6.17267L8.92996 5.90747C9.14963 5.68779 9.50573 5.68779 9.72541 5.90747L15.4603 11.6423Z" fill="white" />
                        </svg>
                    </div>
            </div>
        </div>
    )
}

export default Blog