import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import PingPongWithReduxObservables from "../components/PingPong/PingPongWithReduxObservables";
import PingPongNoReduxObservable from "../components/PingPong/PingPongNoReduxObservable";

import { Route, Link } from "react-router-dom";

const PingPong = ({isPinging, match}) => {        
    return (
        <div>
            {
                (match.path == "/pingpong" && match.isExact) ? null :
                    <div>
                        <h3><Link to="/pingpong">Back</Link></h3>
                        <hr />
                    </div>
            }
            <Route exact path="/pingpong" render={() => (
                <div>
                    <h3><Link to={`${match.url}/withObservables`}>Ping Pong Async Example using Redux Observables</Link></h3>
                    <h3><Link to={`${match.url}/noObservables`}>Ping Pong Async Example using Action</Link></h3>
                </div>
            )}/>
            <Route exact path="/pingpong/withObservables" render={(props) => (
                <PingPongWithReduxObservables {...props} isPinging={isPinging} />
            )}/>
            <Route exact path="/pingpong/noObservables" render={(props) => (
                <PingPongNoReduxObservable {...props} isPinging={isPinging} />
            )}/>
        </div>
    );
};

function mapStateToProps(store, ownProps) { //eslint-disable-line no-unused-vars
    return {
        isPinging: store.isPinging
    };
}

PingPong.propTypes = {
    isPinging: PropTypes.bool.isRequired,
    match: PropTypes.object
};

export default connect(mapStateToProps)(PingPong);