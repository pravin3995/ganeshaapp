import React from 'react'
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
      width: '100%',
      height: '100%',
      borderRadius: '15px'
    },
    control: {
      padding: theme.spacing(2),
    },
    button: {
      backgroundColor: '#df3088',
      borderRadius: '15px',
      color: 'white',
      padding:'6px 16px'
    }
  }),
);

export default function ReceiptDetails() {
  const classes  =  useStyles()
  return (
     <div className='receipt-details'>
			    <h2 className='h1-title t-center'> My Receipt </h2>
            <CardContent className='pt-0' >  
              <Grid spacing={2} style={style.AlignMent} >
                 <Grid item xs={12} sm={8} md={6} lg={4}>        
                 <Card>
                  <CardContent className='card-wrap'>
                    
                     <Box className='receipt-icon-b-border' pt={1} pb={3}>
                    <Grid container spacing = {3} >
                      <Grid item xs = {4} sm={3} md={3}>
                        <Link to = '/practice'  target =  '_blank'>
                          <Avatar variant='square'  className={classes.large} alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'/>	
                        </Link>
                      </Grid>
                      <Grid item xs = {8} sm={9} md={9}> 
                        <Box fontWeight='bold'>
                          Lions Club Mitra Mandal
                        </Box>
                        <Typography variant='caption'>
                          Dattawadi , pune - 30
                        </Typography>
  
                        <Typography variant='caption' className='d-block'>
                          <span className='label-color'> Reg. no:</span> 123456
                        </Typography>
                        
                        <Box mt={1} className='paid'>
                          <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>Paid</Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                      <Box className='receipt-icon-b-border'> 
                        <Grid container spacing = {3}>
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
                      <Box pt={3}>
                    <Typography variant="h4" className='f-bold t-center'>
                      Thank You!
                    </Typography>
                  </Box>
                  </CardContent>
                </Card>
                <Card elevation={0} className='mt-30'>
                <div className='circle'>
                      <FiberManualRecordIcon className='icon left-icon'/>
                      <FiberManualRecordIcon className='icon right-icon'/>
                    </div>
                  
                  <CardContent className='card-wrap'>
                    <Box className=' payment-suc' pt={1} pb={3}>
                        <CheckCircleIcon className='successfully-icon'/>
                        <h2 className="successfully-text">Payment Successfully</h2>
                        <p className='transaction-n'>Transaction Number: 14002505500</p>
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
                      {/* <Box pt={2}>
                    <Typography variant="h5" className='f-bold t-center'>
                      Thank You!
                    </Typography>
                  </Box> */}
                  </CardContent>
                </Card>
              </Grid>
              </Grid>
            </CardContent>
			</div>
  )
}
