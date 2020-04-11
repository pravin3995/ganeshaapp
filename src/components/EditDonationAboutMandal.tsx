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
  
    label: {
      fontSize: '13px'
    }
  }),
);

export default function EditAboutMandal() {
  const classes = useStyles();
  const save = (data: any) => {
    console.log(data);
  };
  return (
    <div className='edit-donation-about-mandal main-wrapper'>
      <CardContent className="pt-0">
        <h2 className='h1-title'> Edit Donations Information </h2>
        <h4 className='f-w-500 mb-0'> Welcome Text</h4>
        <div>
            <Box>
              <Grid container spacing={3} >
                <Grid item xs={12}>
                  <Box>
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
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    
                    <div className='input-placeholder'>
                    <span className='label'> Bank Name:</span>
                        <TextField id="outlined-basic" placeholder="Bank Name" variant="outlined"  className='w-100'/>
                    </div>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <div className='input-placeholder'>
                      <span className='label'>Account Number:</span>
                          <TextField id="outlined-basic" placeholder="Enter Account Name" variant="outlined"  className='w-100'/>
                    </div>
                  </Box>
                </Grid>

                <Grid item md={12} xs={12}>
                  <Grid container spacing={3} >
                    <Grid item xs={12} md={6}>
                      <Box>
                        <div className='input-placeholder'>
                            <span className='label'>Branch Code:</span>
                            <TextField id="outlined-basic" placeholder="Enter Branch Code Name" variant="outlined"  className='w-100'/>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <div className='input-placeholder'>
                            <span className='label'>PAN No:</span>
                            <TextField id="outlined-basic" placeholder="Enter PAN No " variant="outlined"  className='w-100'/>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item md={6} xs={12}>
                  <Box>
                      <div className='input-placeholder'>
                          <span className='label'>IFSC Code:</span>
                          <TextField id="outlined-basic" placeholder="Enter IFSC Code " variant="outlined"  className='w-100'/>
                      </div>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <div className='input-placeholder'>
                        <span className='label'>Mobile Number:</span>
                        <TextField id="outlined-basic" placeholder="Enter Mobile Number " variant="outlined"  className='w-100'/>
                    </div>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <div className='input-placeholder'>
                        <span className='label'> Email Address:</span>
                        <TextField id="outlined-basic" placeholder="Enter Email Address " variant="outlined"  className='w-100'/>
                    </div>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <div className='input-placeholder'>
                        <span className='label'> UPI:</span>
                        <TextField id="outlined-basic" placeholder="Enter UPI Address " variant="outlined"  className='w-100'/>
                    </div>
                  </Box>
                </Grid>

              </Grid>
              <Box className='t-right' mt={3}>
                <Button variant="contained" href='#' color="primary" size='small' target='_bank' className='button'>
                  Save
            </Button>
              </Box>
            </Box>
        </div>
      </CardContent>
    </div>
  )
}

