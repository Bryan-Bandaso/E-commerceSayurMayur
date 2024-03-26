import { Button } from '@mui/material';

const CustomButton = (props) => {
  const { variant, children, sx } = props;
  return (
    <>
      <Button sx={sx} variant={variant}>
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
