import { Card, Typography,TextField,Grid,Checkbox, Button} from '@mui/material';
import React from 'react';
import useStyles from './LoginStyle';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const classes = useStyles();
    const {
      handleSubmit,
      register,    
      formState: { errors },

    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
     
    };
    return (
        <div  style={{
            backgroundColor: "#f7f8fa",
            height: "100vh",
            justifyContent: "center",
          }}>
          <div style={{ textAlign: "center" }}>
            <Typography
              className={classes.title}
              variant="h3"
            >
              Login to Google Classroom and start working
            </Typography>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>

          <Card className={classes.card}>
          <Typography color="primary" variant='h4'>Login</Typography>
          <br/>
          <Grid>
            <Grid item>
            <TextField style={{ width: "70%", height: "78px" }} helperText={errors.email?.message} {...register("email", { required: " Email is required" })} error={Boolean(errors.email)} className={classes.textField} id="outlined-basic" name="email" label="Email*" variant="outlined" />
            <TextField style={{ width: "70%", height: "78px" }} {...register("password", { required: " Password is required" })} type="password" error={Boolean(errors.password)} helperText={errors.password?.message} className={classes.textField} id="outlined-basic" name="password" label="Password*" variant="outlined" />
           
            <div>
                <Checkbox
                color="primary"
                />
                Remember Me 
            </div>
            <div>
            <Button type="submit" variant="outlined">Login</Button>
            </div>
            <Typography className={classes.title}>
            <strong>Not a member yet?</strong>
            <Link to="/">
              <Button  color="primary">SignUP</Button>
            </Link>
          </Typography>
            </Grid>
          </Grid>
          </Card>
          </form>
       
        </div>
    );
}

export default Login;