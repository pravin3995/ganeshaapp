import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Router, Route, Link } from "react-router-dom";
import { Grid, Paper, TextField, Divider, IconButton } from '@material-ui/core';
import '../custom.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
const img = require('../assets/images/1.jpg')
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
    },
    
  },
  textField: {
    minWidth: 280,
    marginTop: 20,  
  },
  contain: {
    margin: '0 auto'
  },
  paper: {
    minHeight: 370,
    maxWidth: 450,
    minWidth: 337,
    textAlign: 'center',
    display: 'block',
    margin: 'auto'
  },
  bottomPaper: {
    display: 'inherit',
    fontSize: 'small',
    marginTop: '50px'
  },
  link: {
    color: '#0095ff',
    display: 'inline-block'
  }

}));

export default function Login() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
          <Grid container >
        <Grid item xs={12} className={classes.contain}>

        <Paper className=' form b-radius'  elevation={0}>
            <div className='login-image'>
            <img src={String(img)} width='100%' className='b-radius' />
            </div>
            <div className='login-form p-30'>
              <h2 className='m-0'>Login</h2>
              <form className={classes.root} noValidate autoComplete='off'>
                <TextField id='outlined-basic' label='Email Address' variant='outlined' autoComplete='off' fullWidth
                  className={classes.textField}
                  
                />
                <TextField id='outlined-basic' label='Password'  type='password' variant='outlined' autoComplete='new-password' fullWidth
                  className={classes.textField}
                />
                <p className='text-right'><Link to='/forgotpassword'>Forgot Password?</Link></p>
                <Button variant='contained' color='primary' className='login-button form-button' fullWidth style={{ borderRadius: 100 }} component={Link} to="/homepage">
                    Log In 
                </Button>
                <div className='mt-5 social-button'>
                <IconButton className='mr-10'
                  ><div className='fab fa-facebook '></div><span className='sign'>Sign In</span></IconButton>
                  <IconButton className='ml-10'
                  > <div className='fab fa-google-plus'></div> <span className='sign'>Sign In</span></IconButton>
                </div>
                  <p className='account'>Don't have a account? <Link to='/signup '>Sign Up</Link> </p>
              
              </form>
            </div>
         </Paper>
       
        </Grid>
      </Grid>
  
    </div>
  );
}
