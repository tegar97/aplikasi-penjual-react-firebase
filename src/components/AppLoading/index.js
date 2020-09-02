import React from 'react'

//material ui

import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import useStyles from './style'
function AppLoading() {
    const classes = useStyles()
    return(
        <Container>
            <div className={classes.LoadingBox}>
                <Typography variant="h5" component="h2" className={classes.title}>Aplikasi Penjualan</Typography>
                <LinearProgress/>
            </div>
        </Container>
    )

}
export default AppLoading