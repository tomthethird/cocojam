import React, { useState } from "react";

const Hero = () => {
    const [formValue, setFormValue] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
    const name = "user"
    const message = "no massage"
    const { email } = formValue

    const onSubmitAccount = async (e) => {
        e.preventDefault()
        setIsSubmit(true)
        try {
            const body = { email, name, message }
            const response = await fetch(
                "https://api.ahglab.com/api:fXznCvvM/contact_us",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
            const parseRes = await response.json()

            if (parseRes.email === email) {
                setIsSuccess(true)
              }

        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <div className="bg-secondary-wash" id="hero">
                <div className="parallax d-flex align-items-center justify-content-center">
                    <div className="row w-75 mx-auto text-start">
                        <div className="col-xl-8">
                            <h1 className="display-3 fw-bold text-primary mb-4 me-4">Ultimate sweet tooth organic satisfaction</h1>
                            <h5>Your one-stop shop for all your coco-cravings.</h5>
                            <button className="btn btn-primary rounded-pill text-white mt-4 semibold fs-5 py-2 px-5">Explore selections</button>
                        </div>
                        <div className="col-xl-5"></div>
                    </div>
                </div>
            </div>

            <div className="bg-primary" id="hero-banner">
                <div className="d-flex justify-content-center py-2">
                    <div className="row w-75 mx-auto text-end align-items-center">
                        <div className="col-xl-6 text-light">
                            <h4 className="m-0">Sign up & <strong className="text-highlight">GET 5% OFF</strong> on your first checkout!</h4>
                        </div>
                        <div className="col-xl-6">

                        {isSuccess && isSubmit ? (<div className="mx-auto w-75 alert alert-success text-center m-2 shadow" role="alert">Sign up successful! Please check your email.</div>) : (
                            <form onSubmit={onSubmitAccount}>
                                <div className="row mx-auto align-items-center">
                                    <div className="col-xl-8 d-flex justify-content-start">
                                        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Email address" value={formValue.email} onChange={e => onChange(e)} />
                                    </div>
                                    <div className="col-xl-4 d-flex justify-content-start">
                                        <button className="btn btn-outline-highlight border-2 fs-5 rounded-pill semibold px-4">Sign up</button>
                                    </div>
                                </div>
                            </form>
                        )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;