import { Button, Link, TextField, Typography } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GH_LINK, TWEET_LINK } from '../../utils/constants';

export const Home = () => {
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
        <>
            <Typography align="center" variant="h3">
                GitHub Resume
            </Typography>
            <section className="flex flex-col space-y-2">
                <Typography>
                    As a software startup owner I really enjoy when people send us their resumes and they include their github
                    account so we can see tangible work they have done.
                </Typography>
                <Typography>
                    After a
                    <Link className="mx-1" href={TWEET_LINK} rel="noopener noreferrer" target="_blank">
                        tweet by John Resig
                    </Link>
                    I imagined that it may be nice for people to be able to generate their
                    <Link className="mx-1" href={GH_LINK} rel="noopener noreferrer" target="_blank">
                        GitHub
                    </Link>
                    resumes.
                </Typography>
            </section>
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
        </>
    );
};
