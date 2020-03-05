import React from 'react';
import logo from '../logo.svg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
    useRouteMatch,
    useParams
} from "react-router-dom";

export const NavMenu: React.FC = () => {

    const navList = [
        { name: 'Home', link: "/" },
        { name: 'List', link: "/" },
        { name: 'About', link: "/" },
        { name: 'Contacts', link: "/" },
        { name: 'Admin', link: "/admin" },
    ]

    return (
        <header>
            <Grid container>
                <Grid item xs={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Grid>
                <Grid item xs={4}>
                    {
                        navList.map((nav, index) => {
                            return (
                                <RouterLink to={nav.link} key={index}>
                                    <Link key={index}> {nav.name} </Link>
                                </RouterLink>
                            )
                        })
                    }
                </Grid>
                <Grid item xs={4}>
                    <TextField id="standard-search" label="Search furniture" type="search" />
                </Grid>
            </Grid>
        </header>
    )
}