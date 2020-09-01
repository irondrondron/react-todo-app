import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Counter = () => {
  const [count, setCount] = useState(0);

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
        onClick={() => setCount(count - 1)}
      >
        <RemoveIcon/>
      </Button>
      <Typography variant="h4" style={{padding:'20px'}}>
        {count}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        <AddIcon/>
      </Button>
    </div>
  );
};

export default Counter;
