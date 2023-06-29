import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import { Container } from '@mui/system';
import { CongratulationsIcon } from '../../components/icons/congratulations';
import FormButton from '../../components/buttons/formButton';

function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: 'hsla(217, 33%, 17%, 1)',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem 3.75rem',
        minHeight: '100vh',
      }}
    >
      <Header title="InCode" subtitle="Finance" />

      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          marginTop: '6.8rem',
        }}
      >
        <Typography
          variant="h2"
          color="white"
          sx={{
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: '3rem',
            position: 'relative',
          }}
        >
          Congratulations
          <Box
            sx={{
              position: 'absolute',
              top: '-210%',
              right: '-22%',
            }}
          >
            <CongratulationsIcon />
          </Box>
        </Typography>
        <Typography
          color="white"
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </Typography>
        <FormButton>Log Out</FormButton>
      </Container>
    </Box>
  );
}

export default HomePage;
