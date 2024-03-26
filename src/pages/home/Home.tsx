import { Link, Typography } from '@mui/material';
import { GH_LINK, TWEET_LINK } from '../../utils/constants';
import { Form } from './components';

export const Home = () => (
    <>
        <Typography align="center" variant="h3">
            GitHub Resume
        </Typography>
        <section className="flex flex-col space-y-2">
            <Typography>
                As a software startup owner I really enjoy when people send us their resumes and they include their github account
                so we can see tangible work they have done.
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
        <Form />
    </>
);
