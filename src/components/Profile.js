import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
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

        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
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
                            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                @{userData.login}
                            </a>
                        </h2>
                    )}

                    <div className={classes.info}>
                        {userData.company && (
                            <span>
                                {userData.company}
                            </span>
                        )}

                        {userData.location && (
                            <span>
                                {userData.location}
                            </span>
                        )}

                        {userData.created_at && (
                            <span>
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
                        <div>
                            <span>{userData.public_repos.toLocaleString()}</span>
                            <span>Public Repositories</span>
                        </div>
                        <div>
                            <span>{userData.followers.toLocaleString()}</span>
                            <span>Followers</span>
                        </div>
                        <div>
                            <span>{userData.following.toLocaleString()}</span>
                            <span>Following</span>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Profile;
