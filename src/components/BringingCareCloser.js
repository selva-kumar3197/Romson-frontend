import { useRouter } from 'next/router'
import React from 'react'
import Slide from 'react-reveal/Slide';
import SwapButton from './SwapButton';
import SlideSentence from './SlideSentence';

const BringingCareCloser = () => {
  const router = useRouter()
  const language = require(`../locales/${router.locale || router.defaultLocale}/lang.JSON`)

  return (
    <div className="productList_section4">
        <div className="productList_section4_text">
            <div className="productList_section4_text_heading"><SlideSentence>{language.BringingCareText1}</SlideSentence></div>
            <div className="productList_section4_text_description"><SlideSentence>{language.BringingCareText2}</SlideSentence></div>
            <Slide bottom>
            <div className="productList_section4_shop">
              <SwapButton
                className={"mt-6 text-lg "}
                width={"254px"}
                text={language.ShopNow}
                background1={"#006C68"}
                background2={"#fff"}
                color1={"#fff"}
                color2={"#006C68"}
              />
                {/* <button className={`productList_section4_shop_btn`}>{language.ShopNow}</button> */}
            </div>
            </Slide>
        </div>
    </div>
  )
}

export default BringingCareCloser
