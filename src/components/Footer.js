import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

const Footer = props => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            Created by <a href="https://github.com/t-g-c" target="_blank" className={classes.link}>TGC</a>
        </div>
    );
}

export default Footer;
