import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Group, Place, CalendarToday } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.background.main,
        padding: 50,
    },
    avatar: {
        '& img': {
            width: 150,
            height: 150,
            borderRadius: '50%',
            boxShadow: '4px 2px 61px 0px rgba(255,255,255,.5)'
        }
    },
    userHeading: {
        fontSize: 42
    },
    info: {
        maxWidth: '50%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        '& span': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            minWidth: 200,
            '& svg': {
                marginRight: 5
            },
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                minWidth: 'auto'
            },

        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    link: {
        color: theme.palette.secondary.main
    },
    button: {
        color: theme.palette.secondary.main,
        background: '#28a745',
        margin: '30px auto 60px',
        fontSize: 18,
        '&:hover': {
            backgroundColor: '#24963e'
        }
    },
}));

const Profile = ({ userData }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {userData &&
                <>
                    {userData.avatar_url && (
                        <div className={classes.avatar}>
                            <img src={userData.avatar_url} alt="avatar" />
                        </div>
                    )}

                    {userData.name && <h1 className={classes.userHeading}>{userData.name}</h1>}

                    {userData.login && (
                        <h2>
                            <a className={classes.link} href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                @{userData.login}
                            </a>
                        </h2>
                    )}

                    <div className={classes.info}>
                        {userData.company && (
                            <span>
                                <Group/>{userData.company}
                            </span>
                        )}

                        {userData.location && (
                            <span>
                                <Place/>{userData.location}
                            </span>
                        )}

                        {userData.created_at && (
                            <span>
                                <CalendarToday/>
                                Joined{' '}
                                {new Date(userData.created_at).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                        )}
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${userData.html_url}?tab=repositories`}
                        >
                            {`${userData.public_repos.toLocaleString()} Public Repositories`}
                        </Button>
                    </div>
                </>
            }
        </div>
    );
}

export default Profile;
