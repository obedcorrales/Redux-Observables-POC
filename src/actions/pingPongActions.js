import { pingAction, pong } from "../redux/actions";

export const Ping = () => {
    pingAction();
    return new Promise(resolve => {
        setTimeout(() => 
            resolve(), 
            3000);
    }).then(() =>
        pong()
    );
};

