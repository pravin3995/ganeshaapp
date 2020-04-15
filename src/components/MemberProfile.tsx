import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';

import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Image from '../assets/images/1.jpg'
import { Link } from '@material-ui/core';
const img = require('../assets/images/qr.png')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // marginTop: 30
    },
    paper: {
      padding: theme.spacing(1),
      // textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
    Recentpost:{
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
      margin:'100px 16px 0 16px',
      background:'#ff9688'
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

    title :{
      // fontWeight:600,
      fontFamily: 'Montserrat-Medium',
    },
    subheader :{
      fontSize:12,
      fontFamily: 'Montserrat-Medium',
    },
    ProfileName :{
        alignSelf:'flex-end',
        marginBottom :'45px',
        marginLeft:6
    },
    EditButton : {
        // transform:' translate(7px, -22px)',
        marginRight:'14px',
        fontSize:'10px',
      fontFamily: 'Montserrat-Medium'

    },
    changeCover:{
      fontSize:'10px',
      transform: 'translate(-16px, 16px)',
      fontFamily: 'Montserrat-Medium'
    },
    media: {
      height: 0,
      paddingTop: '60.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      // transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#ff9688',
      borderRadius:'20%'
    },
  }),
);
const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundSize:'Cover',
      backgroundRepeat:"no-repeat"
  }
};
// const options = [
//   'Edit',
//   'Delete',
//   'Disable Commnets',
//   'Disable Sharing'
// ];
const ITEM_HEIGHT = 48;
//Delete popup
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
//Delete popup page
function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className='delete-post'>
      <DialogTitle id="simple-dialog-title" className='delete-post-heading pb-0'><h4 className='m-0 h1-title'>Delete Post</h4> <a href="" className='close-icon'><CloseIcon onClick={handleClose}/></a></DialogTitle>
      <List className='pt-0'>
        <ListItem >
        <div className=' user-delete-message'>  
            <p className='m-0'>Are you sure you want to delete the post?</p>
          </div>
        </ListItem>
        <ListItem className='popup-button'>
            <Button variant="contained" size='small' color="primary" onClick={handleClose}>
                Cancel
            </Button>
            <a href="" className='delete-button'>Delete</a>
            {/* <Button variant="contained" color="secondary">
                Delete
            </Button> */}
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function CenteredGrid() {
    //edit Menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const opens = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    //Delete popup
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }


  const handleCloses = () => {
    setAnchorEl(null);
  };
  //Text Editor
  const save = (data: any) => {
    console.log(data);
  };
  return (   
    <div className={classes.root} >
        <div className='profile'>
          
          <Paper className='profile-details b-r-0' elevation={1} style={styles.paperContainer}>
            <div className='changephoto'>
                <Button variant="outlined" color="primary" className={classes.changeCover} >
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
                      < EditIcon />
                      </Avatar>
                  </div>
                </div>
                  <div className={classes.ProfileName}>
                    <h3 >Yogesh Jadhav</h3>
                    <p className='role'>Member</p>
                  </div>
              </div>
              <div className='editprofile'>
                  <Button variant="contained" color="primary" className={classes.EditButton}>
                     <a href="/membereditprofile" className='link'>Edit Profile</a> 
                  </Button>
             </div>
            </div>
           </Paper>
        </div>
        <div className='main-wrapper'>
           <Grid container >
              <Grid item xs={12} >  
              <div className={classes.paper} >
                <div className='follow' style={{textAlign:'center'}}>
                    <Grid container >
                        <Grid item xs={4}>
                            <p  className='f-14'>Post</p>
                            <h2>02</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <p className='f-14'>Following</p>
                            <h2>10</h2>
                        </Grid>
                        <Grid item xs={4}>
                            <p className='f-14'>Follows</p>
                            <h2>02</h2>
                        </Grid>
                    </Grid>
                  </div>
                
            </div>
              <div className={classes.paper} >
                <Card className='post-card' >
                  <CardHeader
                      avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                          Y
                      </Avatar>
                      }
                    
                      action={
                      
                      <IconButton aria-label="settings" className='p-0' >
                          <span className='post-time'>20 mins ago</span>
                          <div>
                            <IconButton
                              aria-label="more"
                              aria-controls="long-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                              className='pr-0'
                            >
                              <MoreVertIcon  />
                            </IconButton>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={opens}
                                TransitionComponent={Fade}
                                onClose={handleCloses}
                                className='menu-options'
                              >
                                <MenuItem onClick={handleCloses} >Edit</MenuItem>
                                <MenuItem onClick={handleClickOpen}>Delete</MenuItem>
                                <MenuItem >Disable Commnets</MenuItem>
                                <MenuItem >Disable Sharing</MenuItem>
                              </Menu>
                              <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                              
                          </div>
                      </IconButton>
                      }
                      title="Abhijeet Jachak"
                      // titleTypographyProps={{variant:'h6' }}
                      classes={{
                        title: classes.title,
                        subheader:classes.subheader,
                      }}
                      subheader="Member" 
                  />
                  {/* <img src={String(img)} /> */}
                  <CardMedia
                      className={classes.media}
                      image={require('../assets/images/1.jpg')}
                      title="Paella dish"
                  />
                  <CardContent>
                      <h4 className='post-title'>Post Title</h4>
                      <Typography variant="body2" color="textSecondary" component="p">
                          This impressive paella is a perfect party dish and a fun meal to cook together with your
                          guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                          <FavoriteIcon color="secondary" /><span className='f-14 f-w-600'> +1</span>
                      </IconButton>
                      
                      <IconButton
                          className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded,
                          })}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                      >
                      {/* <ExpandMoreIcon /> */}
                      <span className=' f-w-600 comment'>Comments</span>
                      </IconButton>
                      <IconButton aria-label="share">
                          {/* <ShareIcon /> */}
                          <span className='f-w-600 share'>Share</span>
                      </IconButton>
                  </CardActions>
                  
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                              Y
                          </Avatar>
                          }
        
                          title="Yogesh Jadhav"
                          // titleTypographyProps={{variant:'h6' }}
                          classes={{
                            title: classes.title,
                            subheader:classes.subheader,
                          }}
                          subheader="Member"
                          className='comment-border'
                      />
                    <CardContent  className='comment-content'>
                        <Typography paragraph className='comment-paragraph'>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                          minutes.
                        </Typography>
                        <div className='reply-field'>
                          <TextField
                              id="outlined-size-small"
                              placeholder="Reply ..."
                              variant="outlined"
                              size="small"
                              className='w-100 reply-input'
                            />
                            <SendIcon className='send'/>
                        </div>
                        <div className='edit-comment'>
                        <TextareaAutosize aria-label="minimum height" className='w-100 edit-text' rowsMin={3} placeholder="Edit Comment..." />
                            <div className='comment-button-wrapper'>
                                <Button size="small" variant="contained" color="primary">
                                  Cancel  
                                </Button>
                                <Button size="small" variant="contained" color="primary">
                                  Update
                                </Button>
                            </div>
                        </div>
                        <div className='comments-action'>
                        <a href="">Reply</a> 
                        <a href="">Edit</a> 
                          <a href="">Delete</a> 
                        </div>
                      </CardContent>
                  </Collapse>
        
                </Card>
              </div>
            </Grid>
          </Grid>
      </div>
    </div> 
  );
}
