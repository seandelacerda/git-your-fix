import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import octocat from '../assets/Octocat.png';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.main,
        height: '100%'
    },
    loader: {
        marginTop: '40vh',
        width: 120,
        height: 120,
        animation: 'spin 2s linear infinite',
    },
});

const Loader = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <img src={octocat} alt="octocat" className={classes.loader} />
        </div>
    );
};

Loader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
