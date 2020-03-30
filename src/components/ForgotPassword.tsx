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

export default function Forgot() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
          <Grid container >
        <Grid item xs={12} className={classes.contain}>
            <Paper className=' form'  elevation={0} >
            <div className=' p-30 forgot-form' >
            <h2>Forgot Password </h2>
            
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField id='outlined-basic' label='Email Address' variant='outlined' autoComplete='off'
                    style={{ backgroundColor: '#edf0f7', borderRadius: 100 }}
                    className={classes.textField}
                    fullWidth
                />
                <Button variant='contained' color='primary' className='signup-button form-button mt-30 ' style={{  borderRadius: 100 }}>
                    Reset Password 
                    </Button>
                
                </form>
                </div>
            </Paper>
        </Grid>
      </Grid>
  
    </div>
  );
}

