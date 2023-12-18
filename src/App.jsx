import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexRoute from './routes/index/index.route';
import Navagation from './components/navAndFooter/nav-and-footer.component';
import EventRoute from './routes/events/events.route';
import OurTeam from './routes/ourTeam/our-team.route';
import BlogsRoute from './routes/allBlogs/blogs.route';
import BlogPage from './routes/blogPage/blog-page.route';
import SignIn from './components/authentication/sign-in.component';
import SignUp from './components/authentication/sign-up.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navagation />} >
        <Route index element={<IndexRoute />} />
        <Route path='events' element={<EventRoute />} />
        <Route path='team' element={<OurTeam />} />
        <Route path='blogs' element={<BlogsRoute />} />
        <Route path='blogs/:id' element={<BlogPage />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
