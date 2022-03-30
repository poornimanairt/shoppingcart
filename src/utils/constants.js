import shoe1 from "../images/shoe1.jpg";
import shoe3 from "../images/shoe3.jpg";
import shoe4 from "../images/shoe4.jpg";
import shoe5 from "../images/shoe5.jpg";
import bag1 from "../images/bag1.jpg";
import bag2 from "../images/bag2.jpg";
import bag3 from "../images/bag3.png";
import bag4 from "../images/bag4.jpg";

export const UI = {
    drawerWidth: 210,
    ordersWidth: 1250,
    breakdowns: {
        labelBreakPoints: { xs: 12, md: 4 },
        inputBreakPoints: { xs: 12, md: 8 },
    },
};

export const products = [
    {
        id: 1,
        name: "Reebok Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 400,
        img: shoe1,
    },
    {
        id: 2,
        name: "Nike Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 200,
        img: shoe5,
    },
    {
        id: 3,
        name: "Addidas Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 100,
        img: shoe3,
    },
    {
        id: 4,
        name: "Addidas Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 500,
        img: shoe4,
    },
];

export const bags = [
    {
        id: 1,
        name: "Reebok Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 400,
        img: bag1,
    },
    {
        id: 2,
        name: "Nike Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 150,
        img: bag2,
    },
    {
        id: 3,
        name: "Addidas Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 200,
        img: bag3,
    },
    {
        id: 4,
        name: "Addidas Shoes",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price: 400,
        img: bag4,
    },
];
