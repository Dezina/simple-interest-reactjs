import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory} from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import FormControl from "@mui/material/FormControl";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
if(!username) {
  toast.error("Email is required", { position: "top-right" });
}
else if(!password) {
  toast.error("Password is required", { position: "top-right" });
}
else {
  let body = {
    mobileNumber: username,
    password: password,
  };

    axios({
        method: "POST",
        url: `https://goasocialmediamarketing.com/betterlifeapi/api/login`,
        data: body,
        headers: {
            Authorization: `Bearer Token`,
        },
      })
        .then((res) => {
        localStorage.setItem("token", res.data.data.UserToken);
        localStorage.setItem("username", res.data.data.fullName);
        history.push("/SimpleInterest");
        window.location.reload();
        })
        .catch((err) => {

        toast.error(err.response.data.message, { position: "top-right" });
    });
}
   
  };


  return (
    <>
      <Box sx={{ height: "68vh", flexGrow: 1, backgroundColor: "#00000029" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Avatar
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  margin: "auto",
                  backgroundColor: "#EFEFEF"
                }}
              >
                <PersonOutlineSharpIcon
                  sx={{
                    color: "blue",
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </Avatar>
            </Item>
            <Item>
              <Typography 
              variant="h3" 
              gutterBottom
              sx={{fontFamily: "Open Sans", fontSize: "48px", color: "#0B3558", fontWeight: "bold"}}
              >
                User Login
              </Typography>
            </Item>
            <form>
              <Grid item xs={12}>
                <Item>
                  <FormControl>
                    <TextField
                      id="outlined-mobile"
                      label="Mobile number"
                      variant="outlined"
                      sx={{ width: "45ch", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px", color: "#A2A2A2" }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <FormControl>
                    <TextField
                      id="outlined-password"
                      label="Password"
                      variant="outlined"
                      sx={{ width: "45ch", fontFamily: "Open Sans", fontWeight: "regular", fontSize: "18px", color: "#A2A2A2" }}
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                   
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ 
                      width: "45ch", 
                      fontFamily: "Open Sans", 
                      fontWeight: "bold", 
                      fontSize: "18px", 
                      color: "#fff",
                      backgroundColor: "#003FB9"
                     }}
                  >
                    Login
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

export default Login;
