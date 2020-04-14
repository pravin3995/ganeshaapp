import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ShareIcon from '@material-ui/icons/Share';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import EmailIcon from '@material-ui/icons/Email';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},

	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	formControl: {
		minWidth: 150
	},
	mb: {
		marginBottom: 20
	},

	seebutton: {
		padding: '1px 12px',
		color: 'black',
		background: 'white'
	},
	button: {
		// backgroundColor: '#fb734e',
		// borderRadius: '15px',
		color: 'white',
		padding: '4px 22px'
	}
})

const options = ['2020', '2019', '2018'];

export default function EventPage() {
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);
	const classes = useStyles()
	const [age, setAge] = React.useState('');

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
	  setAge(event.target.value as string);
	};
	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number,
	) => {
		setSelectedIndex(index);
		setOpen(false);
	};
	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
	};
	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen);
	};
	const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpen(false);
	};
	return (
		<div className=' all-events main-wrapper pt-0'>
			<div>
				<CardContent className='pb-0 pt-0'>
					<Box display='flex' justifyContent='space-between' flexWrap='wrap' alignItems='center'>
						<Box>
							<h3 className='h1-title'> Upcomming Events</h3>
						</Box>
					</Box>
				</CardContent>
				<Grid container >
                <Grid item xs={12} sm={6} md={6} >
						<CardContent className='pb-0'>
                         <Link to='/eventdetails' className= 'text-decoration-none'>
							<Card className='post-card'>
								<CardContent>
									<Grid container>
										<Grid item xs={12}>
											<span className='label'>
												Feb 27,2020
											</span>
											<h4 className='inner-heading'>
												Ganesh Chaturthi
											</h4>
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
                                            <Box display='flex' justifyContent='space-between' alignItems='center' mt={3}>
                                                <div className='events-icon-wrapper'>
                                                    <EmailIcon className='icon'/>
                                                    <a href="">Invite</a>
                                                </div>
                                                <div  className='events-icon-wrapper'>
                                                    <EditIcon className='icon'/>
                                                    <a href="">Edit</a>
                                                </div>
                                                <div  className='events-icon-wrapper'>
                                                    <ShareIcon className='icon'/>
                                                    <a href="">Share</a>
                                                </div>
                                                
                                            </Box>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
							</Link>
						</CardContent>
					</Grid>
				  
					<Grid item xs={12} sm={6} md={6} >
						<CardContent className='pb-0'>
                         <Link to='/eventdetails' className= 'text-decoration-none'>
							<Card className='post-card'>
								<CardContent>
									<Grid container>
										<Grid item xs={12}>
											<span className='label'>
												Feb 27,2020
											</span>
											<h4 className='inner-heading'>
												Ganesh Chaturthi
											</h4>
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
                                            <Box display='flex' justifyContent='space-between' alignItems='center' mt={3}>
                                                <div className='events-icon-wrapper'>
                                                    <EmailIcon className='icon'/>
                                                    <a href="">Invite</a>
                                                </div>
                                                <div  className='events-icon-wrapper'>
                                                    <EditIcon className='icon'/>
                                                    <a href="">Edit</a>
                                                </div>
                                                <div  className='events-icon-wrapper'>
                                                    <ShareIcon className='icon'/>
                                                    <a href="">Share</a>
                                                </div>
                                                
                                            </Box>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
							</Link>
						</CardContent>
					</Grid>
                    <Grid item xs={12} sm={6} md={6} >
						<CardContent className='pb-0'>
                         <Link to='/eventdetails' className= 'text-decoration-none'>
							<Card className='post-card'>
								<CardContent>
									<Grid container>
										<Grid item xs={12}>
											<span className='label'>
												Feb 27,2020
											</span>
											<h4 className='inner-heading'>
												Ganesh Chaturthi
											</h4>
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
                                            <Box display='flex' justifyContent='space-between' alignItems='center' mt={3}>
                                                <div className='events-icon-wrapper'>
                                                    <EmailIcon className='icon'/>
                                                    <a href="">Invite</a>
                                                </div>
                                                <div  className='events-icon-wrapper'>
                                                    <EditIcon className='icon'/>
                                                    <a href="">Edit</a>
                                                </div>
                                                <div  className='events-icon-wrapper'>
                                                    <ShareIcon className='icon'/>
                                                    <a href="">Share</a>
                                                </div>
                                                
                                            </Box>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
							</Link>
						</CardContent>
					</Grid>
				  
                </Grid>
			</div>
		</div>
	)
}