import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import SuccessIcon from "../assets/img/success-icon.png";

const useStyles = makeStyles({
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '16px'
    },
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#535252',
        margin: '0 auto'
    },
    textStudentType : {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#3C82B9'
    },
    textYoutuberType : {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        textAlign: 'center',
        color: '#C4302B'
    }
})

export default function AccountCreated(props) {
    const classes = useStyles();
    return(
        <Grid xs= {12}
            container
            direction = "row"
            justify = "center"
            alignItems="center"
            style = {{height: '100%'}}
        >
            <Grid item xs={12}>
                <img src={SuccessIcon} className={classes.img}/>
                <p className = {classes.text}>
                    Your <span className={props.accountType === 0 ? classes.textStudentType : classes.textYoutuberType}>
                    {props.accountType === 0 ? `student ` : `youtuber `}</span> 
                     account 
                </p>
                <p className = {classes.text}>have been created !</p>
            </Grid>
        </Grid>
    )
}