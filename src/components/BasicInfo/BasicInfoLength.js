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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                }}
            >
                {[1, 3, 7].map((day) => (
                    <DayItem key={day} day={day} onClick={setTrip} />
                ))}
            </Box>
        </Typography>
    );
};

export default BasicInfoLength;
