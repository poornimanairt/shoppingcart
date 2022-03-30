import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import shoe1 from "../images/shoe1.jpg";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const ProductItem = (props) => {
    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                height="180"
                image={props.img}
                alt="green iguana"
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                    <br />
                </Typography>
                <Typography variant="h5">${props.price}</Typography>
            </CardContent>

            <CardActions sx={{ display: "flex", alignItems: "center" }}>
                <Button
                    size="large"
                    variant="contained"
                    sx={{
                        background: "black",
                        color: "white",
                        m: "auto",
                        p: 1,
                        textTransform: "none",
                    }}
                    className={classes.Button}
                    onClick={props.onClick}
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;

const useStyles = makeStyles((theme) => ({
    Button: {
        margin: "auto",
        "&:hover": {
            backgroundColor: "#ffffff",
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#3c52b2",
        },
    },
}));
