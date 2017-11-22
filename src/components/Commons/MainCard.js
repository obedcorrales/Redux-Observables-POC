import React from "react";
import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent, CardActions, CardMedia, Avatar, Button, Typography } from "material-ui";
import { red } from 'material-ui/colors';

import { withStyles } from 'material-ui/styles';

const styles = () => ({
    card: {
      height: "100%"
    },
    avatar: {
        backgroundColor: red[500]
    },
    media: {
        height: 130,
    }
});

const MainCard = ({title, subTitle, imageUrl, description, link, maxWidth, classes}) => {
    return (
        <Card className={classes.card} style={{ maxWidth: maxWidth || 285 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label={title} className={classes.avatar}>
                        {title.substr(0,1)}
                    </Avatar>}
                title={title}
                subheader={subTitle}/>
            <CardMedia className={classes.media} image={imageUrl} title={title} />
            <CardActions>
                <Button dense color="primary">{link}</Button>
            </CardActions>
            <CardContent>
                <Typography component="div">
                {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

MainCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    maxWidth: PropTypes.number
};

export default withStyles(styles)(MainCard);