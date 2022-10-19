import React from "react";
import BestSellers from "./BestSellers";
import Blogs from "./Blogs";
import FlashDeal from "./FlashDeal";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

const Home = () => {

    return (
        <div>
            <NavBar />
            <Hero />
            <FlashDeal />
            <BestSellers />
            <Blogs />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Home;