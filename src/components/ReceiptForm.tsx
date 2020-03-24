import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import '../custom.scss'
const img = require('../assets/images/qr.png');
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const styles = {
  paper:{
    padding:'30px',
    borderRadius:'15px'
  },
  TextField : {
    width:'100%',
    marginTop: 26
  },
  AlignMent: {
    display:'flex',
    justifyContent:'center'
  }
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
const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
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
    <DialogTitle id="simple-dialog-title">Scan QR Code</DialogTitle>
    <List>
    <img src={String(img)} alt='a' />
    </List>
  </Dialog>
   );
}
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };


  return (
    <Grid container   style={styles.AlignMent}>
      <Grid item xs={12} md={6}>
         <div  className='receipt-form'>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Receipt Form" {...a11yProps(0)}  className='tab'/>
          <Tab label="Pending Form" {...a11yProps(1)}  className='tab'/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper elevation={1} style={styles.paper}>
          <form className={classes.root} noValidate autoComplete="off">
             <h2 className='heading mt-0'>Receipt Form</h2>
             <div className='iconposition' style={styles.TextField}>
                <TextField id="outlined-basic" label="User Name" variant="outlined" className='w-100'/>
                <InputAdornment position="start" className='icon'>
                    <AccountCircle />
                </InputAdornment>
             </div>
             <div className='iconposition' style={styles.TextField}>
                <TextField id="outlined-basic" label="Email Address" variant="outlined"  className='w-100'/>
                <InputAdornment position="start" className='icon'>
                   <MailIcon />
                </InputAdornment>
             </div>
             <div className='iconposition' style={styles.TextField}>
                <TextField id="outlined-basic" label="Mobile Number" variant="outlined"  className='w-100'/>
                <InputAdornment position="start" className='icon'>
                    <CallIcon />
                </InputAdornment>
             </div>
             <div style={{display:"flex"}}>

              <div className='iconposition' style={styles.TextField}>
                <TextField id="outlined-basic" label="Amount" variant="outlined" className='amount w-100' />
                <InputAdornment position="start" className='icon'>
                  <AttachMoneyIcon />
                </InputAdornment>
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className='date w-100'>
                  <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    label="Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    className='w-100'
                    InputAdornmentProps={{ position: "end" }}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
             </MuiPickersUtilsProvider>
            </div>
            <FormControl component="fieldset">
              <RadioGroup aria-label="position" name="position"  row>
                <FormControlLabel
                  value="end"
                  control={<Radio color="primary" />}
                  label="Cash"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Radio color="primary" />}
                  label="Pending"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Radio color="primary" />}
                  label="UPI"
                  labelPlacement="end"
                  onClick={handleClickOpen}
                />
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
              </RadioGroup>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className='latedate' >
                  <KeyboardDatePicker className='w-100 '
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    label=" late-Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    InputAdornmentProps={{ position: "end" }}
                    onChange={date => handleDateChange(date)}
                  />
                </Grid>
             </MuiPickersUtilsProvider>
             <div className='iconposition' style={styles.TextField}>
               <InputAdornment position="start" className='icon'>
                  <AccountCircle />
               </InputAdornment>
              <FormControl variant="outlined" className='w-100'>
                
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Member
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Yogesh</MenuItem>
                  <MenuItem value={20}>Abhijit</MenuItem>
                  <MenuItem value={30}>Akshay</MenuItem>
                </Select>
              </FormControl>
             </div> 
             <div  className='button'>
                <Button variant="contained" color="primary" >
                    Submit
                </Button>
             </div>
          </form>
      </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card className='pending-card' >
           <CardContent className='card-content'>
              <div className='pending-details'>
                 <div >
                   <Typography  color="textSecondary" gutterBottom className='amount-text'>
                       Name 
                   </Typography>
                   <Typography variant="h5" component="h5" className='pending-name' >
                      Pravin Jadhav
                   </Typography>
                  </div>
                  <div style={{textAlign:'right'}}>
                     <IconButton aria-label="display more actions" edge="end" color="inherit" className='edit-icon' >
                         < EditIcon />
                      </IconButton>
                  </div>
                </div> 
               <Typography color="textSecondary" gutterBottom className='amount-text '>
                   Amount 
               </Typography>
              <Typography variant="h5" component="h5" className='pending-amount ' >
                  3499/-
                 <div  className='due-date'>
                 <Typography color="textSecondary" className='due-date-text' >
                    Due Date  
                 </Typography >
                 <span>24/02/2020</span></div>
              </Typography>
           </CardContent>   
         </Card>
         
      </TabPanel>
   
    </div>
      </Grid>
    </Grid>
  );
}
