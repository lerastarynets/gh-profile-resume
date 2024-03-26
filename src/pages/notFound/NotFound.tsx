import { Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

export const NotFound = () => {
    const navigate = useNavigate();
    const { username } = useParams();

    const handleBackClick = () => navigate(ROUTES.HOME);

    return (
        <>
            <Typography align="center" variant="h3">
                User with username {username} doesn't exist
            </Typography>
            <Button variant="outlined" onClick={handleBackClick}>
                Go back to home page
            </Button>
        </>
    );
};
