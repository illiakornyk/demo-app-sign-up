import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { CongratulationsIcon } from '../../components/icons/congratulations';
import Header from '../../components/header';
import FormButton from '../../components/buttons/formButton';
import peopleImage from '../../assets/pics/people.png';

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
          marginTop: '6.8rem',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',

            flexDirection: 'column',
            gap: '3rem',
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
          <FormButton>
            <Link to="/auth" className={styles.link}>
              Log out
            </Link>
          </FormButton>
        </Box>

        <Box
          sx={{
            marginTop: '4.875rem',
          }}
        >
          <img alt="people" loading="lazy" src={peopleImage} />
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
