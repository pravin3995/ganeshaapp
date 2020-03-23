import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Link } from 'react-router-dom'
import AppleIcon from '@material-ui/icons/Apple'
import { Typography, Box } from '@material-ui/core'
import Grid, { GridSpacing } from '@material-ui/core/Grid'

export default function Receipt() {
  return (
    <div >
        <Grid container  >
           <Grid item xs={12} md={6} lg={4}>
              <CardContent className='pt-0 pb-0'>
              <h2> 2020 </h2>
              <Link to='/details' className= 'text-decoration-none'>
                <Card>
                  <CardContent className= 'p-relative '>
                    <AppleIcon className='apple-icon'/>
                      <Typography> 
                        <Box mt={1} mb={1}>
                          <span className= 'd-block label'> Date: </span>
                          <span className= 'd-block'> 18-10-2020</span>
                        </Box>
                      </Typography>
                      <Typography> 
                        <Box mt={1} mb={1}>
                          <span className= 'd-block label'> Paid: </span>
                          <span className= 'd-block receipt-amout'> 2201 /- </span>
                        </Box>
                      </Typography>

                      <Typography > 
                        <Box mt={1} mb={1}>
                          <span className= 'd-block label'> Name: </span>
                          <span className= 'd-block'> Akshay Chidre </span>
                        </Box>
                      </Typography>
                    
                    <Typography >
                    <Box mt={1} mb={1}>
                      <span className= 'd-block label'> Received: </span>
                      <span className= 'd-block'> Pravin </span>
                      </Box>
                    </Typography> 
                  </CardContent>
                </Card>
              </Link>
            </CardContent>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CardContent className='pt-0 pb-0'>
              <h2> 2019 </h2>
              <Link to='/details' className= 'text-decoration-none'>
                <Card>
                  <CardContent className= 'p-relative'>
                    <AppleIcon className='apple-icon'/>
                      <Typography> 
                        <Box mt={1} mb={1}>
                          <span className= 'd-block label'> Date: </span>
                          <span className= 'd-block'> 10-1-2019</span>
                        </Box>
                      </Typography>
                      <Typography> 
                        <Box mt={1} mb={1}>
                          <span className= 'd-block label'> Paid: </span>
                          <span className= 'd-block receipt-amout'> 1111 /- </span>
                        </Box>
                      </Typography>

                      <Typography> 
                        <Box mt={1} mb={1}>
                          <span className= 'd-block label'> Name: </span>
                          <span className= 'd-block'> Trushant Bhangre </span>
                        </Box>
                      </Typography>
                    
                    <Typography >
                    <Box mt={1} mb={1}>
                      <span className= 'd-block label'> Received: </span>
                      <span className= 'd-block'> Pravin </span>
                      </Box>
                    </Typography> 
                  </CardContent>
                </Card>
              </Link>
            </CardContent>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CardContent className='pt-0'>
                <h2> 2018 </h2>
        <Link to='/details' className= 'text-decoration-none'>
          <Card>
            <CardContent className= 'p-relative'>
              <AppleIcon className='apple-icon'/>
                <Typography> 
                  <Box mt={1} mb={1}>
                    <span className= 'd-block label'> Date: </span>
                    <span className= 'd-block'> 28-06-2018</span>
                  </Box>
                 </Typography>
                 <Typography> 
                  <Box mt={1} mb={1}>
                    <span className= 'd-block label'> Paid: </span>
                    <span className= 'd-block receipt-amout'> 2751 /- </span>
                  </Box>
                 </Typography>

                 <Typography> 
                  <Box mt={1} mb={1}>
                    <span className= 'd-block label'> Name: </span>
                    <span className= 'd-block'> Baldev Pardesi </span>
                  </Box>
                 </Typography>
              
              <Typography >
              <Box mt={1} mb={1}>
                <span className= 'd-block label'> Received: </span>
                <span className= 'd-block'> Pravin </span>
                </Box>
              </Typography> 
            </CardContent>
          </Card>
        </Link>
      </CardContent>
             </Grid>
        </Grid>
  </div>
    
    
    )
  }