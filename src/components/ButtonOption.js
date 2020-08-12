import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import StudentIcon from '../assets/img/student-icon.png';
import YoutuberIcon from '../assets/img/youtuber-icon.png';
import StudentActiveIcon from '../assets/img/student-icon-active.png';
import YoutuberActiveIcon from '../assets/img/youtuber-icon-active.png';

const useStyles = makeStyles({
    containerDisabled: {
        background: '#FFFFFF',
        border: '1px solid #D0D0D0',
        boxSizing: 'border-box',
        borderRadius: '4px',
    },
    containerStudentEnabled: {
        background: '#FFFFFF',
        border: '1px solid #3C82B9',
        boxSizing: 'border-box',
        borderRadius: '4px',
    },
    containerYoutuberEnabled: {
        background: '#FFFFFF',
        border: '1px solid #C4302B',
        boxSizing: 'border-box',
        borderRadius: '4px',
    },
    img: {
        margin: '24px 0px 24px 0px'
    },
    titleDisabled: {
        padding: '24px 0px 24px 0px',
        margin: '0 auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '15px',
        color: '#D0D0D0'
    },
    titleStudentEnabled: {
        padding: '24px 0px 24px 0px',
        margin: '0 auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '15px',
        color: '#3C82B9'
    },
    titleYoutuberEnabled: {
        padding: '24px 0px 24px 0px',
        margin: '0 auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '15px',
        color: '#C4302B'
    }
})


export default function ButtonOption(props) {
    const [isActive, setIsActive] = useState(false);
    const [iconSrc, setIconSrc] = useState('');
    const classes = useStyles();
    /*
    0: Student
    1: Youtuber
    */
    useEffect(() => {
        switch (props.id) {
            case 0:
                setIconSrc((isActive) ? StudentActiveIcon: StudentIcon);
                break;
            case 1:
                setIconSrc((isActive) ? YoutuberActiveIcon: YoutuberIcon);
                break;
            default:
                setIconSrc('');
                break;
        }
    },[isActive]);


    useEffect( () => {
        setIsActive(props.isSelected);
    }, [props.isSelected])

    const handleChangeActive = async() =>{
        await props.handleSelection(props.id, !isActive);
        await setIsActive(!isActive);
    }

    return(
        <Grid container xs={12} className = {isActive ?
            props.id === 0 ? classes.containerStudentEnabled
            : classes.containerYoutuberEnabled
            :classes.containerDisabled} 
            onClick = {handleChangeActive}
        >
            <Grid container xs = {6}
                direction='column'
                justify="center"
                alignItems="center"
            >
                <Grid item xs = {12}>
                    <img src={iconSrc} className={classes.img}></img>
                </Grid>
            </Grid>
            <Grid container xs = {6}
                direction='row'
                justify="start"
                alignItems="center"
            >
                <Grid item xs = {12}>
                    <p className={isActive ?
                        props.id === 0 ? classes.titleStudentEnabled 
                        : classes.titleYoutuberEnabled
                        :classes.titleDisabled}>{props.title}</p>
                </Grid>
            </Grid>
        </Grid>
    )
}