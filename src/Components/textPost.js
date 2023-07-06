import React from "react";
import styles from "../Styling/textpost.module.css";
import Avatar from '@mui/material/Avatar';
import EventIcon from '@mui/icons-material/Event';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import CodeIcon from '@mui/icons-material/Code';
import { Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import '../App.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextPost = () => {
    const [sendIcon, setsendIcon] = useState(false);
    // const [showAlert, setshowAlert] = useState(false);
    // const [textareaValue, setTextareaValue] = useState();
    const handleTextareaChange = (e) => {
        const textValue = e.target.value;
        if (textValue.length > 0) {
            setsendIcon(true);
        }
        else {
            setsendIcon(false);
        }
    }
    const handleButtonClick = () => {
        toast('Posted Successfully!');
        const textArea = document.getElementById('outlined-textarea');
        textArea.value = '';
        setsendIcon(false);
       
    }
    return (
        <>
            <div style={{ position: 'absolute', top: '10%', left: '35%' }}>
                <div className={`${styles.container}`}>
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" className={`${styles.Avatar}`} />
                    <>
                        <textarea
                            id="outlined-textarea"
                            placeholder="what's on your mind?"
                            className={`${styles.textpost}`}
                            rows={5}
                            cols={20}
                            onChange={handleTextareaChange}

                        />
                        {sendIcon && <SendIcon onClick={handleButtonClick} style={{ position: 'absolute', left: '90%', top: '31%', cursor: 'pointer' }} color="primary" />}
                        <ToastContainer autoClose={1000} hideProgressBar={true} position="top-right" />
                    </>

                </div>
                <div className={styles.containerSec}>
                    <div className={styles.eventContainer} style={{ cursor:'pointer' }}>
                        <EventIcon color="primary" />
                        <Typography style={{ fontFamily: 'Inter' }}>Events</Typography>
                    </div>
                    <div className={styles.eventContainer} style={{ cursor:'pointer' }}>
                        <PhotoSizeSelectActualIcon color="primary" />
                        <Typography style={{ fontFamily: 'Inter' }}>Photos</Typography>
                    </div>
                    <div className={styles.eventContainer} style={{ cursor:'pointer' }}>
                        <CodeIcon color="primary" />
                        <Typography style={{ fontFamily: 'Inter' }}>Code Snippet</Typography>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TextPost;