import React from "react";
import styles from "../Styling/rightSideNav.module.css";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const rightSidenav = ({hasMarginTop,hasMarginBottom,hasMarginLeft,hasMarginRight}) => {
    return (
        <>
            <div className={styles.container} style={{marginTop:hasMarginTop?'58px':'0', marginBottom:hasMarginBottom?'40px':'0',marginLeft:hasMarginLeft?'10px':'0px',marginRight:hasMarginRight?'25px':'0px'}}>
                <div>
                    <Typography style={{
                        color: '#212121',
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal'
                    }}>Suggested Connections</Typography>
                </div>
                <div style={{
                    marginTop: '20px',
                    display: 'grid',
                    gridTemplateColumns: '60px 150px 40px',
                    gridTemplateRows: 'repeat(5,50px)',
                    gridGap: '10px'
                }}>
                    <div style={{ gridRow: '1', gridColumn: '1' }}>
                        <Avatar src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" style={{ width: '45px', height: '45px' }} />
                    </div>
                    <div style={{ gridRow: '1', gridColumn: '2', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#212121',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            letterSpacing: '0.42px'
                        }}>Anushka Sharma</Typography>
                    </div>
                    <div style={{ gridRow: '1', gridColumn: '3', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Follow</Typography>
                    </div>
                    <div style={{ gridRow: '2', gridColumn: '1' }}>
                        <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" style={{ width: '45px', height: '45px' }} />
                    </div>
                    <div style={{ gridRow: '2', gridColumn: '2', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#212121',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            letterSpacing: '0.42px'
                        }}>Yagni Shah</Typography>
                    </div>
                    <div style={{ gridRow: '2', gridColumn: '3', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Follow</Typography>
                    </div>
                    <div style={{ gridRow: '3', gridColumn: '1' }}>
                        <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" style={{ width: '45px', height: '45px' }} />
                    </div>
                    <div style={{ gridRow: '3', gridColumn: '2', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#212121',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            letterSpacing: '0.42px'
                        }}>Bill Gates</Typography>
                    </div>
                    <div style={{ gridRow: '3', gridColumn: '3', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Follow</Typography>
                    </div>
                    <div style={{ gridRow: '4', gridColumn: '1' }}>
                        <Avatar src="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" style={{ width: '45px', height: '45px' }} />
                    </div>
                    <div style={{ gridRow: '4', gridColumn: '2', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#212121',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            letterSpacing: '0.42px'
                        }}>Elon Musk</Typography>
                    </div>
                    <div style={{ gridRow: '4', gridColumn: '3', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Follow</Typography>
                    </div>
                    <div style={{ gridRow: '5', gridColumn: '1' }}>
                        <Avatar src="https://images.unsplash.com/photo-1578305034019-32f5ff2a7be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" style={{ width: '45px', height: '45px' }} />
                    </div>
                    <div style={{ gridRow: '5', gridColumn: '2', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#212121',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            letterSpacing: '0.42px'
                        }}>Virat Kholi</Typography>
                    </div>
                    <div style={{ gridRow: '5', gridColumn: '3', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Follow</Typography>
                    </div>
                </div>
            </div >

        </>
    )
}
export default rightSidenav;