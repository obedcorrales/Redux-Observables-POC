import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { Button } from "material-ui";
import { CircularProgress } from 'material-ui/Progress';

import { getPhotos } from '../redux/actions';
import AlbumGroup from '../components/PhotoAlbums/AlbumGroup';

const PhotoAlbum = ({albums, isFetchingPhotos}) => {
    return (
        <div>
            <h1>
                is Fetching: {isFetchingPhotos.toString()}
                { (isFetchingPhotos) ?
                    <span style={{ padding: 10 }}>
                        <CircularProgress size={25} color="accent" />
                    </span> : null
                }
            </h1>
            <Button onClick={() => getPhotos()} raised color="accent">
                Get Photos
            </Button>
            <AlbumGroup albums={albums} />
        </div>
    );
};

function mapStateToProps(store, ownProps) { //eslint-disable-line no-unused-vars
    return {
        isFetchingPhotos: store.photos.isFetching,
        albums: store.photos.data
    };
}

PhotoAlbum.propTypes = {
    isFetchingPhotos: PropTypes.bool.isRequired,
    albums: PropTypes.array,
};

export default connect(mapStateToProps)(PhotoAlbum);
