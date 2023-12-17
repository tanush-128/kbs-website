import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexRoute from './routes/index/index.route';
import Navagation from './components/navagation/navagation.component';
import EventRoute from './routes/events/events.route';
import OurTeam from './routes/ourTeam/our-team.route';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navagation />} >
        <Route index element={<IndexRoute />} />
        <Route path='events' element={<EventRoute />} />
        <Route path='team' element={<OurTeam />} />
      </Route>
    </Routes>
  );
}

export default App;
