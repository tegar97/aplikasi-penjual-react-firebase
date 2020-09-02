import React,{useState} from 'react'
import AppLoading from '../../components/AppLoading'
//import komponent material ui
import Button  from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {Link,Redirect} from 'react-router-dom'
//form validator
import isEmail from 'validator/lib/isEmail'

//import styles
import useStyle from './styles'
//FIREBASE HOOK
import {useFirebase} from '../../components/FirebaseProvider'

function Registrasi() {
    const classes = useStyle()
    const [form,setForm] = useState({
        email : '',
        password : '',
        password_confirm: ''
    })
    const [error,setError] = useState({
        email : '',
        password : '',
        password_confirm: ''
    })
    const [isSubmiting,setSubmiting] = useState(false)

    const {auth,user,loading} = useFirebase()

    const handleChange = e =>{
        setForm({
            ...form ,
            [e.target.name] : e.target.value
        })
        setError({
            ...error,
             [e.target.name]: ''
        })
        }
    const validate = () => {
        const newError = {...error};

        if(!form.email) {
            newError.email  = "Email wajib diisi"
        }else if(!isEmail(form.email)) {
            newError.email  = "Email tidak valid"
        }

        if(!form.password) {
            newError.password  = "Password wajib diisi"
        }
        if(!form.password_confirm) {
            newError.password  = "Password Confirm wajib diisi"
        }else if(form.password_confirm !== form.password){
            newError.password  = "Password Confirm tidak sama dengan password "
        }
        return newError;
    }
    const handleSubmit =  async e =>{
        e.preventDefault();
        const findErrors = validate()
        console.log(findErrors)
        if(Object.values(findErrors).some(err=> err !== '')) {
            setError(findErrors)
        }else{
            try {
                setSubmiting(true)
                await auth.createUserWithEmailAndPassword(form.email,form.password)
            }catch(error) {
                const newError = {};
                console.log(error)
                
                switch(error.code) {
                    case 'auth/email-already-exists':
                        newError.email = 'Email sudah terdaftar';
                    break;
                    case 'auth/invalid-email':
                        newError.email = 'Email tidak valid';
                    break;
                    case 'auth/invalid-password':
                        newError.password = 'Password Lemah';
                    break;
                    case 'auth/opeation-not-allowed':
                        newError.email = 'Metode email dan password tidak didukung';
                    break;
                    default :
                        newError.email = 'Terjadi kesalahan silahkan coba lagi'; 

                    setError(newError)
                    setSubmiting(false)
                }
            } 
        }

    }
    if(loading) {
        return <AppLoading />
    }
    if(user) {
        return <Redirect to="/" />
    }
    
    
    return (
        <Container maxWidth="xs">
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h1" className={classes.title}>Register Page</Typography>

                <form onSubmit={handleSubmit} noValidate>
                    <TextField id="email" type="email" name="email" margin="normal" label="Alamat Email" value={form.email} onChange={handleChange} fullWidth required helperText={error.email} error={error.email ? true : false} disabled={isSubmiting}/>
                    <TextField id="password" type="password" name="password" margin="normal" label="Password" value={form.password} onChange={handleChange} fullWidth required helperText={error.password} error={error.password ? true : false} disabled={isSubmiting}/>
                    <TextField id="password_confirm" type="password" name="password_confirm" margin="normal" label="Confrim Your Password" value={form.password_confirm} onChange={handleChange}  fullWidth required helperText={error.password_confirm} error={error.password_confirm ? true : false} disabled={isSubmiting}/>
                    <Grid container  className={classes.button} >
                        <Grid item xs >
                            <Button  type="submit" size="large" color="primary" variant="contained">Register</Button>
                        </Grid>
                        <Grid item >
                            <Button component={Link} to="/login"  size="large" variant="contained">Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Registrasi
