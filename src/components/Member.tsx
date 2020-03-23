import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import { Box, WithStyles, withStyles, IconButton, Theme, TextField } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import { styles } from '@material-ui/pickers/views/Calendar/Calendar'
import CloseIcon from '@material-ui/icons/Close'
import Grid, { GridSpacing } from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  button: {
	color: 'white',
    padding: '4px 22px',
    borderRadius: '15px',
	backgroundColor: '#df3088'
  }
});

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
export default function Member() {
	const [open, setOpen] = React.useState(false);
	const [openEdit, setOpenEdit] = React.useState(false);

	const handleClickOpen = () => {
    setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	  };
	
	const handleClickOpenEdit = () => {
		setOpenEdit(true);
		setOpen(false);
	};
	
	const handleCloseEdit = () => {
		setOpenEdit(false);
	  };
	

  const classes = useStyles();

  return (
    <div>
        <Card  variant = 'outlined' className='receipt-main-card'>
			<CardContent>	
				<CardContent >
					<Box display="flex" alignItems="center" justifyContent="space-between">
						<span className='h1-title'>
							Members
						</span>
						<Box display='flex' alignItems='center'>
							<SearchIcon />
							<Button variant="contained" className={classes.button}> Add Member </Button>		
						</Box>
					</Box>
				</CardContent>	
				<Grid container className={classes.root} spacing={2}>
     			 	<Grid item xs={12} sm={6} md={6} lg={4}>
						<CardContent >	
					<Card>
						<CardContent>
							<Box display="flex" justifyContent="space-between">
								<Box className="delete-dialogbox">	
									<DeleteIcon  onClick={handleClickOpen} />								
									<Dialog className="delete-popup" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
										<DialogTitle id="customized-dialog-title" onClose={handleClose}>
											Delete Member
										</DialogTitle>
										<DialogContent >
											<Typography gutterBottom style={{fontWeight: 500 , fontSize: '13px' , textAlign: 'center'}}>
												Are you sure you want to remove this member ?
											</Typography>
											<CardContent >	
												<Card className='t-center'>
													<CardContent>
													<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'  className='member-photo' />	
													<Typography style={{color: 'black' ,fontWeight: 500 , fontSize: '20px', paddingTop: '10px'}}> Abhijit Jachak </Typography>
													<Box className='label t-center' mb={2}> President </Box>
													<Button variant = 'contained' className={classes.button}> 
														Follow
													</Button>
													</CardContent>
												</Card>		
												
											</CardContent>
											<Box className='t-center d-flex' justifyContent='space-evenly' alignItems='center'>
												<Button variant = 'contained' className={classes.button}> 
													Follow
												</Button> 
												<Typography>
													<a href="/events"> Yes, I'am sure </a>
												</Typography>
											</Box>
										</DialogContent>
									</Dialog>
								</Box>

								<Box className="edit-dialogbox" >	
									<EditIcon onClick={handleClickOpenEdit} />							
									<Dialog className="delete-popup" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openEdit}>
										<DialogTitle id="customized-dialog-title" onClose={handleCloseEdit}>
											Edit Member
										</DialogTitle>
									
										<DialogContent >
											<span className='member-photo t-center'  >
												Are you sure you want to edit this member ?
											</span>
											<CardContent >			
												<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg' className='member-photo' />	
												<Box mt={2} mb={2}>
													<span className='label' > Name </span>
													<TextField id="outlined-basic" size='small' label="Enter the Name" variant="outlined" fullWidth />
												</Box>
												<Box mt={1} mb={2}>		
													<span className='label'> Email Address </span>
													<TextField id="outlined-basic" size='small' label="Enter the email" variant="outlined" fullWidth />
												</Box>
												<Box mt={1} mb={1}>
													<span className='label' > Mobile Number </span>
													<TextField id="outlined-basic" size='small' label="Enter the mob no" variant="outlined" fullWidth />
												</Box>
											</CardContent>
										</DialogContent>

										<DialogActions >
											<Button variant = 'contained' className={classes.button}> 
												Save
											</Button> 
										</DialogActions>
									</Dialog>
								</Box>
							</Box>
							<Box className='t-center' >
								<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'  className='member-photo' />
								<Typography variant='h6'> Abhijit Jachak </Typography>
								<Box className='label' mb={2}> President </Box>
								<Button variant = 'contained' className={classes.button}> 
									Follow
								</Button> 
							</Box>
						</CardContent>
					</Card>				
			</CardContent>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4}>
						<CardContent >	
							<Card>
						<CardContent>
							<Box display="flex" justifyContent="space-between">
								<Box className="delete-dialogbox">	
									<DeleteIcon  onClick={handleClickOpen} />								
									<Dialog className="delete-popup" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
										<DialogTitle id="customized-dialog-title" onClose={handleClose}>
											Delete Member
										</DialogTitle>
										<DialogContent >
											<Typography gutterBottom style={{fontWeight: 500 , fontSize: '13px' , textAlign: 'center'}}>
												Are you sure you want to remove this member ?
											</Typography>
											<CardContent >	
												<Card className='t-center'>
													<CardContent>
													<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'  className='member-photo' />	
													<Typography style={{color: 'black' ,fontWeight: 500 , fontSize: '20px', paddingTop: '10px'}}> Abhijit Jachak </Typography>
													<Box className='label t-center' mb={2}> President </Box>
													<Button variant = 'contained' className={classes.button}> 
														Follow
													</Button>
													</CardContent>
												</Card>		
												
											</CardContent>
											<Box className='t-center d-flex' justifyContent='space-evenly' alignItems='center'>
												<Button variant = 'contained' className={classes.button}> 
													Follow
												</Button> 
												<Typography>
													<a href="/events"> Yes, I'am sure </a>
												</Typography>
											</Box>
										</DialogContent>
									</Dialog>
								</Box>

								<Box className="edit-dialogbox" >	
									<EditIcon onClick={handleClickOpenEdit} />							
									<Dialog className="delete-popup" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openEdit}>
										<DialogTitle id="customized-dialog-title" onClose={handleCloseEdit}>
											Edit Member
										</DialogTitle>
									
										<DialogContent >
											<span className='member-photo t-center'  >
												Are you sure you want to edit this member ?
											</span>
											<CardContent >			
												<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg' className='member-photo' />	
												<Box mt={2} mb={2}>
													<span className='label' > Name </span>
													<TextField id="outlined-basic" size='small' label="Enter the Name" variant="outlined" fullWidth />
												</Box>
												<Box mt={1} mb={2}>		
													<span className='label'> Email Address </span>
													<TextField id="outlined-basic" size='small' label="Enter the email" variant="outlined" fullWidth />
												</Box>
												<Box mt={1} mb={1}>
													<span className='label' > Mobile Number </span>
													<TextField id="outlined-basic" size='small' label="Enter the mob no" variant="outlined" fullWidth />
												</Box>
											</CardContent>
										</DialogContent>

										<DialogActions >
											<Button variant = 'contained' className={classes.button}> 
												Save
											</Button> 
										</DialogActions>
									</Dialog>
								</Box>
							</Box>
							<Box className='t-center' >
								<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'  className='member-photo' />
								<Typography variant='h6'> Abhijit Jachak </Typography>
								<Box className='label' mb={2}> President </Box>
								<Button variant = 'contained' className={classes.button}> 
									Follow
								</Button> 
							</Box>
						</CardContent>
					</Card>				
						</CardContent>
					</Grid>
				</Grid>
				</CardContent>
				
		</Card>
   	</div>
  );
}