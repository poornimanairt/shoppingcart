import React from "react";
import { Routes as Switch } from "react-router-dom";
import Router from "../utils/Router";
import Footer from "./Footer";
import TopBar from "./TopBar";

const MainLayout = () => {
    return (
        <>
            <>
                <TopBar />

                <Router />
            </>
            <Footer />
        </>
    );
};

export default MainLayout;
