import { Link, Typography } from '@mui/material';
import { RepoType } from '../../../types/common';
import { formatDate } from '../../../utils/helpers';

type RepoProps = Pick<RepoType, 'html_url' | 'name' | 'pushed_at' | 'description' | 'language' | 'created_at' | 'forks'>;

export const Repo = ({ html_url, name, pushed_at, description, language, created_at, forks }: RepoProps) => (
    <section className="flex flex-col bg-violet-200 rounded-3xl p-4 break-words">
        <Link className="font-bold" underline="none" variant="h6" href={html_url} rel="noopener noreferrer" target="_blank">
            {name}
        </Link>
        {description && <Typography>Description: {description}</Typography>}
        {created_at && <Typography>Created at {formatDate(created_at)}</Typography>}
        {pushed_at && <Typography>Last edited at {formatDate(pushed_at)}</Typography>}
        {language && <Typography>Language: {language}</Typography>}
        <Typography>Forks count: {forks}</Typography>
    </section>
);
