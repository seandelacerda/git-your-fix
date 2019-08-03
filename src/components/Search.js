import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.main, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

const Search = props => {
    const classes = useStyles();

    const [term, setTerm] = useState('');

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = () => {
        let query = `q=${term}`;
        props.history.push(`/results?${query}`);
    };

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Enter a github username"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                    />
                </div>
                <Button type='submit'>Search</Button>
            </form>
        </div>
    );
}

export default Search;
