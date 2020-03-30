import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme: Theme) => ({
  Footer: {
    width: '100%',
    height:'40px',
    background:'#323232',
    display:'flex',
    justifyContent:'center'
  },
  CopyRight:{
      color:'#fff',
      fontSize:13
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.Footer}>
        <p className={classes.CopyRight}>@Copyright.2020  Power by ivision</p>
    </div>
  );
}
