import React from "react";
import { makeStyles } from "@mui/styles";
import Banner from "../components/Banner";
import { Toolbar } from "@mui/material";
import Tiles from "../components/Tiles";
import Products from "../components/Products";

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar />
            <Banner />
            <Tiles />
            <Products />
        </>
    );
};

export default Home;

const useStyles = makeStyles((theme) => ({
    card: {
        width: 30,
    },
    btn: {
        color: "white",
        backgroundColor: "pink",
    },
    paper1: {
        marginTop: 24,
        padding: theme.spacing(2),
        textAlign: "left",
        color: "white",
        height: 90,
    },
    price: {
        fontWeight: 600,
        color: "pink",
    },
    img: {
        height: 40,
        float: "right",
    },
    titlebox: {
        height: 300,
        padding: 30,
        background: "#ffecf2",
        display: "flex",
        alignItems: "center",
        marginTop: 35,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        margin: 10,
        marginTop: 24,

        paddingLeft: theme.spacing(4.375),
    },
}));
