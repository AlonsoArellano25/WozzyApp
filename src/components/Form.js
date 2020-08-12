import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import ButtonOption from './ButtonOption';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    container: {
        padding: '0px 31px 0px 24px',
    },
    title: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#535252',
        padding: '24px 0px 12px 0px',
        margin: '0px auto'
    },
    subTitle: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '15px',
        color: '#535252',
        padding: '0px 0px 12px 0px',
        margin: '0px auto'
    },
    label: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '15px',
        color: '#535252',
    },
    textField: {
        width: '100%',
        margin: '8px 0px 16px 0px'
    },

    containerButtonAccount: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        right: '0',
        padding: '0px 31px 24px 24px'
    },

    buttonAccount: {
        width: '100%',
        height: '64px',
        background: '#3C82B9',
        borderRadius: '4px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#FFFFFF',
        textTransform: 'capitalize'
    },

    error: {
        color: "red",
        fontSize: "8px",
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 'bold',
    }

})


export default function Form(props) {
    /* options id
        0: student
        1: youtuber
    */

    const [studentSelected, setStudentSelected] = useState(false);
    const [youtuberSelected, setYoutuberSelected] = useState(false);
    const [form, setForm] = useState({
        name: "",
        lastName: "",
    });
    const [errors, setErrors] = useState({});
    const classes = useStyles();

    const handleSelection = async(id, isActive) => {
        switch (id) {
            case 0:
                if(isActive){
                    await setStudentSelected(true);
                    await setYoutuberSelected(false);
                }else{
                    await setStudentSelected(false);
                    await setYoutuberSelected(true);
                }
                break;
            case 1:
                if(isActive){
                    await setYoutuberSelected(true);
                    await setStudentSelected(false);
                }else{
                    await setYoutuberSelected(false);
                    await setStudentSelected(true);
                }
                break;
            default:
                break;
        }
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value.trim();
        setForm((prevState) => ({
            ...prevState,
            [name] : value
        }));
    };

    const handleCreateAccount = () => {
        const errors = {};
        let flag = true;
        if((studentSelected || youtuberSelected) && form.name.trim() !== `` && form.lastName.trim() !== ``){
            const optionId = studentSelected ? 0 : 1;
            props.handleCreatedAccount(optionId);
        }else{
            if(!studentSelected && !youtuberSelected){
                errors.options = `* Seleccione alguna de las opciones disponibles.`;
            }
            if(form.name.trim() === ``){
                errors.name =  `* Este campo es obligatorio.`;
            }
            if(form.lastName.trim() === ``){
                errors.lastName = `* Este campo es obligatorio.`;
            }
            setErrors(errors);
        }
    }

    return(

        <Grid xs = {12} style={{height:'100%'}}>
        <Grid container xs={12}
            className = {classes.container}
        >
            <Grid xs={12} item>
                <p className = {classes.title}>Tell us about you</p>
                <p className = {classes.subTitle}>Please tell a bit about you so that we can personalize 
                    your onboarding experience
                </p>
            </Grid>
            <Grid item xs = {12}>
                <label className= {classes.label}>Name</label>
                <TextField
                    className = {classes.textField}
                    name = "name"
                    value={form.name}
                    id="outlined-margin-none"
                    placeholder= "Your name..."
                    variant="outlined"
                    size = "small"
                    onChange = {handleInput}
                />
                {errors.name !== undefined ? (
                    <p className={classes.error}>{errors.name}</p>
                ) : (
                " "
                )}
            </Grid>
            <Grid item xs = {12}>
                <label className= {classes.label}>Last Name</label>
                <TextField
                    className = {classes.textField}
                    name = "lastName"
                    value={form.lastName}
                    id="outlined-margin-none"
                    placeholder ="Your last name..."
                    variant="outlined"
                    size = "small"
                    onChange = {handleInput}
                />
                {errors.lastName !== undefined ? (
                    <p className={classes.error}>{errors.lastName}</p>
                ) : (
                " "
                )}
            </Grid>
            <Grid container xs = {12} style={{marginBottom:'8px'}}>
                <label className= {classes.label}>I’m a</label>
            </Grid>

            <Grid container xs = {12}
            >  
                <Grid container xs = {6}
                    direction = "row"
                    justify = "flex-start"
                >
                    <Grid item xs = {11}>
                        <ButtonOption
                        title = {`Student`}
                        id = {0}
                        isSelected = {studentSelected}
                        handleSelection = {handleSelection}
                        />
                    </Grid>
                </Grid>
                <Grid container xs = {6}
                    direction = "row"
                    justify = "flex-end"
                >
                    <Grid item xs = {11}>
                        <ButtonOption
                            title = {`Youtuber`}
                            id = {1}
                            isSelected = {youtuberSelected}
                            handleSelection = {handleSelection}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {errors.options !== undefined ? (
                    <p className={classes.error}>{errors.options}</p>
                ) : (
                " "
             )}
        </Grid>
            <Grid xs = {12} className={classes.containerButtonAccount}>
                <Button variant="contained" color="primary" className= {classes.buttonAccount}
                    startIcon={<PersonIcon style={{width: '28px',height: '32px'}}/>}
                    onClick = {handleCreateAccount}
                >
                    Create Account
                </Button>
            </Grid>
        </Grid>
    )
}