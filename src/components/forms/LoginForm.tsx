import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginData } from '../../model/LoginData';
import { Alert, Chip, Collapse, Divider, formControlClasses, IconButton } from '@mui/material';
import { current } from '@reduxjs/toolkit';
import { codeActions, codeReducer } from '../../redux/codeSlice';
import { useDispatch, useSelector } from 'react-redux';
import  googleButtn  from "../../btn_google_signin_light_focus_web.png";
type Props = { submitFn: (loginData: LoginData) => void };
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const theme = createTheme();

export default function SignIn({ submitFn }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const loginData: LoginData = { email, password };
    submitFn(loginData);
  };
  const code = useSelector<any,string>(state => state.codeState.code);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>

            </Grid>
            <Grid item >
            {code !== 'OK' && <Alert severity="error" onClose={() => {
             dispatch(codeActions.set('OK')) ;
            }}>Error: {code}, sign in again</Alert>}
              <Divider>
                <Chip label="OR" sx={{ mt: 3, mb: 2 }} />
              </Divider>

              <Button
                fullWidth
              //  variant="contained"
              //  sx={{ mt: 3, mb: 2, justifyContent: 'center', alignItems: 'center' }}
                onClick={() => {
                  const loginData: LoginData = { email: "GOOGLE", password: '' };
                  submitFn(loginData);
                }}
              ><img src={googleButtn}
                alt ='Sign In With Google'
              ></img>              </Button>
            </Grid>
          </Box>

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

function setOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}

