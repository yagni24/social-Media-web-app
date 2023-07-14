import React from "react";
import styles from "../Styling/signIn.module.css";
import left from "../images/left.png";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import ggl from "../images/ggl.svg";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LoginContext } from "../../Context/LoginContext";
import { useEffect } from "react";
import { auth, db } from "../FirebaseConfig/firebase";
import { useFormik } from "formik";
import "../App.css";
import Button from "@mui/material/Button";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ backgroundColor: '#CFE4FF', height: '953px', width: '750px' }}>
                    <img alt="img" src={left} style={{ marginTop: '150px' }} />
                </div>
                <div style={{ backgroundColor: '#FCFCFC', margin: 'auto', height: '603px', width: '600px', boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.03), -1px 1px 4px 0px rgba(0, 0, 0, 0.03), -5px 5px 8px 0px rgba(0, 0, 0, 0.03), -12px 12px 10px 0px rgba(0, 0, 0, 0.02), -21px 21px 12px 0px rgba(0, 0, 0, 0.00), -33px 34px 13px 0px rgba(0, 0, 0, 0.00)' }}>
                    <div style={{ display: 'flex', paddingLeft: '50.38px', paddingTop: '34.88px' }}>
                        <Typography style={{ justifyContent: 'flex-start', fontFamily: 'Inter', fontSize: '37.203px', fontStyle: 'normal', fontWeight: 600, letterSpacing: '0.078px', lineHeight: '120%' }}>Welcome to <br /> CodeQuest &#128075;</Typography>
                    </div>
                    <div style={{ paddingLeft: '50.38px', paddingTop: '37.11px' }}>
                        <TextField
                            label="Email"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '40ch' }}
                        />
                        <div style={{ paddingTop: '18.11px' }}>
                            <FormControl sx={{ m: 1, width: '40ch' }} fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '45px', marginTop: '10px' }}>
                        <Typography style={{
                            textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '13.951px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '18.602px',
                            color: '#6F74FF',
                            letterSpacing: '0.388px'
                        }}>Forgot Password?</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '37.78px', marginLeft: '59px', width: '500px', height: '45px', backgroundColor: '#6F74FF' }}>
                        <Button style={{
                            color: 'white', margin: 'auto', textAlign: 'center',
                            fontFamily: 'Inter',
                            fontSize: '15.501px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '15.501px',
                            letterSpacing: '0.078px',
                            textTransform: 'none'
                        }}>Sign In</Button>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                        <hr style={{ width: '100px', margin: '0', padding: '0' }} />
                        <Typography style={{ margin: '0 10px', justifyContent: 'center', fontFamily: 'Inter', color: '#212121' }}>OR</Typography>
                        <hr style={{ width: '100px', margin: '0', padding: '0' }} />
                    </div>
                    <div style={{border: '0.5px solid #d6d4d4', width: '500px', height: '35px', borderRadius: '18.6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20.78px', marginLeft: '59px',cursor:'pointer'}}>
                        <button style={{fontFamily: 'Inter', cursor:'pointer',color:' black', textTransform: 'none', fontSize: '15.501px', fontWeight: '500', letterSpacing:' 0.078px', border: 'none', outline: 'none', backgroundColor: 'transparent', display: 'flex' ,alignItems: 'center'}}>
                            <img src={ggl} style={{marginRight: '5px' }}/>
                            <span>Sign In with Google</span>
                        </button>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'30px' ,flexDirection:'row'}}>
                        <Typography display={{fontFamily:'Inter',fontSize:'15.501px',fontWeight:400,lineHeight:'140%',letterSpacing:'0.078px'}}>New to CodeQuest?</Typography>
                        <Typography display={{fontFamily:'Inter',fontSize:'15.501px',fontWeight:600,lineHeight:'140%',letterSpacing:'0.078px',marginLeft:'7px'}}>Sign Up</Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
