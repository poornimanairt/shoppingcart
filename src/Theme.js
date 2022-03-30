import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
    palette: {
        alternateTextColor: "#ECECEC",
        common: {
            success: "#71D590",
            secondary: "#FF825C",
            black: "#333333",
            white: "#FFFFFF",
            greyish: "#808080",
            alternateTextColor: "#ECECEC",
        },
        primary: {
            main: "#ECECEC",
        },
        secondary: {
            main: "#000000",
        },
        text: {
            primary: "#484848",
            secondary: "#484848",
        },
        shape: { borderRadius: 5 },
    },
});

export default Theme;
