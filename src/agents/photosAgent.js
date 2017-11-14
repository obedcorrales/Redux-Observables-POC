import request from "superagent";
import observify from 'superagent-rxjs';

observify(request);

class photosAgent {
    static getPhotos = () => 
        request.get('https://jsonplaceholder.typicode.com/photos')
            .accept('json')
            .observify();
}

export default photosAgent;