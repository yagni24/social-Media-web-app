import React from "react";
import styles from '../Styling/connections.module.css'
import { Typography } from "@mui/material";
import SearchBar from "../Components/searchBar";
// import RightSideNav from "../Components/rightSidenav";
import Avatar from "@mui/material/Avatar";
const connection = ({addMarginTop}) => {
    return (
        <>
            <div className={styles.container} style={{ paddingTop: '30px', display: 'flex',marginTop:addMarginTop?'58px':'0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '30px 150px 500px', gridTemplateRows: '20px' }}>
                    <Typography style={{
                        color: '#2374E1',
                        fontSize: '18px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        gridRow: '1',
                        gridColumn: '1',
                        padding: '10px'
                    }}>23</Typography>
                    <Typography style={{
                        color: '#212121',
                        fontSize: '18px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        gridRow: '1',
                        gridColumn: '2',
                        padding: '10px'
                    }}>Connections</Typography>
                    <SearchBar style={{
                        gridRow: '1',
                        gridColumn: '3'
                    }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '60px 250px 50px', gridTemplateRows: 'repeat(5,25px 25px)', marginLeft: '20px', marginTop: '80px'}}>
                        <div style={{ gridRow: '1', gridColumn: '1'}}>
                        <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" style={{  width: '45px', height: '45px' }} />
                        </div>
                        <div style={{ gridRow: '1', gridColumn: '2'}}>
                        <Typography style={{fontFamily: 'Inter' }}>Travis Goggins</Typography>
                        </div>
                        <div style={{
                            gridRow: '2', gridColumn: '2'}}>
                        <Typography style={{
                             fontFamily: 'Inter', color: 'rgba(33, 33, 33, 0.72)',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontSize: '14px',
                            
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}>n reprehenderit in voluptate velit esse cill</Typography>
                        </div>
                        <div style={{gridColumn:'3',gridRow:'1'}}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Unfollow</Typography>
                        </div>
                        <div style={{ gridRow: '4', gridColumn: '1'}}>
                        <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" style={{  width: '45px', height: '45px' }} />
                        </div>
                        <div style={{ gridRow: '4', gridColumn: '2'}}>
                        <Typography style={{fontFamily: 'Inter' }}>Travis Goggins</Typography>
                        </div>
                        <div style={{
                            gridRow: '5', gridColumn: '2'}}>
                        <Typography style={{
                             color: 'rgba(33, 33, 33, 0.72)',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}>n reprehenderit in voluptate velit esse cill</Typography>
                        </div>
                        <div style={{gridColumn:'3',gridRow:'4'}}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Unfollow</Typography>
                        </div>
                        <div style={{ gridRow: '7', gridColumn: '1'}}>
                        <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" style={{  width: '45px', height: '45px' }} />
                        </div>
                        <div style={{ gridRow: '7', gridColumn: '2'}}>
                        <Typography style={{fontFamily: 'Inter' }}>Travis Goggins</Typography>
                        </div>
                        <div style={{
                            gridRow: '8', gridColumn: '2'}}>
                        <Typography style={{
                            color: 'rgba(33, 33, 33, 0.72)',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}>n reprehenderit in voluptate velit esse cill</Typography>
                        </div>
                        <div style={{gridColumn:'3',gridRow:'7'}}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Unfollow</Typography>
                        </div>
                        <div style={{ gridRow: '10', gridColumn: '1'}}>
                        <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" style={{  width: '45px', height: '45px' }} />
                        </div>
                        <div style={{ gridRow: '10', gridColumn: '2'}}>
                        <Typography style={{fontFamily: 'Inter' }}>Travis Goggins</Typography>
                        </div>
                        <div style={{
                            gridRow: '11', gridColumn: '2'}}>
                        <Typography style={{
                            color: 'rgba(33, 33, 33, 0.72)',
                            leadingTrim: 'both',
                            textEdge: 'cap',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal'
                        }}>n reprehenderit in voluptate velit esse cill</Typography>
                        </div>
                        <div style={{gridColumn:'3',gridRow:'10'}}>
                        <Typography style={{
                            color: '#2374E1',
                            fontSize: '14px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            letterSpacing: '0.42px'
                        }}>Unfollow</Typography>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default connection;