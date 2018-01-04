import React from "react";
import PropTypes from 'prop-types';

import MainCard from "../Commons/MainCard";
import { Ping } from '../../actions/pingPongActions';

import { Grid, Button } from "material-ui";
import { CircularProgress } from 'material-ui/Progress';

const PingPongNoReduxObservable = ({isPinging}) => {
    return (
        <Grid container spacing={40} justify="center">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4} className="mainGridRoot">
                <MainCard title="Redux Actions"
                    subTitle="Async Operations"
                    maxWidth={"100%"}
                    imageUrl="../../images/redux-flow.jpg"
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
                                The Async operation takes <span style={{ fontWeight: 900 }}>3</span> seconds, as described in the <span style={{ fontWeight: 600 }}>pingEpic</span>.
                            </p>
                            <ul>
                                <li>The <span style={{ fontWeight: 900 }}>Ping</span> Function is <span style={{ fontWeight: 900 }}>called</span> on click</li>
                                <li><span style={{ fontWeight: 900 }}>Ping</span> Function dispatches <span style={{ fontWeight: 900 }}>pingAction</span> Action (using React-Act)</li>
                                <li><span style={{ fontWeight: 900 }}>pingAction</span> Action goes through reducer to <span style={{ fontWeight: 900 }}>set the isPinging flag to true</span></li>
                                <li>On Return of Promise, <span style={{ fontWeight: 900 }}>Ping</span> Function dispatches <span style={{ fontWeight: 900 }}>pong</span> action</li>
                                <li><span style={{ fontWeight: 900 }}>pong</span> Action goes through reducer to <span style={{ fontWeight: 900 }}>reset the isPinging flag back to false</span></li>
                            </ul>
                        </div>}
                    link={<Button raised color="accent" onClick={() => Ping()}>Start PING</Button>} />
            </Grid>
        </Grid>
    );
};

PingPongNoReduxObservable.propTypes = {
    isPinging: PropTypes.bool.isRequired
};

export default PingPongNoReduxObservable;