import React from "react";
import PropTypes from 'prop-types';

import { GridList, GridListTile } from "material-ui/GridList";
import Subheader from 'material-ui/List/ListSubheader';
import { withStyles } from 'material-ui/styles';

import Photo from './Photo';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      background: theme.palette.background.paper,
    },
    gridList: {
    //   width: 500,
    //   height: 450,
    },
  });

const Album = ({colorClass, album, classes}) => {
    return (
        <div className={classes.container}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <Subheader component="div">{album[0].albumId}</Subheader>
                </GridListTile>
                {album.map(photo =>
                    <Photo key={photo.id} photo={photo} colorClass={colorClass} />            
                )}
            </GridList>
        </div>
    );
};

Album.propTypes = {
    colorClass: PropTypes.string.isRequired,
    album: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired
};
    
export default withStyles(styles)(Album);  