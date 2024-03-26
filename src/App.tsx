import { Params, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getUser, getUserRepos } from './utils/api';
import { CircularProgress } from '@mui/material';
import { NotFound } from './pages/notFound';
import { Home } from './pages/home';
import { User } from './pages/user';

const userLoader = async ({ params: { username } }: { params: Params<'username'> }) => {
    const [user, repos] = await Promise.all([getUser(username!), getUserRepos(username!)]);
    return { user: user.data, repos: repos.data };
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: ':username',
        element: <User />,
        errorElement: <NotFound />,
        loader: userLoader,
    },
]);

export const App = () => {
    return (
        <main className="max-w-4xl p-6 flex flex-col space-y-5 items-center">
            <RouterProvider fallbackElement={<CircularProgress />} router={router} />
        </main>
    );
};
