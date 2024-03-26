import { Button, TextField } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(username);
    };

    return (
        <form className="w-full flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
            <TextField
                className="w-full"
                color="secondary"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                helperText='Enter your GitHub username and then click on "Submit" button'
            />
            <Button variant="outlined" type="submit">
                Submit
            </Button>
        </form>
    );
};
