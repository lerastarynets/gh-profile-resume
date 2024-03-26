import { useLoaderData } from 'react-router-dom';
import { Repo } from './Repo';
import { UserLoaderReturnType } from '../../../types/common';
import { Typography } from '@mui/material';

export const ReposList = () => {
    const { repos } = useLoaderData() as UserLoaderReturnType;

    return (
        <section className="flex flex-col space-y-3">
            <Typography variant="h6">List of his recently edited public repositories</Typography>
            {repos.map(({ html_url, name, pushed_at, description, language, created_at, forks }) => (
                <Repo
                    key={html_url}
                    html_url={html_url}
                    name={name}
                    pushed_at={pushed_at}
                    description={description}
                    language={language}
                    forks={forks}
                    created_at={created_at}
                />
            ))}
        </section>
    );
};
