import React, { useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory} from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Slider from '@mui/material/Slider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const year = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
        value: 5,
        label: '5',
      },
      {
        value: 6,
        label: '6',
      },
      {
        value: 7,
        label: '7',
      },
      {
        value: 8,
        label: '8',
      },
      {
        value: 9,
        label: '9',
      },
      {
        value: 10,
        label: '10',
      },
  ];

function valuetext(value) {
    return `${value}`;
  }

const SimpleInterest = () => {
  let history = useHistory();

  const [principal, setPrincipal] = useState(null);
  const [rate, setRate] = useState(null);
  const [time, setTime] = useState(1);
  const [result, setResult] = useState("");


  const handleCalculate = (e) => {
    e.preventDefault();
if(!principal) {
  toast.error("Principal is required", { position: "top-right" });
}
else if(!rate) {
  toast.error("Rate is required", { position: "top-right" });
}
else if(!time) {
    toast.error("Time is required", { position: "top-right" });
  }
else {

  let interest = (principal * rate * time)/100;
  setResult(interest)
}
   
  };

const handleClear = () => {

    setPrincipal("")
    setRate("")
    setTime(1)
    setResult("")
}

const handleSliderChange = (event, newValue) => {

    setTime(newValue)
  };


  console.log("result", result)
  return (
    <>
      <Box sx={{ height: "56vh", flexGrow: 1, backgroundColor: "#00000029" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Typography 
              variant="h6"
              gutterBottom
              sx={{fontFamily: "Open Sans", color: "#0B3558", fontWeight: "bold"}}
              >
                Hi {localStorage.getItem("username")}<br/>
                Calculate simple interest
              </Typography>
            </Item>
            <form>
              <Grid item xs={12}>
                <Item>
                  <FormControl>
                    <TextField
                      type="number"
                      id="outlined-principal"
                      label="Principal"
                      variant="outlined"
                      sx={{ width: "45ch", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px", color: "#A2A2A2" }}
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                    />
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <FormControl>
                    <TextField
                      id="outlined-rate"
                      label="Rate"
                      variant="outlined"
                      sx={{ width: "45ch", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px", color: "#A2A2A2" }}
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                    />
                   
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                    <FormControl>
                    <Typography 
                    variant="body2" 
                    gutterBottom
                    sx={{fontFamily: "Open Sans", fontSize: "15px", color: "#0B3558", fontWeight: "bold"}}
                    >
                        Select time
                    </Typography>
                    <Box sx={{ width: 450 }}>
                    <Slider
                    aria-label="Years"
                    defaultValue={1}
                    getAriaValueText={valuetext}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={year}
                    min={1}
                    max={10}
                    onChange={handleSliderChange}
                />
                    </Box>
                    </FormControl>
                </Item>
              </Grid>
              {
                result === ""? (
                    null
                ): (
                    <Grid item xs={12}>
                    <Item>
                        <FormControl>
                        <Typography 
                        variant="body2" 
                        gutterBottom
                        sx={{fontFamily: "Open Sans", fontSize: "15px", color: "#0B3558", fontWeight: "bold"}}
                        >
                            Interest of {principal} for {time} year is {result}
                        </Typography>
                        </FormControl>
                    </Item>
                  </Grid>
                )
              }
              <Grid item xs={12}>
                <Item>
                  <Button
                    variant="contained"
                    onClick={handleCalculate}
                    sx={{ 
                      width: "20ch", 
                      fontFamily: "Open Sans", 
                      fontWeight: "bold", 
                      fontSize: "18px", 
                      color: "#fff",
                      backgroundColor: "#003FB9"
                     }}
                  >
                    Calculate
                  </Button>
                 
                </Item>
                <Item>
                  <Button
                    variant="contained"
                    onClick={handleClear}
                    sx={{ 
                      width: "20ch", 
                      fontFamily: "Open Sans", 
                      fontWeight: "bold", 
                      fontSize: "18px", 
                      color: "#fff",
                      backgroundColor: "gray"
                     }}
                  >
                    Clear
                  </Button>
                 
                </Item>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default SimpleInterest;
