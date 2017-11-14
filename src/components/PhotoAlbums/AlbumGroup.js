import React from "react";
import PropTypes from 'prop-types';

import Album from './Album';

import '../../styles/styles.css';

const AlbumGroup = ({albums}) => {
    const borderColors = ['green', 'blue', 'burple'];
    let i = 0;
    return (
        <div>
            {albums.map(album =>
                <Album key={album.albumId} colorClass={borderColors[i++%3]} album={album.album} />
            )}
        </div>
    );
};

AlbumGroup.propTypes = {
    albums: PropTypes.array.isRequired
};
  
export default AlbumGroup;  