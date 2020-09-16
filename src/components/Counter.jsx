import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Counter = () => {
  // const [count, setCount] = useState(0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch({ type: 'DECREMENT_COUNTER' })}
      >
        <RemoveIcon />
      </Button>
      <Typography variant="h4" style={{ padding: '20px' }}>
        {counter.counter}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: 'INCREMENT_COUNTER' })}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default Counter;
