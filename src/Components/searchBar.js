import React from "react";
import styles from "../Styling/searchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import '../App.css';
const searchBar = () => {
    return (
        <>
               <div style={{ position: 'relative', display: 'inline-block' }}>
            <textarea
                style={{
                    width: '370px',
                    height: '41px',
                    borderRadius: '19.9px',
                    background: "#EDEDED",
                    border: 'none',
                    outline: 'none',
                    paddingLeft: '30px' // Add padding to accommodate the icon
                }}
                className={styles.input}
                placeholder="Search"
            />
            <SearchIcon
                style={{
                    position: 'absolute',
                    top: '70%',
                    left: '10px',
                    paddingTop:'15px',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none' // Ensure the icon doesn't interfere with textarea interactions
                }}
                className={styles.searchicon}
            />
        </div>
        </>
    )
}
export default searchBar;