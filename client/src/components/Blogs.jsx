import React from "react";

const Blogs = () => {

    return (
        <div>
            <div className="bg-white pt-5 py-5" id="blogs">
                <div className="container-fluid blogs w-75 my-5">
                    <div className="row g-3 h-100">
                        <div className="col-4 pb-3">
                            <div className="text-start rounded-4 p-4 h-100" id="blog01">
                                <h4 className="semibold text-white">Our Story</h4>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row g-3 h-100">
                                <div className="col-6">
                                    <div className="text-start rounded-4 p-4 h-100" id="blog02">
                                        <h4 className="semibold text-white">Coco Jam in Suman</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-start rounded-4 p-4 h-100" id="blog03">
                                        <h4 className="semibold text-white">Coconut-Pineapple Jam</h4>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="text-start rounded-4 p-4 h-100" id="blog04">
                                        <h4 className="semibold text-white">Get to know our farmers</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;