//  Material Design UI library
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import FormHelperText from '@mui/material/FormHelperText';


// React & other utilities library
import React, { useState } from 'react';
// import { useRef, UseState, useEffect } from 'react';
// import useAuth from '../../hooks/useAuth';
// import AuthContext from "../../context/AuthProvider";
// import axios from '../api/axios';
// const LOGIN_URL = '/auth';


// Self Developed components & utilities
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import './LoginPage.css';


function LoginPage() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        emailError: false,
        passwordError: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleFormSubmit = () => {
        //send login request to backend
        console.log("login:", values);
        // response result from backend
        setValues({
            emailError: false,
            passwordError: true,
        });
    }

    const handleFormClear = () => {
        setValues({
            email: '',
            password: '',
            showPassword: false,
            emailError: false,
            passwordError: false,
        });
    }

    // const { setAuth } = useAuth();
    // const userRef = useRef();
    // const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    return (
        <>
            <Navbar />
            <div className='loginPage'>
                <Sidebar />
                <div className='loginPage__Content'>
                    <Box component="form" noValidate autoComplete="off"
                        sx={{
                            width: 300,
                            height: 300,
                            padding: 3,
                            backgroundColor: grey[200],
                            '&:hover': {
                                backgroundColor: grey[300],
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                    >
                        <Typography variant="h4" align="center" >Login</Typography>
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard" required error={values.emailError}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                type='email'
                                value={values.email}
                                onChange={handleChange('email')}
                                aria-describedby="email-msg"
                            />
                            {values.emailError &&
                                (<FormHelperText id="email-msg" error={values.emailError} disabled={false}>Please input a valid email address.</FormHelperText>)
                            }
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" required error={values.passwordError}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                aria-describedby="password-msg"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {values.passwordError &&
                                (<FormHelperText id="password-msg" error={values.passwordError} disabled={false}>Please input a correct password.</FormHelperText>)
                            }
                        </FormControl>
                        <Button sx={{ m: 2 }} variant="contained" onClick={handleFormSubmit} endIcon={<SendIcon />}>Send</Button>
                        <Button variant="contained" onClick={handleFormClear} endIcon={<CancelIcon />}>Cancel</Button>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default LoginPage;