import { Container } from '@mui/material';
import CustomButton from '../components/button';

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <img
        src="/images/notfound.png"
        alt="notFound"
        width="400px"
        height="400px"
      />
      <CustomButton sx={{ mt: '20px' }} variant="contained">
        Back
      </CustomButton>
    </Container>
  );
};

export default NotFoundPage;
