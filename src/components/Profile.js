import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {

    },
    avatar: {
        '& img': {
            width: 100,
            height: 100,
            borderRadius: 50,
            border: '1px solid #00f'
        }
    }
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

                    {userData.name && <h1>{userData.name}</h1>}

                    {userData.login && (
                        <h2>
                            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                @{userData.login}
                            </a>
                        </h2>
                    )}

                    <div className="info">
                        {userData.company && (
                            <span className="info__item">
                                {userData.company}
                            </span>
                        )}

                        {userData.location && (
                            <span className="info__item">
                                {userData.location}
                            </span>
                        )}

                        {userData.created_at && (
                            <span className="info__item">
                                Joined{' '}
                                {new Date(userData.created_at).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                        )}
                    </div>

                    <div className="stats">
                        <div className="stats__item">
                            <span className="num">{userData.public_repos.toLocaleString()}</span>
                            <span className="num-label">Public Repositories</span>
                        </div>
                        <div className="stats__item">
                            <span className="num">{userData.followers.toLocaleString()}</span>
                            <span className="num-label">Followers</span>
                        </div>
                        <div className="stats__item">
                            <span className="num">{userData.following.toLocaleString()}</span>
                            <span className="num-label">Following</span>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Profile;