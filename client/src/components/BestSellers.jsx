import React, { useState, useEffect } from "react";

const BestSellers = () => {
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/get`, {
            method: 'GET',
            headers: { 'accept': 'application/json'}
          });
          const parseData = await response.json();
          console.log(parseData)
          setProduct(parseData)

        } catch (error) {
          console.error(error)
        }
      }
    
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div>
            <div className="bg-secondary-wash pt-5 py-5">
                <div className="row w-75 mx-auto">
                    <div className="col-xl-12 text-center pb-5">
                        <h1 className="fw-bold text-primary-light">Best Sellers</h1>
                    </div>
                </div>

                <div className=" container">
                    <div className="row g-3">
                        <div className="col-md-8 col-xl-12 d-flex justify-content-center m-0 flex-wrap position-relative">
                        
                        {product.map((product) => {
                            return <div className="bg-white shadow rounded-5 text-center p-4 m-3">
                                <img src={`http://localhost:8000/${product.photo}`} alt="cocojam" className="productImage" />
                                <h5 className="text-primary-light mb-0">{product.product}</h5>
                                <p className="mb-2">{product.brand}</p>
                                <h3 className="text-primary fw-bold">P {product.price}</h3>
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
    )
}

export default BestSellers;