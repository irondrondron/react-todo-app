import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
} from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0px 0px 6px 3px #00000033',
  },
});

const TodoTabs = (props) => {
  const classes = useStyles(0);
  const [value, setValue] = useState(0);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to={'/all'}
          label="All Todos"
          icon={
            <Badge badgeContent={props.allTodosLength} color="secondary">
              <ViewListIcon />
            </Badge>
          }
        />
        <BottomNavigationAction
          component={Link}
          to={'/active'}
          label="Active"
          icon={
            <Badge badgeContent={props.activeLength} color="secondary">
              <WhatshotIcon />
            </Badge>
          }
        />
        <BottomNavigationAction
          component={Link}
          to={'/complete'}
          label="Complete"
          icon={
            <Badge badgeContent={props.completeLength} color="secondary">
              <DoneOutlineIcon />
            </Badge>
          }
        />
      </BottomNavigation>
    </div>
  );
};
export default TodoTabs;
