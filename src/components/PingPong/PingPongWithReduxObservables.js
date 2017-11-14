import React from "react";
import PropTypes from 'prop-types';

import MainCard from "../Commons/MainCard";
import { ping } from '../../redux/actions';

import { Grid, Button } from "material-ui";
import { CircularProgress } from 'material-ui/Progress';

const PingPong = ({isPinging}) => {
    return (
        <Grid container spacing={40} justify="center">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4} className="mainGridRoot">
                <MainCard title="Redux Observables"
                    subTitle="Async Operations"
                    maxWidth={"100%"}
                    imageUrl="../../images/redux-observable.gif"
                    description={
                        <div>
                            <span style={{ fontWeight: 900 }}>
                                Is pinging: {isPinging.toString()}
                            </span>
                            { (isPinging) ?
                                <span style={{ padding: 10 }}>
                                    <CircularProgress size={14} color="accent" />
                                </span> : null
                            }
                            <p style={{fontStyle: "italic"}}>
                                The Async operation takes <span style={{ fontWeight: 900 }}>1</span> seconds, as described in the <span style={{ fontWeight: 600 }}>pingEpic</span>.
                            </p>
                            <p>
                                <ul>
                                    <li>The <span style={{ fontWeight: 900 }}>ping</span> Action is <span style={{ fontWeight: 900 }}>dispatched</span> on click (using React-Act)</li>
                                    <li>Action goes through reducer to <span style={{ fontWeight: 900 }}>set the isPinging flag to true</span></li>
                                    <li>Action is <span style={{ fontWeight: 900 }}>caught by the Redux-Observable epic</span> middleware in the store</li>
                                    <li><span style={{ fontWeight: 900 }}>Epic dispatches pong Action</span> after 1 second</li>
                                    <li><span style={{ fontWeight: 900 }}>pong</span> Action goes through reducer to <span style={{ fontWeight: 900 }}>reset the isPinging flag back to false</span></li>
                                </ul>
                            </p>
                        </div>}
                    link={<Button raised color="accent" onClick={() => ping()}>Start PING</Button>} />
            </Grid>
        </Grid>
    );
};

PingPong.propTypes = {
    isPinging: PropTypes.bool.isRequired
};

export default PingPong;