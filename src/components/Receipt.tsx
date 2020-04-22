import React, { useState, useRef, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar' 
import { Typography, Box } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
const style ={
  AlignMent:{
    display:'flex',
    justifyContent:'center'
  }
}
const useStyles  =  makeStyles((theme: Theme)  =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    large: {
      width: '100px',
      height: '100px',
      borderRadius: '100%',
      margin:'0 auto'
    },
    control: {
      padding: theme.spacing(2),
    },
    button: {
      backgroundColor: '#DF3088',
      borderRadius: '15px',
      color: 'white',
      padding:'6px 16px'
    }
  }),
);
export default function ReceiptDetails() {
  const classes  =  useStyles()
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  let settings = {
    // centerMode: true,
    // centerPadding: '200px',
    focusOnSelect: false,
    slidesToShow: 1,
    speed:400,
    fade: true,
    // afterChange: current => this.setState({ activeSlide: current }),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '100px',
          focusOnSelect: false,
          slidesToShow: 1
        }
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     arrows: true,
      //     centerMode: true,
      //     centerPadding: '100px',
      //     focusOnSelect: false,
      //     slidesToShow: 1
      //   }
      // },
      // {
      //   breakpoint: 580,
      //   settings: {
      //     arrows: true,
      //     centerMode: true,
      //     centerPadding: '60px',
      //     focusOnSelect: false,
      //     slidesToShow: 1
      //   }
      // },
      // {
      //   breakpoint: 500,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '60px',
      //     focusOnSelect: false,
      //     slidesToShow: 1
      //   }
      // }
    ]
}
const sliderone = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true
};
const slidertwo = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true
};
  return (
    <div className='receipt-details '>
    <div className="year-slider t-center">
       <h4 className='mb-0'>Select Year</h4>
    <Slider {...settings} className='year-list' asNavFor={nav2} ref={slider1}>
    <div className='t-center'>
          <h5 className='year'>2020</h5>
      </div>
      <div className='t-center'>
          <h5 className='year'>2019</h5>
      </div>
      <div className='t-center'>
          <h5 className='year'>2018</h5>
      </div>
    </Slider>
     <Slider
      asNavFor={nav1}
      ref={slider2}
      slidesToShow={1}
      swipeToSlide={true}
      focusOnSelect={true}
      fade={true}
      speed={400}
      arrows={false}
    >
       <Box mb={2}mt={2}>
            <CardContent className='pt-0 receipt-size' >  
                <Card elevation={0} className='p-relative'>
                  <div className="circle-shape circle-4"><span>Paid</span></div>
                  {/* <div className='circle'>
                      <FiberManualRecordIcon className='icon left-icon'/>
                      <FiberManualRecordIcon className='icon right-icon'/>
                    </div> */}
                  <CardContent className='card-wrap'>
                    <Box className=' payment-suc' pt={1} pb={3}>
                    <Avatar variant='square'  className={classes.large} alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'/> 
                        <h2 className="successfully-text"> Lions Club Mitra Mandal</h2>
                        <p className='transaction-n'> Dattawadi , pune - 30</p>
                        <p className='transaction-n'> Reg. no : 553 </p>
                      </Box>
                      <Box className=' py-20'> 
                        <Grid container>
                          <Grid item xs = {6}>
                            <Box mt={2} mb={2}> 
                              <span className='label d-block
                              '> Receipt Number: </span>
                              <span className='f-bold'> #002 </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Full Name: </span>
                              <span className='f-bold'> Baldev Pardesi </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Received by: </span>
                              <span className='f-bold'> Akshay </span>
                            </Box>
                          </Grid>
                          <Grid item xs = {6}>
                            <Box mt={2} mb={2}> 
                              <span className='label d-block
                              '> Amount: </span>
                              <span className='f-bold receipt-amout'> 5000 /- </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Date: </span>
                              <span className='f-bold'> 8 December 2020 </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box pt={2}>
                    <Typography variant="h5" className='f-bold t-center thank-you-title'>
                      Thank You!
                    </Typography>
                  </Box>
                  </CardContent>
                </Card>
            </CardContent>
      </Box>
      <Box mb={2}mt={2}>
            <CardContent className='pt-0 receipt-size' >  
                <Card elevation={0} className='p-relative'>
                  <div className="circle-shape circle-4"><span>Paid</span></div>
                  {/* <div className='circle'>
                      <FiberManualRecordIcon className='icon left-icon'/>
                      <FiberManualRecordIcon className='icon right-icon'/>
                    </div> */}
                  <CardContent className='card-wrap'>
                    <Box className=' payment-suc' pt={1} pb={3}>
                    <Avatar variant='square'  className={classes.large} alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'/> 
                        <h2 className="successfully-text"> Lions Club Mitra Mandal</h2>
                        <p className='transaction-n'> Dattawadi , pune - 30</p>
                        <p className='transaction-n'> Reg. no : 553 </p>
                      </Box>
                      <Box className=' py-20'> 
                        <Grid container>
                          <Grid item xs = {6}>
                            <Box mt={2} mb={2}> 
                              <span className='label d-block
                              '> Receipt Number: </span>
                              <span className='f-bold'> #002 </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Full Name: </span>
                              <span className='f-bold'> Baldev Pardesi </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Received by: </span>
                              <span className='f-bold'> Akshay </span>
                            </Box>
                          </Grid>
                          <Grid item xs = {6}>
                            <Box mt={2} mb={2}> 
                              <span className='label d-block
                              '> Amount: </span>
                              <span className='f-bold receipt-amout'> 5000 /- </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Date: </span>
                              <span className='f-bold'> 8 December 2020 </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box pt={2}>
                    <Typography variant="h5" className='f-bold t-center thank-you-title'>
                      Thank You!
                    </Typography>
                  </Box>
                  </CardContent>
                </Card>
            </CardContent>
      </Box>
      <Box mb={2}mt={2}>
            <CardContent className='pt-0 receipt-size' >  
                <Card elevation={0} className='p-relative'>
                  <div className="circle-shape circle-4"><span>Paid</span></div>
                  {/* <div className='circle'>
                      <FiberManualRecordIcon className='icon left-icon'/>
                      <FiberManualRecordIcon className='icon right-icon'/>
                    </div> */}
                  <CardContent className='card-wrap'>
                    <Box className=' payment-suc' pt={1} pb={3}>
                    <Avatar variant='square'  className={classes.large} alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'/> 
                        <h2 className="successfully-text"> Lions Club Mitra Mandal</h2>
                        <p className='transaction-n'> Dattawadi , pune - 30</p>
                        <p className='transaction-n'> Reg. no : 553 </p>
                      </Box>
                      <Box className=' py-20'> 
                        <Grid container>
                          <Grid item xs = {6}>
                            <Box mt={2} mb={2}> 
                              <span className='label d-block
                              '> Receipt Number: </span>
                              <span className='f-bold'> #002 </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Full Name: </span>
                              <span className='f-bold'> Baldev Pardesi </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Received by: </span>
                              <span className='f-bold'> Akshay </span>
                            </Box>
                          </Grid>
                          <Grid item xs = {6}>
                            <Box mt={2} mb={2}> 
                              <span className='label d-block
                              '> Amount: </span>
                              <span className='f-bold receipt-amout'> 5000 /- </span>
                            </Box>
                            <Box mt={2} mb={2} > 
                              <span className='label d-block
                              '> Date: </span>
                              <span className='f-bold'> 8 December 2020 </span>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box pt={2}>
                    <Typography variant="h5" className='f-bold t-center thank-you-title'>
                      Thank You!
                    </Typography>
                  </Box>
                  </CardContent>
                </Card>
            </CardContent>
      </Box>
    </Slider>
  </div>
  </div>
     )
} 


















