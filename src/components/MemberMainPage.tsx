import React from 'react'
import { makeStyles, createStyles, fade } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import { Box, WithStyles, withStyles, IconButton, Theme, TextField, InputBase } from '@material-ui/core'
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

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
	minWidth: 275,
	padding:' 10px'
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
    // borderRadius: '15px',
	backgroundColor: '#df3088',
  },
  searchIcon: {
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  },
  search: {
	position: 'relative',
	marginRight:60,
	borderRadius: theme.shape.borderRadius,
	backgroundColor: fade(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: fade(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	// width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  },
  inputRoot: {
	color: 'inherit',
  },
  inputInput: {
	padding: theme.spacing(1, 1, 1, 0),
	// vertical padding + font size from searchIcon
	paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
	transition: theme.transitions.create('width'),
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  width: '12ch',
	  '&:focus': {
		width: '20ch',
	  },
	},
  },
}),
);

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
        <div className='receipt-main-card'>
			<CardContent  className='pb-0 pt-0'>	
				<CardContent className='pt-0 pb-0' >
					<Box display="flex" alignItems="center" flexWrap='wrap' justifyContent="space-between">
						<h4 className='h1-title '>
							Members
						</h4>
						<Box display='flex' alignItems='center'   justifyContent="space-between">
							<div className={classes.search}>
								<div className={classes.searchIcon}>
								<SearchIcon />
								</div>
								<InputBase
								placeholder="Search Member…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
								/>
							</div>
							<Button variant="contained" className={classes.button}> Add </Button>		
						</Box>
					</Box>
				</CardContent>	
				<Grid container className={classes.root} spacing={2}>
     			 	<Grid item xs={6} sm={4} md={4} lg={3}>
						
					<Card>
						<CardContent>
							<Box display="flex" justifyContent="space-between" className='mb-10'>
								<Box className="delete-dialogbox dialogbox">	
									<DeleteIcon  onClick={handleClickOpen} className='member_icon pr-0' />								
									<Dialog className="delete-popup" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
										<DialogTitle id="customized-dialog-title" onClose={handleClose} >
											<h5 className='m-0'>Delete Member</h5>
										</DialogTitle>
										<DialogContent className='pt-0'  >
											{/* <Typography gutterBottom style={{fontWeight: 500,margin:0 , fontSize: '13px' , textAlign: 'center'}}>
												Are you sure you want to remove this member ?
											</Typography> */}
											<CardContent className='pt-0' >	
													
													<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'  className='member-photo mb-10' />	
													<Typography className='t-center'> Yogesh Jadhav </Typography>
													<Box className='label t-center'> President </Box>
														{/* <Button variant = 'contained' className={classes.button}> 
															Follow
														</Button> */}
													
											</CardContent >
											<Box className='t-center d-flex' justifyContent='space-evenly' alignItems='center'>
												<Button variant = 'contained' className={classes.button}> 
													Cancel
												</Button> 
												<Typography className='delete-message'>
													<a href="/events"> Yes, I'am sure </a>
												</Typography>
											</Box>
										</DialogContent>
									</Dialog>
								</Box>

								<Box className="edit-dialogbox dialogbox " >	
									<EditIcon onClick={handleClickOpenEdit} className="member_icon"/>							
									<Dialog className="delete-popup" onClose={handleClose} aria-labelledby="customized-dialog-title" open={openEdit}>
										<DialogTitle id="customized-dialog-title" onClose={handleCloseEdit}>
											<h5 className='m-0 h1'>Edit Member</h5>
										</DialogTitle>
									
										<DialogContent className='pb-0 pt-0'>
											{/* <p className='member-photo t-center f-14 m-0'  >
												Are you sure you want to edit this member ?
											</p> */}
											<CardContent className='p-0'>			
												<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg' className='member-photo' />	
												
												<div className='input-placeholder m-16'>
													<span className='label' > Name</span>
													<TextField id="outlined-basic"  size='small' placeholder="Enter the Name"  variant="outlined"  className='w-100'/>
												</div>
												<div className='input-placeholder m-16'>
													<span className='label' > Email Address</span>
													<TextField id="outlined-basic"  size='small' placeholder="Enter the email"  variant="outlined"  className='w-100'/>
												</div>
												<div className='input-placeholder m-16'>
													<span className='label' > Mobile Number</span>
													<TextField id="outlined-basic"  size='small' placeholder="Enter the mob no"  variant="outlined"  className='w-100'/>
												</div>
												<div className='t-right m-16'>
													<Button  variant = 'contained' className={classes.button}> 
														Save
													</Button> 
												</div>
											</CardContent>
										</DialogContent>
									</Dialog>
								</Box>
							</Box>
							<Box className='t-center' >
								<Avatar alt = 'Jay Ganesh' src = 'https://i.pinimg.com/originals/6d/a6/03/6da6030949f48ddd94d4ce117da336d5.jpg'  className='member-photo mb-10' />
								<h4 className='mb-0 f-14'> Abhijit Jachak </h4>
									<Box className='label' mb={2}> President </Box>
								<Button variant = 'contained' className={classes.button}> 
									Follow
								</Button> 
							</Box>
						</CardContent>
					</Card>				
					</Grid>
						</Grid>
				</CardContent>
				
		</div>
   	</div>
  );
}