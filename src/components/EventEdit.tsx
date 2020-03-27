import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns'
import MUIRichTextEditor from "mui-rte"
import './../custom.scss'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles({
  root: {
    minWidth: 275,	
    padding: '16px 0'
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
	mb: {
		marginBottom: 20
	},
  
  button: {
    backgroundColor: '#df3088',
    borderRadius: '15px',
    color: 'white',
    padding: '4px 24px'
  },
	seebutton: {
		padding: '1px 12px' ,
		color: 'black',
		background: 'white'
	}
})

export default function Eventedit() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }
	const classes = useStyles()
  const inputLabel  =  React.useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth]  =  React.useState(0)
  const save = (data: any) => {
    console.log(data);
  };
  
	const max = {
		maxWidth: '440px',
		fontFamily: 'Arial',
		margin: '50px auto 50px auto',
		paddong: '20px'
	}

  return (
		<div className='add-edit-event'>		
		  	<CardContent className='pb-0 pt-0' >
				<h2  className='h1-title'>
					Add / Edit Event
				</h2>			

				</CardContent>
        
        <CardContent className='pt-0'>
          <Card>
            <CardContent>
            <Grid container spacing={3}>
          <Grid  item xs={12} md={6} >
          <span className='label'>
              Name of Events:
              </span>  
              <TextField
                fullWidth
                id="outlined-number"
                size='small'
                rowsMax="4"
                placeholder='Enter Name Here...'
                variant="outlined"
                />               
            
          </Grid>

          <Grid  item xs={12} md={6} >
          <small className='label'>
            Feautred Image:
            <input type="file" className='d-block' />              
          </small>
          </Grid>


          <Grid  item xs={12} >
            <span className='label'>
              Description of Events:
            </span>
  
          <div >
                <MUIRichTextEditor
                  onSave={save}
                  inlineToolbar={true}
                  label="Type something here..."
                />  
              </div>              
         
          </Grid>

          <Grid  item xs={6} >           
            <span className='label'>
            Date of Event:
            </span>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid>
                <KeyboardDatePicker
                autoOk
                fullWidth
                size = 'small'
                variant="inline"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={date => handleDateChange(date)}
                />
              </Grid>
              </MuiPickersUtilsProvider>
          </Grid>

          <Grid  item xs={6} >
            <span className='label'>
              Location of Event:
            </span>
            <TextField
              fullWidth
              id="outlined-number"
              size='small'
              rowsMax="4"
              placeholder='Enter Location'
              variant="outlined"
            
              />
          </Grid>
          <Grid  item xs={12} className='t-right'>
          <Button variant="contained" href='#' size='small' target='_bank' className={classes.button}>
              Save
            </Button>            
          </Grid>

        </Grid>
       
            </CardContent>
          </Card>
       
        </CardContent>
		</div>
  )
}

