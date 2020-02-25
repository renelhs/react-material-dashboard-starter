import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
    root: {
        padding: 16,
        width: '100%',
    },
});

const PrivateContent = ({ children, classes }) => {
    return (
        <div className={classes.root}>
            <Grid container>{children}</Grid>
        </div>
    );
};

export default withStyles(styles)(PrivateContent);
