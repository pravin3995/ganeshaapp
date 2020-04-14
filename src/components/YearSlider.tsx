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
        // centerMode: true,
        // centerPadding: '200px',
        focusOnSelect: false,
        slidesToShow: 1,
        speed:400,
        
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
        <div className="year-slider">
            <h2> Upcoming Events</h2>
            <Slider {...settings} className='year-list'>
                <div className='t-center'>
                    <h5 className='year'>2020</h5>
                </div>
                <div>
                    <h5>2020</h5>
                </div>
             </Slider>
          
        </div>
    )
}