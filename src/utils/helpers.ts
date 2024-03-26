import { LanguageStatisticsItemType, UserLoaderReturnType } from '../types/common';
import { LOCALE_UA } from './constants';

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(LOCALE_UA);
};

export const getLanguagePercentage = (repos: UserLoaderReturnType['repos']): LanguageStatisticsItemType[] => {
    // Create a Map to store the count of repositories for each language.
    const counts = new Map();

    // Iterate over each repository in the provided array.
    for (const repo of repos) {
        // Get the language of the repository. If language is not specified, use 'Unknown'.
        const language = repo.language || 'Unknown';
        // Increment the count for the language in the Map, or set it to 1 if not present.
        counts.set(language, (counts.get(language) || 0) + 1);
    }

    // Calculate the total number of repositories.
    const totalRepos = repos.length;

    // Calculate the percentage of repositories for each language and create an array of objects.
    const percentageList = [...counts].map(([language, count]) => ({
        language,
        percent: Math.round((count / totalRepos) * 100),
    }));

    return percentageList;
};
