import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import validator from 'validator'
import { message } from 'antd';

export const SignUp = () => {
  const handleSubmit = (event) => {
    var passValues = true;
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(!validator.isStrongPassword(data.get('password'),{minLength: 8,minUppercase: 1, minNumbers: 1, minSymbols: 1})){
      message.error('Password must contain at least one uppercase letter, one number and one symbol. The minimum length must be 8 characters.')
      passValues = false;
    }
    if(!validator.isEmail(data.get('email'))){
      message.error('Email is not valid.')
      passValues = false
    }
    if(passValues){
      const signUpData = {
        email: data.get('email'), 
        username: data.get('username'),
        password: data.get('password')
      }

      fetch("http://localhost:9000/userSignUp",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpData)
      }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        message.success("Successful create of the account")}
      )
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
  );
}