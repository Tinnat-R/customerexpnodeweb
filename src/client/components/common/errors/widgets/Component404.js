import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '../../elements/Typography';

const Component404 = ({ reason }) => {
    return (
        <Container maxWidth={'lg'}>
            <Box m={2}>
                <Card variant='outlined'>
                    <Grid container>
                        <Grid item align='center' xs={12}>
                            <Box m={2}>
                                <Typography variant='h1' text='404' />
                            </Box>
                        </Grid>
                        <Grid item align='center' xs={12}>
                            <Box m={2}>
                                <Typography variant='h6' text={reason ? reason : `The page you're looking for does not exist.`} />
                            </Box>
                        </Grid>
                        <Grid item align='center' xs={12}>
                            <Box m={2}>
                                <Typography className='t-text-link-2' variant='subtitle1' text={`Take me to the home page`} />
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Container>
    );
};

export default Component404;