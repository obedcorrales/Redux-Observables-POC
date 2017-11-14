import { combineEpics } from "redux-observable";
import { pingEpic } from './pingPongEpics';
import { getPhotosEpic } from './photoEpics';

export const rootEpic = combineEpics(
    pingEpic,
    getPhotosEpic
);