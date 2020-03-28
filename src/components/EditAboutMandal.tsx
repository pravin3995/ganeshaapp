import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import 'date-fns';
import MUIRichTextEditor from "mui-rte"
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
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
    }
  }),
);

export default function EditAboutMandal() {
  const classes = useStyles()
  const save = (data: any) => {
    console.log(data);
  };
  return (
    <div className='edit-about-mandal main-wrapper'>
      <CardContent className='pt-0' >
        <h2 className='h1-title'> Edit About Mandal </h2>
        <Box>
          <Grid container spacing={3} >
            <Grid item md={6} xs={12}>
              <Box>
                <span className='label'> Name of the Mandal:</span>
                <TextField
                  fullWidth
                  id="outlined-number"
                  placeholder='Enter Name of the mandal'
                  rowsMax="4"
                  variant="outlined"
                />
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box>
                <div className='file-input'>
                  <input type='file' />
                  <span className='button'>Choose</span>
                  <span className='label' data-js-label>No file selected</span>
                </div>
              </Box>
            </Grid>

            <Grid item lg={12} xs={12}>
              <Box>
                <span className='label'> Description of event:</span>
                <div className='editor'>
                  <MUIRichTextEditor
                    label="Type something here.."
                    controls={["title", "bold", "italic", "underline", "link"]}
                    inlineToolbar={true}
                    inlineToolbarControls={["bold", "italic", "underline", "link"]}
                    onSave={save}
                  />
                </div>
              </Box>

              <Box className='t-right' mt={3}>
                <Button variant="outlined" href='/events' size='small' target='_bank' className={classes.button}>
                  Save
                        </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </div>
  )
}

