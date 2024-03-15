import React, { useEffect, useState } from 'react'
import SmoothScrolling from '../SmoothScroll'

const Template = (props) => {   
    const [mountedState, setMounted] = useState("")
    const [showChildren, setShowChildren] = useState(false)

    useEffect(() => {
        setMounted("mounting")
        setTimeout(() => {
            setMounted("mounted")
        }, 650)
        setTimeout(() => {
            setShowChildren(true)
        }, 1300)
    }, [])

    const children = (
        showChildren
        ?
        props?.children
        :
        <div className={`template ${mountedState === "mounted" ? "mounted" : ""} `}>
            <div className={`tempalteMain ${mountedState ? "mounting" : ""}`} />
            <div className={`tempalteSecond ${mountedState ? "mounting" : ""}`} />            
        </div>
    )

    return ( 
        (props?.smoothScrolling === false)
        ?
        children
        :
        <SmoothScrolling>
            {children}
        </SmoothScrolling>
    )
}

export default Template
