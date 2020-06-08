import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '../common/elements/Typography';
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
                    backgroundImage: 'linear-gradient(100deg, rgb(51, 128, 253), rgb(23, 105, 236))'
                }}
                maxWidth={false}>
                <Container maxWidth={"xl"}>
                    <Grid
                        style={{ height: '4.5rem' }}
                        alignItems="center"
                        justify="center"
                        container>
                        <Grid className="logo" onClick={() => window.location = '/'} item xs={1}>
                            <img src={logo} height="45px" width="80px" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/internal/warehouse/products'} item xs={1}>
                            <Typography variant="button" display="block" gutterTop text="Products" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/internal/warehouse/product/add'} item xs={2}>
                            <Typography variant="button" display="block" gutterTop text="Add Product" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/help'} item xs={1}>
                            <Typography variant="button" display="block" gutterTop text="Help" />
                        </Grid>
                        <Grid className="t-menu-item" onClick={() => window.location = '/contactus'} item xs={1}>
                            <Typography variant="button" display="block" gutterTop text="Contact" />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        )
    }
}