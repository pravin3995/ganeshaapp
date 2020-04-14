import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import { Box } from '@material-ui/core'

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
    // borderRadius: '15px',
    color: 'white',
    padding: '4px 24px'
  },
  seebutton: {
    padding: '1px 12px',
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
  const inputLabel = React.useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
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
    <div className='add-edit-event main-wrapper'>
      
      <CardContent className='pt-0'>
          <CardContent>
            <h3 className='mt-0'>
               Add / Edit Event
            </h3>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} >
                <span className='label'>
                  Name of Events:
              </span>
                <TextField
                  fullWidth
                  id="outlined-number"
                  rowsMax="4"
                  placeholder='Enter Name Here...'
                  variant="outlined"
                />

              </Grid>

              <Grid item xs={12} md={6} >
                <small className='label'>
                  Feautred Image:
                  <div className='file-input'>
                  <input type='file' />
                  <span className='button'>Choose</span>
                  <span className='label' data-js-label>No file selected</span>
                </div>
                </small>
              </Grid>


              <Grid item xs={12} >
                <span className='label'>
                  Description of Events:
            </span>

                <div className='text-editior editor'>
                  <MUIRichTextEditor
                    label="Type something here.."
                    controls={["title", "bold", "italic", "underline", "link"]}
                    inlineToolbar={true}
                    inlineToolbarControls={["bold", "italic", "underline", "link"]}
                    onSave={save}
                    
                  />
                </div>

              </Grid>

              <Grid item xs={6} >
                <span className='label'>
                  Date of Event:
            </span>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                  <Grid>
                    <KeyboardDatePicker
                      autoOk
                      fullWidth
                      variant="inline"
                      inputVariant="outlined"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={date => handleDateChange(date)}
                      className='evnet-date'
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={6} >
                <span className='label'>
                  Location of Event:
            </span>
                <TextField
                  fullWidth
                  id="outlined-number"
                  rowsMax="4"
                  placeholder='Enter Location'
                  variant="outlined"

                />
              </Grid>
              <Grid item xs={12} className='t-right'>
              <Box className='t-right'>
									<Button variant='contained' className={classes.button} size="small"> Save  </Button>
						   </Box>
              </Grid>

            </Grid>

          </CardContent>

      </CardContent>
    </div>
  )
}

