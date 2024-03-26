import { getUserRepos, getUser } from '../utils/api';

type UserType = Awaited<ReturnType<typeof getUser>>['data'];

type ReposType = Awaited<ReturnType<typeof getUserRepos>>['data'];

export type RepoType = Awaited<ReturnType<typeof getUserRepos>>['data'][number];

export type UserLoaderReturnType = { user: UserType; repos: ReposType };

export type LanguageStatisticsItemType = { language: string; percent: number };
