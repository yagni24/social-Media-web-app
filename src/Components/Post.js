import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardActionArea, CardMedia, Typography, CardContent, CardActions } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import styles from '../Styling/post.module.css'
import { fetchData } from "../Redux/Actions/postApiAction";
import '../App.css';
// import { Link } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import Avatar from "@mui/material/Avatar";
import postlogo from "../images/postlogo.png";
import postimg from "../images/postimg.png";
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
const Post = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isFollow, setIsFollowed] = useState(false);
    const handleIcon = () => {
        setIsFavorite(prevState => !prevState);
    }
    const handleStatus = () => {
        setIsFollowed(prevState => !prevState);
    }
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.post);
//    console.log("postdata:",data)
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    // const { speak } = useSpeechSynthesis();
    // const textToSpeech=(value)=>{
    //     speak({text:value})
    // }
    // const handleMouseEnter=()=>{
    //     textToSpeech('Indian Cricket Team');
    // }
    return (
        <div style={{ position: 'absolute', top: '35%', left: '35%' }}>
            <div className={styles.card} >
                <Card sx={{ maxWidth: 599 }}>
                    <CardActionArea>
                        <CardContent style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Avatar
                                alt="Travis Howard"
                                src={postlogo}
                                className={`${styles.Avatar}`}
                                style={{ display: 'flex', height: '48px', width: '48px' }}
                            />
                            <div style={{ marginLeft: '20px' }}>
                                <Typography  variant="h5" style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>
                                    Indian Cricket Team
                                </Typography>
                                <Typography variant="subtitle1" style={{ display: 'flex', justifyContent: 'flex-start', fontFamily: 'Inter', fontSize: '12px', fontWeight: '600', letterSpacing: '0.36px', lineHeight: '16px' }}>
                                    5h
                                    {isFollow ? (<Typography onClick={handleStatus } style={{ paddingLeft: '10px', fontFamily: 'Inter', textDecoration: 'none', color: '#2374E1', fontSize: '12px', fontWeight: '600', letterSpacing: '0.36px', lineHeight: '16px', cursor:'pointer' }}>Followed</Typography>) : (<Typography style={{ paddingLeft: '10px', fontFamily: 'Inter', textDecoration: 'none', color: '#2374E1', fontSize: '12px', fontWeight: '600', letterSpacing: '0.36px', lineHeight: '16px',cursor:'pointer' }} onClick={handleStatus}>Follow</Typography>)}

                                </Typography>
                            </div>
                        </CardContent>
                        <CardContent>
                            <Typography variant="subtitle1" className={styles.text}>
                                India has been touring Australia since 1947, but all that changed after winning the first and third Tests in Adelaide and Melbourne, respectively. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id dolor neq ue euismod proin ut nunc.
                            </Typography>
                        </CardContent>
                        <CardMedia component="img" height="250px" image={postimg} />

                    </CardActionArea>
                    <CardActions style={{ width: 599, height: 50 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {isFavorite ? (<ThumbUpIcon onClick={handleIcon} />) :
                                (<ThumbUpOffAltIcon onClick={()=>{
                                    handleIcon();
                                    
                                }} />)
                            }
                            <Typography style={{ paddingLeft: '9px', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '16px', paddingRight: '31px' }}>Like</Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <MapsUgcRoundedIcon />
                            <Typography style={{ paddingLeft: '9px', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '16px' }}>Comment</Typography>
                        </div>
                    </CardActions>
                </Card>

            </div>

        </div>
    )
}
export default Post