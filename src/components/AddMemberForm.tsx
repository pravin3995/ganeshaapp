import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { Typography, Box, AppBar, TextField, IconButton } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import EditIcon from '@material-ui/icons/Edit';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';
import { style } from '@material-ui/system'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
const options = ['Pravin Jadhav', 'Akshay Chidre', 'Abhijit Jachak'];

//Dialog
const emails = ['username@gmail.com', 'user02@gmail.com'];


export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

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
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" className='delete-post'><h4 className='m-0 h1-title'>Delete User</h4> <a href=""><CloseIcon onClick={handleClose}/></a></DialogTitle>
      <List>
          <div className='p-15 user-delete-message'>  
            <p className='m-0'>Are you sure you want to delete this user role?</p>
            <p className='m-0'><span className='f-w-500'>Please Note :</span> Deleting user role will delete all the user assigned to it.</p>
          </div>
          <ListItem className='popup-button'>
            <Button variant="contained" color="primary" onClick={handleClose}>
                Cancel
            </Button>
            <a href="">Delete</a>
          </ListItem>
      </List>
    </Dialog>
  );
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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
    control: {
      padding: theme.spacing(2),
    },
    button: {
      // backgroundColor: '#df3088',  
      // borderRadius: '15px',
      color: 'white',
      // padding: '3px 24px'
    },
    formControl: {
      // margin: theme.spacing(1),
      // minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    EditIcon: {
      marginRight:'15px'
    },
    Space: {
      margin: '10px 0'
    },
    TextField: {
      width:'100%'
    },
    EditUserAccess : {
      display:'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin:'20px 10px'
    },
    CardContents:{
      padding:'12px !important'
    },
   
  }),
);


export default function SimpleTabs() {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

 
  return (
    <div className='add-member'>
       <div className='abc main-wrapper pb-0'>
                <h2 className='h1-title mt-0'> Add Member </h2>
                <Grid container spacing={2}> 
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant	='body2'>
                            <div className='input-placeholder '>
                            <span className='label'> Name of Member: </span>
                            <TextField id="outlined-basic" placeholder="Enter Member Name Here..." variant="outlined"  className='w-100'/>
                        </div>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box >
                        <Typography variant	='body2'>
                        <small className='label'>
                            Main Image
                        <div className='file-input'>
                            <input type='file' />
                            <span className='button'>Choose</span>
                            <span className='label' data-js-label>No file selected</span>
                        </div>
                        </small>
                        </Typography>
                    </Box>
                </Grid> 

                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant	='body2'>
                        <div className='input-placeholder '>
                            <span className='label'> Email Address: </span>
                            <TextField id="outlined-basic" placeholder="Enter Email Address Here..." variant="outlined"  className='w-100'/>
                        </div>
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                <Box >
                    <Typography variant	='body2'>
                            <div className='input-placeholder '>
                            <span className='label'> User Type: </span>
                            <FormControl  fullWidth variant="outlined" className={classes.formControl}>
                          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                              User Access Type
                          </InputLabel>
                          <Select
                            native
                            // value={state.age}
                            inputProps={{
                              name: 'User Access Type',
                              id: 'outlined-age-native-simple',
                            }}
                          >
                            <option value="" />
                            <option value={10}> President </option>
                            <option value={20}> Editor </option>
                            <option value={30}> Member </option>
                          </Select>
                        </FormControl> 
                            </div>
                    </Typography>
                    </Box>

                </Grid>
            </Grid>

                <Box className='t-right' mt={2}>
                <Button variant="outlined" href='#'  color='primary' target='_bank' className={classes.button}>
                    Save
                </Button>
                </Box>
       </div>
     </div>
  );
}
