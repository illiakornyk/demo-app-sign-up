import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const Input = (props: TextFieldProps) => {
  return (
    <TextField
      required
      id="outlined-required"
      label="Label"
      defaultValue="default value"
      placeholder="placeholder"
      InputLabelProps={{ shrink: true }}
      variant="standard"
      sx={{
        '& label': {
          fontSize: '14px',
          color: 'white',
        },
        '& input::placeholder': {
          color: 'hsla(0, 0%, 100%, 1)',
          fontSize: '16px',
          lineHeight: '24.8px',
          opacity: '70%',
        },
      }}
      {...props}
    />
  );
};

export default Input;
