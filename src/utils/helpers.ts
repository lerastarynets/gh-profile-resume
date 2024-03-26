import { LOCALE_UA } from './constants';

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(LOCALE_UA);
};
