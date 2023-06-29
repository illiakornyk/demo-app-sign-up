import { Box, Typography } from '@mui/material';
import SignInForm from '../../components/auth/sign-in-form';
import SignUpForm from '../../components/auth/sign-up-form';

function AuthPage() {
  return (
    <Box
      sx={{
        bgcolor: 'hsla(217, 33%, 17%, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '425px',
          textAlign: 'left',
          padding: '47px',
          border: '1px solid red',
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700 }} color="white">
            InCode
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: 'hsla(91, 78%, 33%, 1)',
              marginTop: '6px',
            }}
          >
            Finance
          </Typography>
        </Box>
        {/* <SignUpForm /> */}
        <SignInForm />
      </Box>
    </Box>
  );
}

export default AuthPage;
