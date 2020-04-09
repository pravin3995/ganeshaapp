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
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '40px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.3,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.3
                }
            }

        ]
    }
    return (
        <div className="main-wrapper">
            <h2> Upcoming Events</h2>
            <Slider {...settings}>
                <div className="px-3">
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
            <h2> Recent Events</h2>
            <Slider {...settings}>
                <div className="px-3">
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    <Card>
                        <CardContent >
                            <span className="label">Feb 27,2020</span>
                            <Typography variant='h6' component='h2' gutterBottom >
                                Ganesh Chaturthi
							</Typography>
                            <Box mb={2} className='ganesh-chathurti-description'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                    See All Recent Events
			    </Button>
            </Box>
        </div>
    )
}