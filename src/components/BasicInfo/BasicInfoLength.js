import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DayItem from "./DayItem";

const TripLength = (props) => (
    <Link className="Trip" onClick={() => props.onClick(props.number)}>
        {props.number}
    </Link>
);

const BasicInfoLength = () => {
    const [trip, setTrip] = useState(1);
    return (
        <Typography component="div">
            <Box
                sx={{
                    color: "#6200EE",
                    m: "143px",
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif",
                    whiteSpace: "nowrap",
                    fontSize: "76px",
                    textAlign: "center",
                }}
            >
                How many days do you tabi?
            </Box>
            <Link to="/BasicInfoOrigin" style={{ textDecoration: "none" }}>
                <DayItem onClick={setTrip} />
            </Link>
        </Typography>
    );
};

export default BasicInfoLength;
