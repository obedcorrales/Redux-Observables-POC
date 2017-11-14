import { createAction } from "redux-act";

// ajaxStatus
export const ajaxCallStart = createAction();
export const ajaxCallSuccess = createAction();
export const ajaxCallError = createAction();
export const ajaxCallClear = createAction();

// Ping pong
export const ping = createAction();
export const pingAction = createAction();
export const pong = createAction();

// Photos
export const getPhotos = createAction();
export const addPhotos = createAction();
export const photosLoaded = createAction();