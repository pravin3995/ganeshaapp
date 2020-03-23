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
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current!.offsetWidth);
//   }, []);

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
          <Tab label=" Overview" {...a11yProps(0)} />
          <Tab label=" Create Amount" {...a11yProps(1)} />
          <Tab label=" Amount Spent" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <Card className={classes.Card}>
             <h3 className='m-0'>Current Balance</h3>
             <h2 className='m-0 font-36'>40,00,000</h2>
             <p className='font-14 m-0'>Last Update on 20 feb 2020</p>
             <h4 className='mb-0'>Open Balance: 30,000</h4>
         </Card>
             <div className='billing-history'>
                <div className='billing-heading '>
                <h3 className='mt-30'>Latest Credited Amount</h3>
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
                <div className='t-right mt-16'>
                    <a href="">See All</a>
                </div>
             </div>
             <div className='billing-history'>
            <div className='billing-heading mt-30 mb-16'>
              <h3 className='m-0'>Latest Spent Amount</h3>
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
            <div className='t-right mt-16'>
                 <a href="">See All</a>
            </div>
         </div>
   
      </TabPanel>
      <TabPanel value={value} index={1}>
         <div className='billing-history'>
            <div className='billing-heading mt-16 mb-16'>
              <h3 className='m-0'>Create Amount History</h3>
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
      <TabPanel value={value} index={2}>
      <div className='billing-history'>
            <div className='billing-heading mt-16 mb-16'>
              <h3 className='m-0'>Debit Amount History</h3>
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
