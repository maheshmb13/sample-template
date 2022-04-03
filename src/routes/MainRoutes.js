import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// utilities routing
const SamplePage = Loadable(lazy(() => import('views/sample-page/')));

const Page1 = Loadable(lazy(() => import('views/sample-page/Page1')));
const Page2 = Loadable(lazy(() => import('views/sample-page/Page2')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <SamplePage />
        },
        {
            path: '/page1',
            element: <Page1 />
        },
        {
            path: '/page2',
            element: <Page2 />
        }
    ]
};

export default MainRoutes;
