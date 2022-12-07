import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import {
Card,
 CardHeader, 
 CardActions, 
 Avatar, 
 IconButton 
}from '@material-ui/core/IconButton';

import ShareIcon from '@material-ui/icons/Share'
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

}));

const CustomerCard = ({
    name,
    LAstname,
    email,
    avatar,
    className,
}) => {
  const classes = useStyles();

  return (
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        
        title={'${Name} ${lastname}'}
        subheader="Email do cliente"
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CustomerCard
