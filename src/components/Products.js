import React from "react";
import ProductItem from "./ProductItem";
import { products, bags } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Products = () => {
    const dispatch = useDispatch();
    const { cart, count } = useSelector((state) => state.ord);
    const classes = useStyles();

    const handleAddtoCart = (e, prod) => {
        const updCart = cart;
        let matchInd = updCart.findIndex((itm) => itm.id === prod.id);
        if (matchInd >= 0) {
            const qty = updCart[matchInd].quantity + 1;
            updCart[matchInd] = {
                ...updCart[matchInd],
                quantity: qty,
                total_price: prod.price * qty,
            };
        } else {
            updCart.push({
                ...prod,
                quantity: 1,
                total_price: prod.price,
            });
        }
        dispatch({ type: "CHANGE_CART", cart: updCart, count: count + 1 });
        toast.success("Item Added to Cart");
    };
    return (
        <>
            <Typography variant="h5" sx={{ ml: 1, mt: 1, fontWeight: 600 }}>
                Shoes
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.container}
            >
                {products.map((prod, ind) => (
                    <Grid item xs={12} sm={6} md={3} key={ind}>
                        <ProductItem
                            key={`prod-${prod.id}`}
                            {...prod}
                            onClick={(e) => handleAddtoCart(e, prod)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h5" sx={{ ml: 1, mt: 1, fontWeight: 600 }}>
                Bags
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.container}
            >
                {bags.map((prod, ind) => (
                    <Grid item xs={12} sm={6} md={3} key={ind}>
                        <ProductItem
                            key={`prod-${prod.id}`}
                            {...prod}
                            onClick={(e) => handleAddtoCart(e, prod)}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Products;

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 10,
    },
}));
