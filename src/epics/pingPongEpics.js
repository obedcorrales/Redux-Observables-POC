import { ping, pong } from '../redux/actions';
import "rxjs/add/operator/mapTo";
import "rxjs/add/operator/delay";

// export const pingEpic = action$ => 
//     action$.filter(action => action.type === actions.ping.getType())
//         .delay(1000)
//         .mapTo(actions.pong.raw);

export const pingEpic = action$ => 
    action$.ofType(ping.getType())
        .delay(1000)
        .mapTo(pong);