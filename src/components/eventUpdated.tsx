import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../custom.scss'

export default function eventUpdated() {
    let settings = {
        centerMode: true,
        centerPadding: '200px',
        focusOnSelect: false,
        slidesToShow: 1,
        speed:400,
        
        // afterChange: current => this.setState({ activeSlide: current }),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '100px',
              focusOnSelect: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '100px',
              focusOnSelect: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 580,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '60px',
              focusOnSelect: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '60px',
              focusOnSelect: false,
              slidesToShow: 1
            }
          }

        ]
    }
    return (
        <div className="main-wrapper event-slider">
            <h2> Upcoming Events</h2>
            <Slider {...settings} className='list'>
                <div className="px-3">
                    <Card className='slider-card'>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                               <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
							</Box>
                            <Box className="mandal-premises">
                                <Link to="https://goo.gl/maps/r3Zxt2iM9zrurHdD8" target='_blank' >
                                    <LocationOnIcon />
                                    <span >Mandal Premises </span>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div className="px-3">
                    <Card className='slider-card' elevation={0}>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
							</Box>
                            <Box className="mandal-premises">
                                <Link to="https://goo.gl/maps/r3Zxt2iM9zrurHdD8" target='_blank' >
                                    <LocationOnIcon />
                                    <span >Mandal Premises </span>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div className="px-3">
                    <Card className='slider-card' elevation={0}>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
							</Box>
                            <Box className="mandal-premises">
                                <Link to="https://goo.gl/maps/r3Zxt2iM9zrurHdD8" target='_blank' >
                                    <LocationOnIcon />
                                    <span >Mandal Premises </span>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div className="px-3">
                    <Card className='slider-card' elevation={0}>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
							</Box>
                            <Box className="mandal-premises">
                                <Link to="https://goo.gl/maps/r3Zxt2iM9zrurHdD8" target='_blank' >
                                    <LocationOnIcon />
                                    <span >Mandal Premises </span>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div className="px-3">
                    <Card className='slider-card' elevation={0}>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                 <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
							</Box>
                            <Box className="mandal-premises">
                                <Link to="https://goo.gl/maps/r3Zxt2iM9zrurHdD8" target='_blank' >
                                    <LocationOnIcon />
                                    <span >Mandal Premises </span>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </Slider>
            <Box mt={1} className='t-right'>
                <Button href='/events' size='small' target='_bank' className="btn">
                    See All Upcoming Events
			</Button>
            </Box>
            {/* Recent Events */}
            
        </div>
    )
}