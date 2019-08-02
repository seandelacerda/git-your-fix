import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Profile from './Profile';

const styles = theme => ({
    root: {
        color: 'rebeccapurple',
    },
});

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
    }

    componentDidMount() {
        this.setState({
            userData: this.props.location.state.results
        })
    }

    render() {
        const { classes } = this.props;
        const { userData } = this.state;

        const entries = userData && Object.entries(userData).map(([key, value]) => {
            return (
                <div>{key}: {value}</div>
            )
        })

        return (
            <div className={classes.root}>
                {userData &&
                    <>
                        <Profile userData={userData}/>
                        <div style={{marginTop: '100px'}}>
                            {entries}
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default withStyles(styles)(Results);
