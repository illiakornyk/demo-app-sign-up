import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 700 }} color="white">
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          color: 'hsla(91, 78%, 33%, 1)',
          marginTop: '6px',
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
