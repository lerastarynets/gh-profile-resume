import { Octokit } from '@octokit/rest';
import { DEFAULT_REPOS_COUNT } from './constants';

const octokit = new Octokit();

export const getUser = async (username: string) => {
    return await octokit.rest.users.getByUsername({ username });
};

export const getUserRepos = async (username: string) => {
    return await octokit.rest.repos.listForUser({
        username,
        sort: 'pushed',
        per_page: DEFAULT_REPOS_COUNT,
    });
};
