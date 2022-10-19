import React, { useState } from "react";

const SignUp = () => {
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
            <div className="bg-secondary pt-5 py-5 text-white text-center">
                <h4 className="m-0">Sign up to discover amazing deals!</h4>
                <h3 className="m-0 py-2"><strong className="text-highlight">GET 5% OFF</strong> on your first checkout!</h3>

                {isSuccess && isSubmit ? (<div className="mx-auto w-25 alert alert-success text-center m-4 shadow" role="alert">Sign up successful! Please check your email.</div>) : (
                <form onSubmit={onSubmitAccount} >
                    <div className="row mx-auto w-75 align-items-center d-flex justify-content-center mt-3">
                        <div className="col-xl-5 d-flex justify-content-center">
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Email address" value={formValue.email} onChange={e => onChange(e)} />
                        </div>
                        <div className="col-xl-2 d-flex justify-content-center">
                            <button className="btn btn-outline-highlight border-2 fs-5 rounded-pill semibold w-100">Sign up</button>
                        </div>
                    </div>
                </form>
                )}
            </div>

        </div>
    )
}

export default SignUp;