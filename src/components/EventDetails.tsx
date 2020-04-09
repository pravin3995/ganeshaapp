import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Router, Route, Link } from "react-router-dom";
import { Grid, Paper, TextField, Divider, IconButton, CardContent, Card } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../custom.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
const img = require('../assets/images/1.jpg')
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
    },
    
  },
}));
const styles = {
   
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400
    },
    slide: {
      padding: 10
    },
    TextColor: {
      color: '#a5a5a5',
      margin: '0 0 5px 0',
      fontSize:'12px'
    },
    Card: {
      padding: '24px', 
      flex: 1,
    //    marginRight: '20px',
      borderRadius: '4px',
    //   background : '#f1f1f1',
      boxShadow: '10px 10px 19px -9px rgba(0,0,0,0.33)'
    },
    ParagraphColor : {
      color: 'rgb(115, 115, 115)',
      lineHeight : '27px',
      fontSize: 16
    },
    Person:{
        display:'flex',
        justifyContent:'flex-end'
    }
  }
 
export default function Login() {
  const classes = useStyles();


  return (
    <div className='main-wrapper event-details'>
      <CardContent className='bg-color'>
        <div>
          <img src={String(img)} width='100%' height='300' />
        </div>
        <h3>Ganesh Chaturthi</h3>
        <div className='details-wrapper' >
        <CardContent  style={styles.Card} className='boxshadow mr-20' >
          <p className='description m-0 '>Event Date :</p>
          <h4 className='m-0'>Feb 26, 2020</h4>
        </CardContent>
        <CardContent style={styles.Card} className='boxshadow'>
          <p className='description m-0'>Location :</p>
          <h4 className='m-0'>Mandal Premise</h4>
        </CardContent>
        </div>
        <div className='mt-30'>
            <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
            <p className='description'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
        </div>
         <div  className='mt-30 person'>
            <AccountCircleIcon style={{marginRight: '6px'}}/>  <span style={{fontWeight: 600}}>Pravin Jadhav</span>
         </div>
      </CardContent>
      
  </div>

    );
}
