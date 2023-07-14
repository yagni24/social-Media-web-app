import { Avatar, Typography, Divider } from "@mui/material";
import React from "react";
import '../App.css';
import probanner from "../images/probanner.png";
import GroupIcon from '@mui/icons-material/Group';
import styles from "../Styling/profileSideNav.module.css";
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useSpeechSynthesis } from "react-speech-kit";
import { TextToSpeechContext } from "../Context/TextToSpeechContext";
import { useContext } from "react";
const ProfileSideNav = () => {
    const { toggleValue } = useContext(TextToSpeechContext);
    const { speak } = useSpeechSynthesis();
    const textToSpeech = (value) => {
       if(toggleValue===true){
        speak({ text: value });
       }
    }
    const handleMouseOverName = () => { textToSpeech('david goggins'); }
    const handleMouseConnections = () => { textToSpeech('Connections'); }
    const handleMouseSharedConn = () => { textToSpeech('Connections Shared with people')}
    const handleMouseOverEvents = () => { textToSpeech('Events'); }
    const handleMouseOverEventText = () => { textToSpeech('Total enrolled events'); }
    return (
        <>
            <div className={styles.profileContainer}>
                <div style={{ position: 'relative' }}>
                    <img alt="" src={probanner} className={styles.proBanner} />
                    <Avatar style={{
                        width: '95px', height: '95px',
                        position: 'absolute', top: '62%', left: '35%', zIndex: 1, border: '3px solid #FCFCFC '
                    }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Travis" />
                    <Typography onMouseEnter={handleMouseOverName} style={{
                        position: 'absolute', top: '139%',
                        left: '28%',
                        color: '#000',
                        fontSize: '20px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        letterSpacing: '0.8px'
                    }} >David Goggins</Typography>
                    <div style={{ position: 'absolute', top: '180%', left: '5%', display: 'grid', gridTemplateColumns: '35px 250px 20px', gridTemplateRows: '20px 30px', alignItems: 'start' }}>
                        <GroupIcon />
                        <Typography
                        onMouseEnter={handleMouseConnections}
                            style={{
                                color: '#212121',
                                fontSize: '18px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal',
                            }}
                        >
                            Connections
                        </Typography>
                        <Typography onMouseEnter={handleMouseSharedConn} style={{ gridColumn: '2', gridRow: '2', color: 'rgba(33, 33, 33, 0.72)', fontFamily: 'Inter' }}>
                            Connection shared with people
                        </Typography>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '20px',
                            fontFamily: 'Inter',
                            fontStyle: 'Bold',
                            fontWeight: '600',
                            lineHeight: 'normal'
                        }}>
                            54
                        </Typography>
                    </div>
                    <div style={{ position: 'absolute', top: '240%', left: '5%', display: 'grid', gridTemplateColumns: '35px 250px 20px', gridTemplateRows: '20px 30px', alignItems: 'start' }}>
                        <EventNoteIcon />
                        <Typography
                        onMouseEnter={handleMouseOverEvents}
                            style={{
                                color: '#212121',
                                fontSize: '18px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal',
                            }}
                        >
                            Events
                        </Typography>
                        <Typography  onMouseEnter={handleMouseOverEventText} style={{ gridColumn: '2', gridRow: '2', color: 'rgba(33, 33, 33, 0.72)', fontFamily: 'Inter' }}>
                            Total enrolled events
                        </Typography>
                        <Typography  style={{
                            color: '#2374E1',
                            fontSize: '20px',
                            fontFamily: 'Inter',
                            fontStyle: 'Bold',
                            fontWeight: '600',
                            lineHeight: 'normal'
                        }}>
                            03
                        </Typography>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <Divider style={{ marginTop: '275px' }} />
                </div>
                <div>
                    <Typography style={{
                        color: 'rgba(33, 33, 33, 0.72)',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        margin: '20px'
                    }}>Pages</Typography>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '50px 100px', gridTemplateRows: '50px 50px', margin: '20px' }}>
                    <GroupIcon style={{ gridRow: '1', gridColumn: '1' }} />
                    <EventNoteIcon style={{ gridRow: '2', gridColumn: '1' }} />
                    <Typography  onMouseEnter={handleMouseConnections} style={{ gridRow: '1', gridColumn: '2', fontFamily: 'Inter' }}>Connections</Typography>
                    <Typography  onMouseEnter={handleMouseOverEvents} style={{ gridRow: '2', gridColumn: '2', fontFamily: 'Inter' }}>Events</Typography>
                </div>
                <div style={{ position: 'relative' }}>
                    <Divider style={{ marginTop: '10px' }} />
                </div>
                <div>
                    
                    <Typography   style={{
                        color: 'rgba(33, 33, 33, 0.72)',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        margin: '20px'
                    }}>Recommendations</Typography>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '60px 250px', gridTemplateRows: '25px 25px', marginLeft: '20px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" style={{ gridRow: '1', gridColumn: '1', width: '45px', height: '45px' }} />
                    <Typography style={{ gridRow: '1', gridColumn: '2', fontFamily: 'Inter' }}>Travis Goggins</Typography>
                    <Typography  style={{
                        gridRow: '2', gridColumn: '2', fontFamily: 'Inter', color: 'rgba(33, 33, 33, 0.72)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',

                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>n reprehenderit in voluptate velit esse cill</Typography>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '60px 250px', gridTemplateRows: '25px 25px', marginLeft: '20px', marginTop: '30px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1635324236775-868d3680b65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80" style={{ gridRow: '1', gridColumn: '1', width: '45px', height: '45px' }} />
                    <Typography style={{ gridRow: '1', gridColumn: '2', fontFamily: 'Inter' }}>Elon Musk</Typography>
                    <Typography   style={{
                        gridRow: '2', gridColumn: '2', fontFamily: 'Inter', color: 'rgba(33, 33, 33, 0.72)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',

                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>n reprehenderit in voluptate velit esse cill</Typography>
                </div>

            </div>
        </>
    )
}

export default ProfileSideNav;
