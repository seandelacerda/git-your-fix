import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        color: 'rebeccapurple'
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
                {entries}
            </div>
        )
    }
}

export default withStyles(styles)(Results);
