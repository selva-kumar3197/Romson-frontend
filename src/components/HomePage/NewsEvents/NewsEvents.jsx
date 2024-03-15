import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';

function NewsEvents() {
    const [openLocation, setOpenLocation] = useState(false)

    const styleSVG =
        <svg width="248" height="248" viewBox="0 0 248 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="124" y="124" width="124" height="62" transform="rotate(180 124 124)" fill="#AAEFDF" />
            <path d="M62 0C27.7583 0 0 27.7583 0 62L124 62C124 27.7583 96.2417 0 62 0Z" fill="#AAEFDF" />
            <path d="M248 9.78947C248 4.3829 243.617 0 238.211 0L124 0L124 124L248 124V9.78947Z" fill="#006C68" />
            <path d="M124 248H9.78947C4.3829 248 0 243.617 0 238.211L0 124L124 124L124 248Z" fill="#AAEFDF" />
            <path d="M248 124L124 124L124 248H238.211C243.617 248 248 243.617 248 238.211V124Z" fill="#AAEFDF" />
            <path d="M124 124C124 140.284 127.207 156.408 133.439 171.453C139.671 186.497 148.804 200.167 160.319 211.681C171.833 223.196 185.503 232.329 200.547 238.561C212.572 243.542 225.286 246.59 238.221 247.614C243.61 248.04 248 243.617 248 238.211L248 124H124Z" fill="#006C68" />
        </svg>

    const hospitalInfo = [
        {
            date: "May 23rd, 2023 To May 25th, 2023",
            name: 'Hospitalar Show 2023',
            address: 'Sao Paulo Expo Exhibition & Convention Center,Booth No. B-201, Blue Hall, Brazil.'
        },
        {
            date: "May 23rd, 2023 To May 25th, 2023",
            name: 'Hospitalar Show 2023',
            address: 'Sao Paulo Expo Exhibition & Convention Center,Booth No. B-201, Blue Hall, Brazil.'
        },
        {
            date: "May 23rd, 2023 To May 25th, 2023",
            name: 'Hospitalar Show 2023',
            address: 'Sao Paulo Expo Exhibition & Convention Center,Booth No. B-201, Blue Hall, Brazil.'
        },
        {
            date: "May 23rd, 2023 To May 25th, 2023",
            name: 'Hospitalar Show 2023',
            address: 'Sao Paulo Expo Exhibition & Convention Center,Booth No. B-201, Blue Hall, Brazil.'
        }
    ]
    return (
        <div className='newsEvents_MainContainer'>
            <div className='newsEvents_TopTextConatiner'>
                <div>
                    <Slide left>
                    <p className='newsEvents_MainTitle'>
                        News & Events
                    </p>
                    </Slide>
                    <Slide bottom>
                    <p className='newsEvents_MainDescription'>Connecting You to Current News and Upcoming Events</p>
                    </Slide>
                </div>
                <div className='newsEvents_TopBarButton' onClick={() => { setOpenLocation(!openLocation) }}>
                    <div className='flex gap-3 items-center justify-between'>
                        India
                        {!openLocation ? <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5397 0.728323C15.3938 0.584112 15.2205 0.469713 15.0298 0.391662C14.8391 0.313611 14.6346 0.273438 14.4282 0.273438C14.2217 0.273438 14.0173 0.313611 13.8266 0.391662C13.6359 0.469713 13.4626 0.584112 13.3167 0.728323L8.51241 5.47189C8.41418 5.56887 8.28098 5.62334 8.14208 5.62334C8.00319 5.62334 7.86998 5.56887 7.77176 5.47189L2.96852 0.728323C2.67387 0.437196 2.27419 0.273589 1.85739 0.273492C1.4406 0.273395 1.04083 0.436816 0.746044 0.727805C0.451255 1.01879 0.28559 1.41351 0.285492 1.82513C0.285394 2.23675 0.450871 2.63155 0.74552 2.92267L5.5498 7.66727C5.89028 8.00356 6.2945 8.27031 6.73938 8.45231C7.18425 8.63431 7.66107 8.72798 8.14261 8.72798C8.62414 8.72798 9.10096 8.63431 9.54584 8.45231C9.99071 8.27031 10.3949 8.00356 10.7354 7.66727L15.5397 2.92267C15.8343 2.63165 15.9998 2.237 15.9998 1.8255C15.9998 1.414 15.8343 1.01934 15.5397 0.728323Z" fill="white" />
                        </svg> :
                            <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5397 8.27314C15.3938 8.41735 15.2205 8.53175 15.0298 8.6098C14.8391 8.68785 14.6346 8.72803 14.4282 8.72803C14.2217 8.72803 14.0173 8.68785 13.8266 8.6098C13.6359 8.53175 13.4626 8.41735 13.3167 8.27314L8.51241 3.52958C8.41418 3.4326 8.28098 3.37812 8.14208 3.37812C8.00319 3.37812 7.86998 3.4326 7.77176 3.52958L2.96852 8.27314C2.67387 8.56427 2.27419 8.72788 1.85739 8.72797C1.4406 8.72807 1.04083 8.56465 0.746044 8.27366C0.451255 7.98267 0.28559 7.58795 0.285492 7.17633C0.285394 6.76471 0.450871 6.36992 0.74552 6.07879L5.5498 1.33419C5.89028 0.997907 6.2945 0.73115 6.73938 0.549152C7.18425 0.367155 7.66107 0.273481 8.14261 0.273481C8.62414 0.273481 9.10096 0.367155 9.54584 0.549152C9.99071 0.73115 10.3949 0.997907 10.7354 1.33419L15.5397 6.07879C15.8343 6.36981 15.9998 6.76446 15.9998 7.17597C15.9998 7.58747 15.8343 7.98212 15.5397 8.27314Z" fill="white" />
                            </svg>
                        }
                    </div>


                    {openLocation &&
                        <div className='mt-[26px]'>
                            International
                        </div>
                    }
                </div>
            </div>
            <div className='newsEvents_bottomMainConatiner'>
                {hospitalInfo?.map((item, index) => (
                    <Slide bottom key={index}>
                    <div className='newsEvents_CardsContainer' key={index}>
                        <div className='newsEvents_CardsIconContainer'>
                            {React.cloneElement(styleSVG, {
                                style: { transform: `rotate(${90 * index}deg)` }
                            })}
                        </div>
                        <div className='newsEvents_CardsTextContainer'>
                            <p className='newsEvents_CardsTextDates'>
                                {item?.date}
                            </p>
                            <p className='newsEvents_CardsTextTitle'>
                                {item?.name}
                            </p>
                            <p className='newsEvents_CardsTextDescription'>
                                {item?.address}
                            </p>
                        </div>
                    </div>
                    </Slide>
                ))}

            </div>
        </div>
    )
}

export default NewsEvents