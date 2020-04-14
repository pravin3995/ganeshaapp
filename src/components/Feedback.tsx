import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined';
import Paper from '@material-ui/core/Paper';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import Button from '@material-ui/core/Button';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
const style ={
    emoji:{
        fontSize:'50px',
        marginRight: 8
    },
    paper:{
        padding:20,
        borderRadius:'15px',
        // background: '#FAFAFA '
    }
}

export default function MinHeightTextarea() {
  return(
      <div style={style.paper} >     
       <div className='main-wrapper'>
        <h3 className='mt-0'>Share your feedback with us</h3>
        <p>How satisfied are you with overall application</p>
          <div> 
            <EmojiEmotionsOutlinedIcon style={style.emoji}/>
            <MoodBadOutlinedIcon style={style.emoji}/>
            <SentimentDissatisfiedOutlinedIcon style={style.emoji}/>
            <EmojiEmotionsOutlinedIcon style={style.emoji}/>
            <SentimentDissatisfiedIcon style={style.emoji}/>
          </div>
        <p>What do like you most?</p>
        <TextareaAutosize aria-label="minimum height" className='w-100 edit-text' rowsMin={6} placeholder="Write here...." />
        <div  className='button'>
            <Button variant="contained" color="primary" >
                Send
            </Button>
        </div>
     </div>
     </div>
  );
}
