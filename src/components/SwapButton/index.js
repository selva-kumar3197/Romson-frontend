import React, { useState } from 'react'

const SwapButton = ({text, background1, background2, color1, color2, width, className=""}) => {

    return (
        <div 
            className={"inline-block rounded-[300px] overflow-hidden " +  className } 
            style={{width: width, background: background1}}
        >
            <div className={'text-[18px] font-medium new-header-shopnowbutton '}
                style={{
                    background:  `linear-gradient(to bottom, transparent 50%, ${background2} 50%)` ,
                    backgroundSize: `100% 200%`
                }}  
            >
                <span className="newlink_parent newlink--custom newmain-nav__link flex">
                    <span className="newlink__inner">
                        <span className="newlink__default-text py-[8px] px-[20px]" style={{color: color1}}>{text}</span>
                        <span className="newlink__hover-text py-[8px] px-[20px]"  style={{color: color2}}>{text}</span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default SwapButton
