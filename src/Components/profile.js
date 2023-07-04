import React from "react";
import probanner from "../images/probanner.png";
import Avatar from "@mui/material/Avatar";
import { Typography, Button } from "@mui/material";
import EveCard from "../Components/eveCard";
import styles from "../Styling/profile.module.css";
import Connections from "../Components/connections";
const profile = () => {
    return (
        <>
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', width: '906px', height: '206px', marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
                <img src={probanner} style={{ borderRadius: '8px', backgroundSize: 'cover', imageRendering: 'crisp-edges', width: '905px', height: '186px' }} />
                <Avatar style={{
                    width: '120px', height: '120px',
                    position: 'absolute', zIndex: 1, border: '3px solid #FCFCFC ', top: '70%', left: '5%'
                }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="Travis" />
                <Typography style={{
                    position: 'absolute', top: '98%', left: '20%',
                    color: '#000',
                    fontSize: '20px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal',
                    letterSpacing: '0.8px'
                }}>David Goggins</Typography>
                <div style={{ display: 'grid', gridTemplate: '20px/ 30px 100px 30px 150px', position: 'absolute', top: '115%', left: '20%' }}>
                    <Typography style={{
                        gridRow: '1', gridColumn: '1',
                        color: '#2374E1',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        letterSpacing: '0.56px'
                    }}>55</Typography>
                    <Typography style={{
                        gridRow: '1', gridColumn: '2',
                        color: '#000000',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        letterSpacing: '0.56px'
                    }}>Connections</Typography>
                    <Typography style={{
                        gridRow: '1', gridColumn: '3',
                        color: '#2374E1',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        letterSpacing: '0.56px'
                    }}>03</Typography>
                    <Typography style={{
                        gridRow: '1', gridColumn: '4',
                        color: '#000000',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        letterSpacing: '0.56px'
                    }}>Enrolled Events</Typography>

                </div>
                <Button style={{
                    borderRadius: '114px',
                    background: '#2374E1', width: '110px',
                    padding: ' 8px 35px', color: '#FCFCFC', fontSize: '14px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: 'normal',
                    position: 'absolute',
                    top: '98%',
                    right: '9%'
                }}>Edit</Button>
            </div >
            <div className={styles.proContainer}>
            <Typography style={{
                    margin:'26px',
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
                <div style={{position:'absolute' ,top:'90%',left:'24%'}}>
                    <Connections/>
                </div>
            </div>
            
        </>
    )
}
export default profile