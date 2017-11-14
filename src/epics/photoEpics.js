import * as actions from '../redux/actions';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import _ from 'lodash';

import photosAgent from '../agents/photosAgent';

// https://visionmedia.github.io/superagent/
// https://www.npmjs.com/package/superagent-rxjs
// https://redux-observable.js.org/docs/basics/Epics.html
// https://chrisnoring.gitbooks.io/rxjs-5-ultimate/content/operators-and-ajax.html

export const getPhotosEpic = action$ =>
    action$.ofType(actions.getPhotos.getType())
        .mergeMap(() => 
            photosAgent.getPhotos()
                .catch(error => Observable.of(error))
                .map(response => {
                    let albums = _.groupBy(response.body, photo => photo.albumId);
                    let groupedAlbums = [];
                    _.forEach(albums, function(album) {
                        if (album.length > 0)
                        {
                            groupedAlbums.push({ 
                                    albumId: album[0].albumId,
                                    album: album
                                });
                        }
                    });

                    groupedAlbums = _.takeRight(groupedAlbums, 3);

                    _.forEach(groupedAlbums, function(album) {
                        album.album = _.takeRight(album.album, 2);
                    });

                    return actions.addPhotos(groupedAlbums);
                })
        ).mapTo(actions.photosLoaded);
        /// Don't use this approach, cause returning a subscription 
        ///     makes all other epics fail during combineEpics
        // ).subscribe(() => actions.photosLoaded());
    