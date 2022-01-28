import About from '../Pages/About';
import CurrentPost from '../Pages/CurrentPost';
import InMyRoom from '../Pages/InMyRoom';
import PostsPage from '../Pages/PostsPage';
import TablePage from '../Pages/TablePage';

export const Routes = [
	{ path: '/posts', component: PostsPage, exact: true },
	{ path: '/posts/:id', component: CurrentPost, exact: true },
	{ path: '/products', component: InMyRoom, exact: true },
	{ path: '/table', component: TablePage, exact: true },
];
