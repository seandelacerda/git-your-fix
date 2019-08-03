import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'
import { fade, makeStyles } from '@material-ui/core/styles';
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
        width: '100%'
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
    }
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
            <form onSubmit={handleSubmit} className={classes.form}>
                <img src={octocat} alt="octocat" className={classes.image} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Enter a GitHub username"
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
                    className={classes.button}
                    type='submit'
                    >
                    Search
                </Button>
            </form>
        </div>
    );
}

export default Search;
