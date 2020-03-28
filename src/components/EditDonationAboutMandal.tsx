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
      padding: '4px 24px'
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
        <h3 className='f-w-500'> Welcome Text</h3>
        <Card>
          <CardContent>
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
                    <span className='label'> Bank Name:</span>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      size='small'
                      rowsMax="4"
                      placeholder='Enter Bank Name'
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <span className='label'> Account Number:</span>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      size='small'
                      placeholder='Enter Account Number'
                      rowsMax="4"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <Grid item md={12} xs={12}>
                  <Grid container spacing={3} >
                    <Grid item xs={6} md={6}>
                      <Box>
                        <span className='label'> Branch Code:</span>
                        <TextField
                          fullWidth
                          id="outlined-number"
                          size='small'
                          placeholder='Enter Branch Number'
                          rowsMax="4"
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Box>
                        <span className='label'> PAN No:</span>
                        <TextField
                          fullWidth
                          id="outlined-number"
                          size='small'
                          placeholder='Enter PAN Number'
                          rowsMax="4"
                          variant="outlined"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid item md={6} xs={12}>
                  <Box>
                    <span className='label'> IFSC Code:</span>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      size='small'
                      placeholder='Enter IFSC '
                      rowsMax="4"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <span className='label'> Mobile Number:</span>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      size='small'
                      placeholder='Enter Mobile Number '
                      rowsMax="4"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <span className='label'> Email Address:</span>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      size='small'
                      placeholder='Enter Email Address'
                      rowsMax="4"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box>
                    <span className='label'> UPI:</span>
                    <TextField
                      fullWidth
                      id="outlined-number"
                      size='small'
                      placeholder='Enter UPI Address'
                      rowsMax="4"
                      variant="outlined"
                    />
                  </Box>
                </Grid>

              </Grid>
              <Box className='t-right' mt={3}>
                <Button variant="contained" href='#' size='small' target='_bank' className={classes.button}>
                  Save
            </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </CardContent>
    </div>
  )
}

