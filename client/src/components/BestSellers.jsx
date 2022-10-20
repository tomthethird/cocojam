import React, { useState, useEffect } from "react";

const BestSellers = () => {
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/qs/6350a7ab0e6a79321e2e34ac/`, {
                method: 'GET',
                headers: { 'accept': 'application/json' }
            });
            const parseData = await response.json();
            console.log(parseData)
            setProduct(parseData)

        } catch (error) {
            console.error(error)
        }
    }

    const discountRate = (a, b) => {
        const rate = ((b-a)/b)*100
        return Math.round(rate)
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div>
            <div className="bg-secondary-wash pt-5 py-5 ">
                <div className="row main-container">
                    <div className="row w-75 mx-auto">
                        <div className="col-xl-12 text-center pb-5">
                            <h1 className="fw-bold text-primary-light">Best Sellers</h1>
                        </div>
                    </div>
                    <div className="col-xl-12 container p-0">
                        <div className="d-flex flex-md-nowrap flex-wrap pb-4 justify-content-center">
                            <div className="row justify-content-center m-0 p-0">
                                <div className="col-xl-10 d-flex flex-wrap flex-md-nowrap position-relative m-0 p-0">

                                    {product.map((product) => {
                                        return <div className="bg-white snip-card shadow rounded-5 p-5 m-3 align-items-end">
                                            <div>
                                                {product.sale ? (<span class="sale badge px-3 py-2 rounded-pill bg-danger">{discountRate(product.discountPrice,product.price)}% OFF</span>) : (<></>)} 
                                                <img src={`${product.photo}`} alt="cocojam" className="productImage" />
                                            </div>
                                            <h5 className="text-primary-light mb-0">{product.product}</h5>
                                            <p className="mb-2">{product.brand}</p>
                                            {product.sale ? (<h3><strong className="text-primary fw-bold">P {product.discountPrice}</strong> <em className="text-decoration-line-through text-muted small">P {product.price}</em></h3>)
                                            : (<h3 className="text-primary fw-bold">P {product.price}</h3>)}
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>
                        <div className="row w-75 mx-auto">
                            <div className="col-xl-12 text-center pt-5">
                                <button className="btn btn-primary rounded-pill text-white mt-4 semibold fs-5 py-2 px-5">Discover All Best Sellers</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BestSellers;