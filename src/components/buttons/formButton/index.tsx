import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const FormButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        backgroundColor: 'hsla(91, 78%, 33%, 1)',
        boxShadow:
          '0px 1px 5px 0px hsla(0, 0%, 0%, 0.12), 0px 2px 2px 0px hsla(0, 0%, 0%, 0.14), 0px 3px 1px -2px hsla(0, 0%, 0%, 0.2)',
        borderRadius: 0,
        padding: '10px 16px',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '600',
        '&:hover': {
          backgroundColor: 'hsla(91, 78%, 33%, 0.8)',
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default FormButton;
