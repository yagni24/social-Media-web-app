import React from "react";
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
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
function NavBar() {
    const location = useLocation();
    return (
        <>
    
                <div className={`${styles.navheader}`} style={{ display: 'grid', gridTemplateColumns: '1fr', justifyItems: 'center' }}>
                    <ul className={`${styles.ul}`}>
                        <li className={`${styles.li}`}>
                            <div className={styles.iconButtonContainer}>
                                <NavLink to="/homepage" activeClassName={styles.activeLink} className={styles.link}>
                                    {location.pathname === '/homepage' || window.location.pathname === '/'? (
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
                                <NavLink to="/eventpage" activeClassName={styles.activeLink} className={styles.link}>
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
                                <NavLink to="/friendspage" activeClassName={styles.activeLink} className={styles.link}>
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

                                <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.link}>
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
                </div>
        </>
    )
}
export default NavBar;
