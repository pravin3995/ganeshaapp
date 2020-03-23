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
      <DialogTitle id="simple-dialog-title" className='delete-post'>Delete User <a href=""><CloseIcon onClick={handleClose}/></a></DialogTitle>
      <List>
          <div className='p-15'>  
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
      backgroundColor: '#df3088',
      borderRadius: '15px',
      color: 'white',
      padding: '3px 24px'
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
    }
  }),
);


export default function SimpleTabs() {

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
//Dialog
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloses = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className='setting-page'>
      <Box className='about-mandal'>
        <Card className = 'receipt-main-card'>
          <CardContent>
            <Box> 
              <h2 className='h1-title'> Basic Informastion </h2>
            </Box>
          </CardContent>

          <CardContent>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Basic Information" {...a11yProps(0)} />
                <Tab label="User Roles" {...a11yProps(1)} />
                <Tab label="Users" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
          </CardContent>

          <CardContent>
              <TabPanel value={value} index={0}>
                 <Card className='abc'>
                    <CardContent>
                      <Grid container spacing={2}> 
                        <Grid item xs={12} md={6}>
                          <Box mt={2}>
                              <Typography variant	='body2'>
                                <span className='label'> Name of the Mandal: </span>
                                <TextField
                                      fullWidth
                                      id="outlined-number"
                                      label="Enter Mandal Name Here..."
                                      size='small'
                                      rowsMax="4"
                                      variant="outlined"
                                      />
                              </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Box mt={2}>
                              <Typography variant	='body2'>
                                <span className='label d-block'> Main Image: </span>
                                <input type='file' />
                              </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Box mt={2}>
                              <Typography variant	='body2'>
                                <span className='label d-block'> Mandal Address: </span>
                                <TextField
                                      fullWidth
                                      id="outlined-number"
                                      label="Enter Mandal Address Here..."
                                      size='small'
                                      rowsMax="4"
                                      variant="outlined"
                                      />
                              </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <Box mt={2}>
                            <Typography variant	='body2'>
                              <span className='label d-block'> Registration Number: </span>
                              <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Enter Registration Number Here..."
                                    size='small'
                                    rowsMax="4"
                                    variant="outlined"
                                    />
                            </Typography>
                          </Box>

                        </Grid>

                        <Grid item xs={12}> 
                        <Box mt={2}>
                          <h4 className='m-0'> Social Icons: </h4>
                        </Box> 
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant	='body2'>
                              <span className='label d-block'> Facebook </span>
                              <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Enter Facebook Link Here..."
                                    size='small'
                                    rowsMax="4"
                                    variant="outlined"
                                    />
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid item xs={12} md={6}> 
                        <Box mb={3}>
                            <Typography variant	='body2'>
                              <span className='label d-block'> Instagram </span>
                              <TextField
                                    fullWidth
                                    id="outlined-number"
                                    label="Enter Instagram Link Here..."
                                    size='small'
                                    rowsMax="4"
                                    variant="outlined"
                                    />
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>

                    <CardContent>
                      <Box className='t-right'>
                        <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                            Save
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
              </TabPanel>  
          </CardContent>

            <CardContent style={{padding:0}}>  
              <TabPanel value={value} index={1}>
                 <Card>
                 <CardContent >
                    <Grid container spacing={1}>
                      <Grid item xs={8} sm={10} md={11}lg={11}>
                      <Box mb={1}>
                          <Typography variant	='body2'>
                            <span className='label d-block'> Add User Role </span>
                            <TextField
                                  fullWidth
                                  id="outlined-number"
                                  placeholder="Enter User Role Name Here..."
                                  size='small'
                                  rowsMax="4"
                                  variant="outlined"
                                  />
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid item xs={4} sm={2} md={1} lg={1}> 
                      <Box className='t-right' mt={3}  mb={1}>
                        <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                          Add
                        </Button>
                      </Box>
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <Box mr={1} mb={1}>
                        <FormControl size='small' fullWidth variant="outlined" className={classes.formControl}>
                          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                              Member Name
                          </InputLabel>
                          <Select
                            native                              
                            value={state.age}
                            inputProps={{
                              name: 'User Access Type',
                              id: 'outlined-age-native-simple',
                            }}
                          >
                            <option value="" />
                            <option value={10}> Abhijit Jachak </option>
                            <option value={20}> Pravin Jadhav </option>
                            <option value={30}> Akshay Chidre </option>
                          </Select>
                        </FormControl>  
                        </Box>
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Box mr={2}>
                        <FormControl size='small' fullWidth variant="outlined" className={classes.formControl}>
                          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                              User Access Type
                          </InputLabel>
                          <Select
                            native
                            value={state.age}
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
                        </Box> 
                      </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                <Box className='t-right' mb={2}>
                    <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                      Save
                    </Button>
                  </Box>
                </CardContent>
              </Card>
              </TabPanel>   
            </CardContent>

            <CardContent>
              <TabPanel value={value} index={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}> 
                    <Card className='boxshadow'>
                      <CardContent>
                          <div className='userseditform'>
                            <span className='f-w-500'>Treasure</span>
                            <div className='useredit'>
                              <IconButton> <EditIcon /></IconButton>
                              <IconButton onClick={handleClickOpen}> <DeleteIcon/></IconButton>
                              <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleCloses} />
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                    <Card className='mt-16 addmember m-20 boxshadow'>
                     < CardContent>
                        <TextField   size='small' id="outlined-basic" value='Treasure' variant="outlined" className={classes.TextField}/>
                        <div className={classes.EditUserAccess}>
                          <p className='f-w-500 '>
                            Edit User Access
                          </p>
                          <a href="">Add New</a>
                        </div>
                        <TextField  size='small' id="outlined-basic" placeholder='Type Member Name Here...' variant="outlined" className={classes.TextField}/>
                        <Card  className='mt-16 boxshadow'>
                          <CardContent className={classes.CardContents}>
                              <div className='userseditform'>
                                <span>Yogesh Jadhav </span>
                                <div className='useredit' >
                                   <IconButton className='p-0'><DeleteIcon /></IconButton> 
                                </div>
                                {/* <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleCloses} /> */}
                              </div>
                          </CardContent>
                         
                        </Card>
                        <Card  className='mt-16 boxshadow'>
                          <CardContent className={classes.CardContents}>
                              <div className='userseditform'>
                                <span>Baldev Perdeshi</span>
                                <div className='useredit' >
                                   <IconButton className='p-0'><DeleteIcon /></IconButton> 
                                </div>
                                {/* <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleCloses} /> */}
                              </div>
                          </CardContent>
                         
                        </Card>
         
                        <Box className='t-right mt-16'>
                          <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                            Save
                          </Button>
                        </Box>
                     </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                   <Card className='boxshadow'>
                      <CardContent>
                          <div className='userseditform'>
                            <span className='f-w-500'>Vice President</span>
                            <div className='useredit'>
                              <IconButton> <EditIcon /></IconButton>
                              <IconButton > <DeleteIcon/></IconButton>
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                   <Card className='boxshadow'>
                      <CardContent>
                          <div className='userseditform'>
                            <span className='f-w-500'>Receipt Receiver</span>
                            <div className='useredit'>
                              <IconButton> <EditIcon /></IconButton>
                              <IconButton > <DeleteIcon/></IconButton>
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                   <Card className='boxshadow'>
                      <CardContent>
                          <div className='userseditform'>
                            <span className='f-w-500'>Secretory</span>
                            <div className='useredit'>
                              <IconButton> <EditIcon /></IconButton>
                              <IconButton > <DeleteIcon/></IconButton>
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                </Grid>
                
              </Grid> 
              </TabPanel>
            </CardContent>
        </Card>
      </Box>
    </div>
  );
}
