import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Amount from '../elements/Amount';
import Typography from '../elements/Typography';
import ProductImages from './ProductImages';

const ProductThemeWidget = (props) => {
    const {
        name,
        description,
        onClick,
        amount,
        picture_links
    } = props;
    return (
        <Card variant="outlined">
            <Box m={1}>
                <ProductImages
                    images={picture_links}
                    style={{
                        width: '100%',
                        height: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        cursor: 'pointer'
                    }}
                    onClick={onClick}
                />
            </Box>
            <Box>
                <Box m={0}>
                    <Typography
                        className="t-text-link"
                        align='center'
                        text={name}
                        onClick={onClick}
                    />
                </Box>
                <Box m={0}>
                    <Typography
                        align='center'
                        size="subtitle1"
                        text={description} />
                </Box>
                <Box m={0}>
                    <Amount amount={amount} />
                </Box>
            </Box>
        </Card>
    );
};

export default ProductThemeWidget;