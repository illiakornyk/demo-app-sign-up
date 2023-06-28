import { Box, Typography } from '@mui/material';
import SignInForm from '../../components/auth/sign-in-form';

function AuthPage() {
  return (
    <Box sx={{ bgcolor: 'hsla(217, 33%, 17%, 1)' }}>
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        InCode
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Finance
      </Typography>

      <SignInForm />
    </Box>
  );
}

export default AuthPage;
