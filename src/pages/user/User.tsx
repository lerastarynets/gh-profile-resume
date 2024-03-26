import { useLoaderData } from 'react-router-dom';
import { UserLoaderReturnType } from '../../types/common';
import { Typography } from '@mui/material';
import { formatDate } from '../../utils/helpers';
import { LanguagesStatistics } from './components';
import { ReposList } from './components/ReposList';

export const User = () => {
    const { user } = useLoaderData() as UserLoaderReturnType;

    const { name, login, public_repos, created_at, followers, location } = user;
    const displayName = name || login;

    return (
        <>
            <Typography variant="h3">{displayName}</Typography>
            <section>
                <Typography variant="h6">On GitHub since {formatDate(created_at)}</Typography>
                <Typography variant="h6">Has {followers} followers</Typography>
                <Typography variant="h6">Has {public_repos} public repositories</Typography>
                {location && <Typography variant="h6">Is located in {location}</Typography>}
            </section>
            {!!public_repos && (
                <>
                    <LanguagesStatistics />
                    <ReposList />
                </>
            )}
        </>
    );
};
