import { Typography, Button } from "@mui/material";
import React from "react";
import styles from "../Styling/events.module.css";
import '../App.css';
import Avatar from "@mui/material/Avatar";
import EveCard from "../Components/eveCard";
const eventAnnonc = () => {
    return (
        <>
            <div className={styles.evecontainer}>
                <Typography style={{
                    color: '#212121',
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal'

                }}>Events Annoncement</Typography>
                <div style={{ display: 'grid', gridTemplate: '20px / 60px 500px 120px 120px', marginTop: '24px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '1',
                        color: '#212121',
                        fontSize: '13px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal'
                    }}>BreakTheBarrier</Typography>
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '2',

                        color: 'rgba(33, 33, 33, 0.75)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: ' 400',
                        lineHeight: 'normal',
                        letterSpacing: '0.42px'
                    }}>or incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Typography>

                    <Button style={{
                        gridColumn: '3',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        border: '1.5px solid #2374E1', color: ' #212121',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Ignore</Button>

                    <Button style={{
                        gridColumn: '4',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        background: '#2374E1', color: ' #FCFCFC',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Enroll</Button>
                </div>
                <div style={{ display: 'grid', gridTemplate: '20px / 60px 500px 120px 120px', marginTop: '24px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '1',
                        color: '#212121',
                        fontSize: '13px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal'
                    }}>BreakTheBarrier</Typography>
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '2',
                        color: 'rgba(33, 33, 33, 0.75)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: ' 400',
                        lineHeight: 'normal',
                        letterSpacing: '0.42px'
                    }}>or incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Typography>

                    <Button style={{
                        gridColumn: '3',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        border: '1.5px solid #2374E1', color: ' #212121',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Ignore</Button>

                    <Button style={{
                        gridColumn: '4',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        background: '#2374E1', color: ' #FCFCFC',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Enroll</Button>
                </div>
                <div style={{ display: 'grid', gridTemplate: '20px / 60px 500px 120px 120px', marginTop: '24px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '1',
                        color: '#212121',
                        fontSize: '13px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal'
                    }}>BreakTheBarrier</Typography>
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '2',
                        color: 'rgba(33, 33, 33, 0.75)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: ' 400',
                        lineHeight: 'normal',
                        letterSpacing: '0.42px'
                    }}>or incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Typography>

                    <Button style={{
                        gridColumn: '3',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        border: '1.5px solid #2374E1', color: ' #212121',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Ignore</Button>

                    <Button style={{
                        gridColumn: '4',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        background: '#2374E1', color: ' #FCFCFC',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Enroll</Button>
                </div>
                <div style={{ display: 'grid', gridTemplate: '20px / 60px 500px 120px 120px', marginTop: '24px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '1',
                        color: '#212121',
                        fontSize: '13px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal'
                    }}>BreakTheBarrier</Typography>
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '2',
                        color: 'rgba(33, 33, 33, 0.75)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: ' 400',
                        lineHeight: 'normal',
                        letterSpacing: '0.42px'
                    }}>or incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Typography>

                    <Button style={{
                        gridColumn: '3',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        border: '1.5px solid #2374E1', color: ' #212121',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Ignore</Button>

                    <Button style={{
                        gridColumn: '4',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        background: '#2374E1', color: ' #FCFCFC',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Enroll</Button>
                </div>
                <div style={{ display: 'grid', gridTemplate: '20px / 60px 500px 120px 120px', marginTop: '24px' }}>
                    <Avatar src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '1',
                        color: '#212121',
                        fontSize: '13px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal'
                    }}>BreakTheBarrier</Typography>
                    <Typography style={{
                        gridColumn: '2',
                        gridRow: '2',
                        color: 'rgba(33, 33, 33, 0.75)',
                        leadingTrim: 'both',
                        textEdge: 'cap',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: ' 400',
                        lineHeight: 'normal',
                        letterSpacing: '0.42px'
                    }}>or incididunt ut labore et dolore magna aliqua. Ut enim ad minim </Typography>

                    <Button style={{
                        gridColumn: '3',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        border: '1.5px solid #2374E1', color: ' #212121',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Ignore</Button>

                    <Button style={{
                        gridColumn: '4',
                        gridRow: '1', borderRadius: ' 114px',
                        padding: '11px 35px',
                        width: '110px',
                        height: '33px',
                        background: '#2374E1', color: ' #FCFCFC',
                        fontSize: '14px',
                        fontFamily: ' Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Enroll</Button>
                </div>
                <Typography style={{
                    marginTop:'52px',
                    marginBottom:'26px',
                    color: '#212121',
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal'
                }}>Suggested Events</Typography>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                <EveCard/>
                <EveCard/>
                <EveCard/>
                </div>
                
            </div>
        </>
    )
}
export default eventAnnonc;