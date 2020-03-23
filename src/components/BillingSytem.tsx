import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, CardContent, TextField, Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NativeSelect from '@material-ui/core/NativeSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';

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
//table
function createData(name: string, date: string, amount: number, quantity: number) {
  return { name, date, amount, quantity };
} 
const rows = [
  createData('Frozen yoghurt', '20-feb', 6.0, 24),
  createData('Ice cream sandwich', '20-feb', 9.0, 37),
  createData('Eclair', '20-feb', 16.0, 24),
  createData('Cupcake', '20-feb', 3.7, 67),
  createData('Gingerbread', '20-feb', 16.0, 49),
];
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  Card:{
      padding:20,
      boxShadow:' 0px 7px 30px 0px rgba(77, 84, 93, 0.08), 0px 9px 30px 0px rgba(0, 177, 179, 0.08), 0px 9px 1px -1px rgba(54, 98, 154, 0.08)!important'
  },
  table: {
    minWidth: 300,
  },
  input:{
    padding:10,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    backgroundColor: '#df3088',
    borderRadius: '15px',
    color: 'white',
    padding: '3px 24px'
  }
}));
//tooltip
const useStylesBootstrap = makeStyles((theme: Theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize:14
  },
}));
function BootstrapTooltip(props: TooltipProps) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
 // The first commit of Material-UI
 const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  const handleChanges = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label=" Billing System" {...a11yProps(0)} />
          <Tab label=" Billing History" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <Card className={classes.Card}>
             <h3 className='mb-0'>Billing Details</h3>
             <CardContent className='p-16'>
                <Grid container  spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Item Name"
                            fullWidth
                        />
                     </Grid>
                     <Grid item xs={12} md={6} lg={6}>
                        <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Amount"
                            fullWidth
                        />
                     </Grid>
                     <Grid item xs={6} md={6} lg={6}>
                        <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Quantity"
                            fullWidth
                        />
                     </Grid>
                     <Grid item xs={6} md={6} lg={6}>
                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    autoOk
                                    variant="inline"
                                     size="small"
                                    inputVariant="outlined"
                                    format="MM/dd/yyyy"
                                    fullWidth
                                    placeholder='Date'
                                    value={selectedDate}
                                    InputAdornmentProps={{ position: "start" }}
                                    onChange={date => handleDateChange(date)}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                     </Grid>
                     <Grid item xs={12} md={12} lg={12}>
                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <FormControl variant="outlined" className='w-100 select-wrapper'>
                                    <InputLabel  ref={inputLabel} htmlFor="outliniveed-age-nat-simple" className='transform'>
                                         Concerned Member or person
                                    </InputLabel>
                                        <Select
                                            native
                                            value={state.age}
                                            onChange={handleChanges('age')}
                                            labelWidth={labelWidth}
                                            fullWidth
                                            className='slectbox'
                                            inputProps={{
                                                name: 'age',    
                                                id: 'outlined-age-native-simple',
                                            }}
                                            >
                                            <option value="" />
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                    </Select>
                                </FormControl>
                              
                            </Grid>
                        </MuiPickersUtilsProvider>
                     </Grid>
                     <Grid item xs={12}>
                        <Box className='t-right'>
                              <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                                save
                              </Button>
                          </Box> 
                     </Grid>
                 </Grid>    
             </CardContent>
             <div className='create-amount border-top'>
                <h3 className='mb-0'>Create Amount</h3>
                <CardContent className='p-16'>
                <Grid container  spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Devotee / Sponser"
                            fullWidth
                        />
                     </Grid>
                     <Grid item xs={6} md={6} lg={6}>
                        <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Amount"
                            fullWidth
                        />
                     </Grid>
                     <Grid item xs={6} md={6} lg={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <FormControl variant="outlined" className='w-100 select-wrapper'>
                                        <InputLabel  ref={inputLabel} htmlFor="outliniveed-age-nat-simple" className='transform'>
                                            Type
                                        </InputLabel>
                                            <Select
                                                native
                                                value={state.age}
                                                onChange={handleChanges('age')}
                                                labelWidth={labelWidth}
                                                className=' slectbox'
                                                fullWidth  
                                                inputProps={{
                                                    name: 'age',    
                                                    id: 'outlined-age-native-simple',
                                                }}
                                                >
                                                <option value="" />
                                                <option value={10}>Devotee</option>
                                                <option value={20}>Sponser</option>
                                        </Select>
                                    </FormControl>
                                  
                                </Grid>
                            </MuiPickersUtilsProvider>
                     </Grid>
                     <Grid item xs={12} md={6} lg={6 }>
                     <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Mobile Number"
                            fullWidth
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <Box className='t-right'>
                              <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                                save
                              </Button>
                          </Box> 
                     </Grid>
                 </Grid>    
             </CardContent>
             </div>
             <div className='opening-amount border-top'>
                <div className='opening-heading mt-16'>
                  <h3>Opening Amount</h3>
                 <BootstrapTooltip title="The Amount Can be updated once.">
                     <a href=""  className='ml-10'> <HelpOutlineIcon/></a>
                </BootstrapTooltip>
                </div>
                <CardContent className='p-16'>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            placeholder="Amount"
                            fullWidth
                        />
                     </Grid>
                       <Grid item xs={12}>
                        <Box className='t-right'>
                              <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                                save
                              </Button>
                          </Box> 
                     </Grid>
                 </Grid>    
                </CardContent>
             </div>
                <div className='balance border-top'>
                  <h3 className='mb-0'>Balance</h3>
                  <h2 className='m-0 font-30'>30,00,000</h2>
                </div>
   
         </Card>
         
      </TabPanel>
      <TabPanel value={value} index={1}>
         <div className='billing-history'>
            <div className='billing-heading mt-16 mb-16'>
              <h3 className='m-0'>Billing History</h3>
              <a href=""  className='ml-10'> <SearchTwoToneIcon/></a>
            </div>
            <Card className={classes.Card}>
                <CardContent className='p-0'>
                  <TableContainer >
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                     </Table>
                  </TableContainer>
                </CardContent>
            </Card>
         </div>
         <div className='billing-history'>
            <div className='billing-heading mt-30 mb-16'>
              <h3 className='m-0'>Credit History</h3>
              <a href=""  className='ml-10'> <SearchTwoToneIcon/></a>
            </div>
            <Card className={classes.Card}>
                <CardContent className='p-0'>
                  <TableContainer >
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Item Name</TableCell>
                          <TableCell align="right">Date</TableCell>
                          <TableCell align="right">Amount</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                     </Table>
                  </TableContainer>
                </CardContent>
            </Card>
         </div>
   
      </TabPanel>
    </div>
  );
}
