import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        color: 'rebeccapurple',
        '& img': {
            width: 100,
            height: 100,
            borderRadius: 50,
            border: '1px solid #00f'
        }
    },
});

class Results extends Component {
    render() {
        const { classes } = this.props;
        const results = this.props.location.state.results;

        const entries = results && Object.entries(results).map(([key, value]) => {
            return (
                <div>{key}: {value}</div>
            )
        })

        return (
            <div className={classes.root}>
                <h2>Results</h2>
                <img src={results.avatar_url} alt="github avatar"/>
                {entries}
            </div>
        )
    }
}

export default withStyles(styles)(Results);
