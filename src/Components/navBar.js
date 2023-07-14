import React, { useEffect, useContext } from "react";
import styles from "../Styling/navbar.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import "../Fonts/sf-pro-display-cufonfonts/SFPRODISPLAYBOLD.OTF";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../App.css';
// import ToggleSwitch from './toggleSwitch';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import Switch from "react-switch";
import { TextToSpeechContext } from "../Context/TextToSpeechContext";
function NavBar() {
    const location = useLocation();
    const { toggleValue, setToggleValue } = useContext(TextToSpeechContext);
    const handleToggleValue = () => {
        setToggleValue(prevState => !prevState);
    }

    return (
        <>
            <div className={`${styles.navheader}`} style={{ display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center' }}>
                <ul className={`${styles.ul}`}>
                    <li className={`${styles.li}`}>
                        <div className={styles.iconButtonContainer}>
                            <NavLink to="/homepage" className={styles.link}>
                                {location.pathname === '/homepage' || window.location.pathname === '/' ? (
                                    <>
                                        <HomeRoundedIcon fontSize="large" color="primary" />
                                        <hr className={styles.iconLine} />
                                    </>
                                ) : (
                                    <HomeOutlinedIcon fontSize="large" />
                                )}
                            </NavLink>
                        </div>
                    </li>
                    <li className={`${styles.li}`}>
                        <div className={styles.iconButtonContainer}>
                            <NavLink to="/eventpage" className={styles.link}>
                                {window.location.pathname === '/eventpage' ? (
                                    <>
                                        <EmojiEventsRoundedIcon fontSize="large" color="primary" />
                                        <hr className={styles.iconLine} />
                                    </>

                                ) : (
                                    <EmojiEventsOutlinedIcon fontSize="large" />
                                )}
                            </NavLink>
                        </div>
                    </li>
                    <li className={`${styles.li}`}>
                        <div className={styles.iconButtonContainer}>
                            <NavLink to="/friendspage" className={styles.link}>
                                {location.pathname === '/friendspage' ? (
                                    <>
                                        <GroupsRoundedIcon fontSize="large" color="primary" />
                                        <hr className={styles.iconLine} />
                                    </>

                                ) : (
                                    <GroupsOutlinedIcon fontSize="large" />
                                )}
                            </NavLink>
                        </div>
                    </li>
                    <li className={`${styles.li}`}>
                        <div className={styles.iconButtonContainer}>

                            <NavLink to="/profile" className={styles.link}>
                                {location.pathname === '/profile' ? (
                                    <>
                                        <AccountCircleIcon fontSize="large" color="primary" />
                                        <hr className={styles.iconLine} />
                                    </>

                                ) : (
                                    <AccountCircleOutlinedIcon fontSize="large" />
                                )}
                            </NavLink>
                        </div>
                    </li>
                </ul>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', left: '80%', top: '3.5%', }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '500px ', marginLeft: 'auto', marginRight: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Inter', color: 'rgb(35, 116, 225)', fontSize: 'medium' }}>
                            <label style={{ marginRight: '10px', marginTop: '5px' }}>Convert Text to Speech</label>
                            <Switch checked={toggleValue} onChange={handleToggleValue} uncheckedIcon={false} checkedIcon={false} onColor={'#b0def5'} onHandleColor={'#368bff'} />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default NavBar;
