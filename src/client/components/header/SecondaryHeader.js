import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '../common/elements/Typography';
import User from '../user/User';
import logo from '../../images/tinnat-logo-white.png';
import '../../styles/header.css';

export default class SecondaryHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container
                style={{
                    backgroundImage: 'linear-gradient(100deg, rgb(247, 36, 52), rgb(247, 36, 52))'
                }}
                maxWidth={false}>
                <Container maxWidth={"xl"}>
                    <Grid
                        style={{ height: '4.5rem' }}
                        alignItems="center"
                        justify="center"
                        container>
                        <Grid className="logo" onClick={() => window.location = '/'} item xs={1}>
                            <img src={logo} height="80px" width="120px" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/business'} item xs={1}>
                            <Typography variant="button" display="block" guttertop="true" text="Dashboard" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/business/warehouse/products'} item xs={1}>
                            <Typography variant="button" display="block" guttertop="true" text="Products" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/business/warehouse/product/add'} item xs={1}>
                            <Typography variant="button" display="block" guttertop="true" text="Add Product" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/business/activity/transactions'} item xs={1}>
                            <Typography variant="button" display="block" guttertop="true" text="Activity" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/business/logger/idsearch'} item xs={1}>
                            <Typography variant="button" display="block" guttertop="true" text="Idsearch" />
                        </Grid>
                        <Grid className="t-menu-item" item xs={2}>
                            <User />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        )
    }
}