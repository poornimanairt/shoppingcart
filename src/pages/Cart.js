import { Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
    const classes = useStyles();
    const { cart } = useSelector((state) => state.ord);
    const dispatch = useDispatch();
    const handleRemove = (e, ind) => {
        const updCart = cart;
        updCart.splice(ind, 1);
        dispatch({ type: "CHANGE_CART", cart: updCart });
        toast.success("Item Removed from Cart");
    };

    return cart.length > 0 ? (
        <Grid
            container
            direction="column"
            justifyContent="center"
            sx={{ mt: 2 }}
        >
            {cart.map((item, ind) => (
                <CartItem
                    {...item}
                    key={`key-${ind}`}
                    onClick={(e) => handleRemove(e, ind)}
                />
            ))}
        </Grid>
    ) : (
        <h1>No Items in Cart</h1>
    );
};

export default Cart;

const useStyles = makeStyles((theme) => ({
    item: {
        justifyContent: "space-between",
    },
}));
