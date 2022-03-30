import React from "react";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bag12 from "../images/bag12.png";
import { Box } from "@mui/system";

const Tiles = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} sx={{ p: 1 }}>
            <Grid item xs>
                <Paper
                    className={classes.paper1}
                    sx={{
                        backgroundColor: "#f39f86",
                        backgroundImage:
                            "linear-gradient(315deg, #f9d976 0%, #f39f86 74%)",
                        color: "white",
                    }}
                >
                    <Typography variant="h5">Watch</Typography>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper
                    className={classes.paper1}
                    sx={{
                        backgroundColor: "#d19592",
                        backgroundImage:
                            "linear-gradient(315deg, #d19592 0%, #c81f70 74%)",
                        color: "white",
                    }}
                >
                    <Typography variant="h5">Bag</Typography>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper
                    className={classes.paper1}
                    sx={{
                        backgroundColor: "#abe9cd",
                        backgroundImage:
                            "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)",
                        color: "white",
                    }}
                >
                    <Typography variant="h5">Shoes</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Tiles;
const useStyles = makeStyles((theme) => ({
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
}));
