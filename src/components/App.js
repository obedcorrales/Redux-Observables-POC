import React from "react";
import PropTypes from 'prop-types';

import { Route, Link, Switch, withRouter } from "react-router-dom";

import { Grid, AppBar, Toolbar, IconButton, Button } from "material-ui";
import { HomeIcon } from "./Commons/Icons";

import MainCard from "./Commons/MainCard";
import PingPong from "../containers/PingPong";
import PhotoAlbum from "../containers/PhotoAlbum";

import '../styles/styles.css';

class App extends React.Component {
    render() {            
        const { match } = this.props;

        return (
            <div>
                <AppBar position="static" className="menuBar" color="primary">
                    <Toolbar>
                        {
                            (match.url == "/" && match.isExact) ? null : 
                                <IconButton color="contrast" aria-label="Menu">
                                    <Link to="/"><HomeIcon fill="#ffffff" /></Link>
                                </IconButton>
                        }
                    </Toolbar>
                </AppBar>
                <div className="app">
                    <main>
                        <Switch>
                            <Route exact path="/" render={() => (
                                <div className="mainGridRoot">
                                    <Grid container
                                            spacing={40} 
                                            alignItems="stretch"
                                            direction="row"
                                            justify="center">
                                        <Grid item className="mainGridRoot">
                                            <MainCard title="Ping Pong"
                                                subTitle="Async Operations"
                                                imageUrl="../images/pingpong.gif"
                                                description={<span>Simple Async Operations implemented through two different approaches in Redux</span>}
                                                link={<Button dense color="primary"><Link to="/pingpong">Learn More</Link></Button>} />
                                        </Grid>
                                        <Grid item className="mainGridRoot">
                                            <MainCard title="Fetching Photos"
                                                subTitle="Async Operations"
                                                imageUrl="../images/image-grid.png"
                                                description={<span>Fetch photo albums from external API using Redux-Observables</span>}
                                                link={<Button dense color="primary"><Link to="/photoalbum">Learn More</Link></Button>} />
                                        </Grid>
                                    </Grid>
                                </div>
                            )}/>
                            <Route path="/pingpong" component={PingPong} />
                            <Route path="/photoalbum" component={PhotoAlbum} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    match: PropTypes.object.isRequired
};

export default withRouter(App);