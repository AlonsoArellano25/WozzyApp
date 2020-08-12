
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        background: '#3C82B9',
        height: '40px'
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '24px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '8px 0px 8px 0px'
    }
}); 

export default function Header(props) { 
    const classes = useStyles();
    return(
        <Grid xs={12} className = {classes.root}>
            <h1 className = {classes.title}>
                LOGO
            </h1>
        </Grid>
    ) 
}


