import React from "react";
import PropTypes from 'prop-types';

import { GridListTile, GridListTileBar } from "material-ui/GridList";

const Photo = ({ colorClass, photo }) => {
    return (
        <GridListTile key={photo.id} className="photoFrame" style={{borderColor: colorClass}}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <GridListTileBar
                title={photo.title}
                subtitle={<span>id: <a href={photo.url}>{photo.id}</a></span>}
            />
        </GridListTile>
    );
};

// <div className="photoFrame" style={{borderColor: colorClass}}>
//     <a href={photo.url}>
//         <img src={photo.thumbnailUrl} />
//     </a>
//     <br />
//     {photo.title}
// </div>

Photo.propTypes = {
    colorClass: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired
};
    
export default Photo;  