import About from '../pages/About';
import Login from '../pages/Login';
import PostIdPages from '../pages/PostIdPages';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', component: <About /> },
  { path: '/posts', component: <Posts /> },
  { path: '/posts/:id', component: <PostIdPages /> },
];

export const publicRoutes = [{ path: '/login', component: <Login /> }];
