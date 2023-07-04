import React from "react";
import styles from "../Styling/textpost.module.css";
import Avatar from '@mui/material/Avatar';
import EventIcon from '@mui/icons-material/Event';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import CodeIcon from '@mui/icons-material/Code';
import { Typography } from "@mui/material";
import '../App.css'


const TextPost = () => {
    return (
        <>
            <div style={{position:'absolute',top:'10%',left:'35%'}}>
                <div className={`${styles.container}`}>
                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" className={`${styles.Avatar}`} />
                    <textarea
                        id="outlined-textarea"
                        placeholder="what's on your mind?"
                        className={`${styles.textpost}`}
                        rows={5}
                        cols={20}
                    />
                </div>
                <div className={styles.containerSec}>
                    <div className={styles.eventContainer}>
                        <EventIcon color="primary" />
                        <Typography style={{ fontFamily: 'Inter' }}>Events</Typography>
                    </div>
                    <div className={styles.eventContainer}>
                        <PhotoSizeSelectActualIcon color="primary" />
                        <Typography style={{ fontFamily: 'Inter' }}>Photos</Typography>
                    </div>
                    <div className={styles.eventContainer}>
                        <CodeIcon color="primary" />
                        <Typography style={{ fontFamily: 'Inter' }}>Code Snippet</Typography>
                    </div>
                </div>
            </div>

        </>
    )
}
export default TextPost;