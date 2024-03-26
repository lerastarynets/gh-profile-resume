import { useLoaderData } from 'react-router-dom';
import { UserLoaderReturnType } from '../../../types/common';
import { getLanguagePercentage } from '../../../utils/helpers';
import { Typography } from '@mui/material';

export const LanguagesStatistics = () => {
    const { repos } = useLoaderData() as UserLoaderReturnType;

    const languagesStatistics = getLanguagePercentage(repos);

    return (
        <>
            <Typography variant="h6">
                List of programming languages that are used in his recently edited public repositories:
            </Typography>
            <div className="bg-violet-200 rounded-3xl p-4 w-fit">
                {languagesStatistics.map(({ language, percent }) => (
                    <Typography key={language}>
                        {language}: {percent}%
                    </Typography>
                ))}
            </div>
        </>
    );
};
