import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import { positions } from '@material-ui/system';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Button from '@material-ui/core/Button';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import CallIcon from '@material-ui/icons/Call';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import '../custom.scss';
import Image from '../assets/images/1.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    BasicInfo:{
        margin: theme.spacing(2)
    },
    square: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    rounded: {
      color: '#fff',
      backgroundColor: green[500],
    },
    large: {
        width: '130px',
        height: '130px',
        borderRadius: '20px',
        marginTop:100,
        background:'#ff9688',
        marginBottom:0
      },
      ProfileEdit: {
          position: 'absolute',
          left:'68%',
          bottom :'-4px',
          cursor:'pointer'

      },
      ProfileEditPosition :{
          position: 'relative'
      },
      ProfileName :{
          alignSelf:'flex-end',
          marginBottom :'45px',
        //   marginLeft:20
      },
      EditButton : {
          // transform:' translate(7px, -46px)',
          marginRight:'14px',
          fontSize:'10px'
      },
      changeCover:{
        fontSize:'10px',
        transform: 'translate(-16px, 16px)'
      },
      media: {
        height: 0,
        paddingTop: '30.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: '#ff9688',
        borderRadius:'20%'
      },
        TextField : {
        width:'100%',
        // marginTop: 26
  }
  }),
);

const styles = {
    paper:{
      padding:'30px'
    },
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundSize:'Cover',
      backgroundRepeat:"no-repeat"
  },
    TextField : {
      width:'100%',
      // marginTop: 26
    }
  }
export default function VariantAvatars() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current!.offsetWidth);
  // }, []);
  const [age, setAge] = React.useState('');
  return (
   <div>
        <div className='profile'>   
           <Paper className='profile-details b-r-0' elevation={1} style={styles.paperContainer}>
           <div className='changephoto mobile-view'>
                <div  color="primary"  className={classes.changeCover}  >
                  <div className='file-input'>
                      <input type='file' />
                      <CameraAltIcon className='camera'/>
                    </div>
                </div>
                  
            </div>
            <div className='changephoto desktop-view'>
                <Button variant="contained" color="primary" className={classes.changeCover} >
                    Change Cover Photo
                </Button>
            </div>
             <div className='profil-img'>
              <div className='info-wrapper'>
                <div className={classes.ProfileEditPosition}>

                  <div className={classes.root}>
                      <Avatar  variant="rounded" alt="Remy Sharp" src="" className={classes.large} />
                  </div>
                  <div className={classes.ProfileEdit}>
                      <Avatar >
                      <CameraAltIcon />
                      </Avatar>
                  </div>
                </div>
                  <div className={classes.ProfileName}>
                    <h3 >Yogesh Jadhav</h3>
                    <p className='role'>Member</p>
                  </div>
              </div>
                {/* <div className='editprofile'>
                  <Button variant="contained" color="primary" className={classes.EditButton}>
                      Edit Profile
                  </Button>
              </div> */}
            </div>
          </Paper>

            <div className='basic-info main-wrapper' >
              <div className={classes.BasicInfo}>
                <h3>Basic Information:</h3>
                <form noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField} >
                          <TextField id="outlined-basic" placeholder="User Name" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                              <AccountCircle />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField}>
                          <TextField id="outlined-basic" placeholder="Email Address" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                            <MailIcon />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField}>
                          <TextField id="outlined-basic" placeholder="Mobile Number" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                              <CallIcon />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} >
                      <div className='iconposition input-placeholder' style={styles.TextField}>
                          <TextField id="outlined-basic" placeholder="City" variant="outlined"  className='w-100'/>
                          <InputAdornment position="start" className='icon'>
                              <LocationCityIcon />
                          </InputAdornment>
                      </div>
                     </Grid>
                     <Grid item xs={12} className='t-right'>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                      </Grid>
                  </Grid> 
                </form>
   
            </div>
            </div>
        </div>
   </div>
  );
 }
