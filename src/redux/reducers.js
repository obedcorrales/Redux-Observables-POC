// Set up your root reducer here...
import { combineReducers } from 'redux';
import { createReducer } from "redux-act";

import * as actions from "./actions";
import initialState from "./initialState";

const currentAjaxCalls = createReducer({
    [actions.ajaxCallStart]: (state) => { return {message: "", msgType: "", inProgress: state.inProgress + 1}; },
    [actions.ajaxCallSuccess]: (state, successMsg) => { return {message: successMsg, msgType: "success", inProgress: state.inProgress - 1}; },
    [actions.ajaxCallError]: (state, errMsg) => { return {message: errMsg, msgType: "error", inProgress: state.inProgress - 1}; },
    [actions.ajaxCallClear]: (state) => { return {message: "", msgType: "", inProgress: state.inProgress}; }
  }, initialState.currentAjaxCalls);

const isPinging = createReducer({
    [actions.ping]: () => true,
    [actions.pingAction]: () => true,
    [actions.pong]: () => false
  }, initialState.isPinging);

const isFetchingPhotos = createReducer({
    [actions.getPhotos]: () => true,
    [actions.photosLoaded]: () => false
  }, initialState.photos.isFetching);

const photosData = createReducer({
    [actions.addPhotos]: (state, payload) => payload
  }, initialState.photos.data);

const rootReducer = combineReducers({
    currentAjaxCalls,
    isPinging,
    photos: combineReducers({
      isFetching: isFetchingPhotos,
      data: photosData
    })
  });

export default rootReducer;