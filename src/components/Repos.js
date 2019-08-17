import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import colors from '../utils/colors';
import {makeStyles, Card, CardHeader, CardContent, Grid} from '@material-ui/core';
import {Star} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 75,
        padding: 30
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& div': {
            borderRadius: '50%',
            display: 'inlineBlock',
            height: 12,
            width: 12
        }
    },
    card: {
        height: 300
    },
    link: {
        color: '#000'
    },
    content: {
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
}));

const Repos = ({repoData}) => {
    const classes = useStyles();

    const [topRepos, setTopRepos] = useState([]);
    const sortby = 'stars';

    const getTopRepos = () => {
        const LIMIT = 8;
        const sorted = repoData
            .filter(repo => !repo.fork)
            .sort((a, b) => b[sortby] - a[sortby])
            .slice(0, LIMIT);
        setTopRepos(sorted);
    };

    useEffect(() => {
        if (repoData.length) {
            getTopRepos();
        }
    }, []);

    useEffect(() => getTopRepos(sortby));


    return (
        <div className={classes.root}>
            <Grid
                className={classes.grid}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={2}
            >
                {topRepos.length > 0 ? (
                    <>
                        {topRepos.map(repo => (
                            <Grid item xs={12} md={3}>
                                <Card key={repo.id} className={classes.card}>
                                    <CardContent className={classes.content}>
                                        <h3>
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={classes.link}>
                                                {repo.name}
                                            </a>
                                        </h3>
                                        <p>{repo.description}</p>
                                        <div className={classes.section}>
                                            <div style={{backgroundColor: colors[repo.language].color}}/>
                                            <span>{repo.language}</span>
                                        </div>
                                        <div className={classes.section}>
                                            <Star/>
                                            <span>{repo.stargazers_count.toLocaleString()}</span>
                                        </div>
                                        <div>
                                            <span>{repo.size.toLocaleString()} KB</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </>
                ) : (
                    <p>No available repositories!</p>
                )}
            </Grid>
        </div>
    );
};

Repos.propTypes = {
    repoData: PropTypes.array.isRequired,
};

export default Repos;
