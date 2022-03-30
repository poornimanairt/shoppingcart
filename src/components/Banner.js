import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import xbox from "../images/xbox.png";
import { Button, CardActions } from "@mui/material";

export default function Banner() {
    const theme = useTheme();

    return (
        <Card
            sx={{ display: "flex", mr: 1, ml: 1, backgroundColor: "#ffecf2" }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                }}
            >
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                        component="div"
                        variant="h4"
                        sx={{ fontWeight: 600 }}
                    >
                        X-Box For Your Living Room
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dxbox image transparent background
                    </Typography>
                </CardContent>
                <CardActions>
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        sx={{
                            fontWeight: 600,
                            display: "block",
                            clear: "both",
                        }}
                    >
                        $600
                    </Typography>

                    <Button
                        component="div"
                        variant="contained"
                        sx={{
                            color: "black",
                            backgroundColor: "pink",
                            display: "block",
                            clear: "both",
                        }}
                    >
                        Buy Now
                    </Button>
                </CardActions>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 300 }}
                image={xbox}
                alt="Live from space album cover"
            />
        </Card>
    );
}
