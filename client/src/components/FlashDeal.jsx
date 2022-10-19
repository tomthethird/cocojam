import React, { useEffect, useState } from 'react'

const FlashDeal = () => {
    const [time, setTime] = useState("");

    const countdown = () => {
        const countDate = new Date("October 23, 2022 00:00:00").getTime()
        const now = new Date().getTime()
        const gap = countDate - now

        const second = 1000
        const minute = second * 60
        const hour = minute * 60

        const textHour = Math.floor(gap / hour)
        const textMinute = Math.floor((gap % hour) / minute)
        const textSecond = Math.floor((gap % minute) / second)

        setTime(`${textHour} : ${textMinute} : ${textSecond}`)
    }

    useEffect(() => {
        const timeOutId = setInterval(() => {
            countdown();
        }, 1000);
        return () => clearTimeout(timeOutId);
    });

    return (
        <div>
            <div className="bg-light">
                <div className="flashdeal">
                    <div className="row w-75 mx-auto pt-5 py-5">
                        <div className="col-xl-6 text-start d-flex align-items-center">
                            <h1 className="fw-bold text-primary-light me-4">Flash Deal</h1>
                            <h2>Ends in {time}</h2>
                        </div>
                        <div className="col-xl-6 text-end">
                        </div>
                    </div>
                    <div className="row w-75 mx-auto py-5 align-items-end">
                        <div className="col-xl-3 text-start">
                            <div className="bg-white shadow rounded-5 text-center p-4">
                                <img src={require('../assets/cocojam-6.jpg')} alt="cocojam" className="productImage" />
                                <h5 className="text-primary-light mb-0">Product name</h5>
                                <p className="mb-2">BRAND NAME</p>
                                <h3 className="text-primary fw-bold">P 100.00</h3>
                            </div>
                        </div>
                        <div className="col-xl-6"></div>
                        <div className="col-xl-3 text-end">
                        <h2 className="fw-bold text-primary mb-0 display-5">33% OFF</h2>
                            <button className="btn btn-primary rounded-pill text-white mt-4 semibold fs-5 py-2 px-5">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashDeal;