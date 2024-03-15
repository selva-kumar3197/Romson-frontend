import React, { useEffect, useRef, useState } from 'react'

const SlideText = (props) => {

    const textRef = useRef(null)
    
    const [gap, setGap] = useState()
    const [parentStyle, setParentStyle] = useState({
        position: "relative",
        overflow: "hidden",
    })
    
    const [childStyle, setChildStyle] = useState({
        position: "relative",
        display: "inline-block",
        marginRight: gap,
        top: 50,
        opacity: 0,
        transition: "all 1s ease-in-out",
    })

    useEffect(() => {
        setTimeout(() => {
            setChildStyle({...childStyle, top: 0, opacity: 1})
        }, 100 + (props?.index*10) + props?.delay)
    }, [])

    useEffect(() => {
        if(textRef?.current){
            setGap(textRef?.current?.offsetHeight / 4)
        }
    }, [textRef?.current])
    
    return (
        <span ref={textRef} style={parentStyle}>
            <span style={{...childStyle, marginRight: gap}}>{props?.children}</span>
        </span>
    )
}

export default SlideText
