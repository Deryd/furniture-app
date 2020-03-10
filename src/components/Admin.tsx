import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        input: {
            display: 'none',
        },
    }),
);

export const Admin: React.FC = () => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid item xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Header"
                    style={{ margin: 8 }}
                    placeholder="Full header"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={2}>
                <h4> Select image </h4>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                /> <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">Upload</Button>
                </label>
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Text"
                    style={{ margin: 8 }}
                    placeholder="Full text"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Type"
                    style={{ margin: 8 }}
                    placeholder="Full type"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Name"
                    style={{ margin: 8 }}
                    placeholder="Full name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Code"
                    style={{ margin: 8 }}
                    placeholder="Full code"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Design"
                    style={{ margin: 8 }}
                    placeholder="Full design"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Little Description"
                    style={{ margin: 8 }}
                    placeholder="Full little description"
                    fullWidth
                    multiline
                    rows="4"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid xs={10}>
                <TextField
                    id="outlined-full-width"
                    label="Description"
                    style={{ margin: 8 }}
                    placeholder="Full description"
                    fullWidth
                    multiline
                    rows="4"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            
                
        </form>
    )
}
