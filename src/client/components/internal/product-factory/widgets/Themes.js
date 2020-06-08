import React, { Component } from 'react';
import uniqid from 'uniqid';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '../../../common/elements/Typography';
import Theme from './Theme';
import ThemesModal from '../../../../modals/internal/product-factory/widgets/ThemesModal';
import {
    COMPONENT_STATUS_VALID,
    COMPONENT_STATUS_INVALID
} from '../../../../lib/constants';

export default class Themes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: COMPONENT_STATUS_INVALID,
            valid: 0
        };
        this.update = this.update.bind(this);
    }

    async componentDidMount() {
        const { data } = this.props;
        const themesModal = new ThemesModal(data);
        await this.setState({
            themes: themesModal.getData()
        });
        await this.validate();
        await this.props.update('themes', this.state.themes);
    }

    async append() {
        let { themes } = this.state;
        themes.push(new ThemesModal().getDefaultTheme());
        await this.setState({ themes: themes });
        await this.validate();
        await this.props.update('themes', this.state.themes);
    }

    async remove(id) {
        let { themes } = this.state;
        let nt = [];
        for (let i = 0; i < themes.length; i++) {
            if (i !== id) {
                nt.push(themes[i]);
            }
        }
        await this.setState({ themes: nt });
        await this.validate();
        await this.props.update('themes', this.state.themes);
    }

    async update(id, data) {
        let { themes } = this.state;
        for (let i = 0; i < themes.length; i++) {
            if (i === id) {
                themes[i] = data;
                break;
            }
        }
        await this.setState({ themes: themes });
        await this.validate();
        await this.props.update('themes', this.state.themes);
    }

    async validate() {
        const { themes } = this.state;
        let error = false, valid = 0;
        if (themes.length === 0) {
            error = true;
        }
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].status === COMPONENT_STATUS_INVALID) {
                error = true;
            } else if (themes[i].status === COMPONENT_STATUS_VALID) {
                valid += 1;
            }
        }
        await this.setState({
            valid: valid,
            status: error ? COMPONENT_STATUS_INVALID : COMPONENT_STATUS_VALID,
        });
    }

    render() {
        const { themes, valid } = this.state;
        return (
            themes && <Grid container>
                <Grid item xs={12}>
                    <Box m={2}>
                        <Typography text="2. Themes" variant="h6" />
                        <Typography text={`${valid} theme(s) added`} variant="subtitle1" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {
                            themes.map((theme, key) =>
                                <Grid key={key} item xs={12}>
                                    <Box m={2}>
                                        <Theme
                                            data={theme}
                                            update={(data) => this.update(key, data)}
                                            remove={() => this.remove(key)}
                                        />
                                    </Box>
                                    <Box m={2}>
                                        <Divider />
                                    </Box>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box m={2}>
                        <Typography
                            align="right"
                            variant="subtitle1"
                            className="t-text-link"
                            text="Add another theme"
                            icon="add"
                            onClick={() => this.append()}
                        />
                    </Box>
                </Grid>
            </Grid> || <div></div>
        );
    }
};