import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {IconButton} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
    header: {
        fontWeight: 900,
        minWidth: 0,
        fontSize: 18,
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        marginRight: 8,
        borderRadius: shape.borderRadius,
        background: palette.grey[200],
        '&:hover': {
            background: palette.grey[300],
        },
        marginLeft: 0,
        width: '100%',
        [breakpoints.up('sm')]: {
            marginLeft: spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        borderRadius: 4,
        paddingTop: spacing(1),
        paddingRight: spacing(1),
        paddingBottom: spacing(1),
        paddingLeft: spacing(10),
        transition: transitions.create('width'),
        width: '100%',
        [breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

const PrivateHeader = ({ classes }) => {
    let history = useHistory();

    const handleLogout = event => {
        localStorage.removeItem('token');
        history.push('/');
    };

    return (
        <>
            <Typography noWrap color={'textSecondary'} className={classes.header}>
                My App Name
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
            <IconButton aria-label="delete" color="default" onClick={handleLogout}>
                <ExitToAppIcon/>
            </IconButton>
        </>
    )
};

PrivateHeader.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(PrivateHeader);
