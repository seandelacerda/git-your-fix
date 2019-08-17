import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import octocat from '../assets/Octocat.png';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#24292e'
    },
    search: {
        width: '30%',
        margin: 'auto',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#393e42',
        color: '#bdbec0',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
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
        height: '45px',
        fontSize: '18px'
    },
    inputInput: {
        width: '100%',
        textAlign: 'center',
        cursor: 'none'
    },
    button: {
        color: 'white',
        background: '#28a745',
        marginTop: '10px',
        fontSize: '15px',
        lineHeight: '20px',
        '&:hover': {
            backgroundColor: '#24963e'
        }
    },
    form: {
        paddingTop: '8%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '20%'
        }
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            width: '200px'
        }
    },
    label: {
        color: '#f1e05a'
    },
    disabled: {
        background: '#28a745 !important',
        color: 'white !important',
        opacity: '0.4'
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        margin: '0 20px 20px 0',
        color: 'white'
    },
    link: {
        color: '#0366d6',
        textDecoration: 'none'
    }
}));

const Search = props => {
    const classes = useStyles();

    const [term, setTerm] = useState('');
    const disabled = !term;

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = () => {
        let query = `q=${term}`;
        props.history.push(`/results?${query}`);
    };

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <img src={octocat} alt="octocat" className={classes.image} />
                <p className={classes.label}>Enter a GitHub username to get started</p>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        autoFocus='true'
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                    />
                </div>
                <Button
                    variant="contained"
                    color="secondary"
                    classes={{
                        root: classes.button,
                        disabled: classes.disabled
                    }}
                    type='submit'
                    disabled={disabled}
                    >
                    Search
                </Button>
            </form>
            <div className={classes.footer}>
                Created by <a href="https://github.com/t-g-c" target="_blank" className={classes.link}>TGC</a>
            </div>
        </div>
    );
}

export default Search;
