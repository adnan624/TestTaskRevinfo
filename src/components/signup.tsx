
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from "formik";
import { signupSchema } from '../schemas';



const defaultTheme = createTheme();

export default function SignUp() {

  const navigate = useNavigate()

    const initialValues={
        firstName: "",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        checkbox : "",
    }

    const {values, errors, touched,setFieldValue, handleBlur, handleChange, handleSubmit,isValid} = useFormik({
        initialValues:initialValues,
        validationSchema: signupSchema,
        onSubmit:(values)=>{
            console.log(values)
            window.alert("Successfully signed up")
            // navigate("/login")
            navigate("/otp")
        }
    })

console.log(isValid,"isValid",errors);


  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                
                />
            {errors.firstName && touched.firstName ?( <p style={{color:"red", fontSize: "12px"}} >{errors.firstName}</p> ): null}

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            {errors.lastName && touched.lastName ?( <p style={{color:"red", fontSize: "12px"}} >{errors.lastName}</p> ): null}

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
            {errors.email && touched.email ?( <p style={{color:"red", fontSize: "12px"}} >{errors.email}</p> ): null}

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
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            {errors.password && touched.password ?( <p style={{color:"red", fontSize: "12px"}} >{errors.password}</p> ): null}

              </Grid>
              
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="confirmPassword"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
            {errors.confirmPassword && touched.confirmPassword ?( <p style={{color:"red", fontSize: "12px"}} >{errors.confirmPassword}</p> ): null}

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name='checkbox' onChange={()=>{
                    setFieldValue('checkbox',!values.checkbox)
                  
                  } } value={values.checkbox}  color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
                            {values.checkbox  ?( <p style={{color:"red", fontSize: "12px"}} >{errors.checkbox}</p> ): null}

              </Grid>
            </Grid>
            <Button
            color='primary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/login'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}