import { createRoot } from 'react-dom/client';
import './index.css';
import './global.css';
import Layout from './layout.jsx';
import Home from './components/Home.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Alumni_Map from './components/Map.jsx';
import Initiatives from './components/Initiatives.jsx';
import SAATeam from './components/TeamCard.jsx';
import VisitIITJ from './components/VisitIITJ.jsx';
import ASMP from './components/ASMP.jsx';
import MockInterviews from './components/MockInterviews.jsx';
import Legacy from './components/Legacy.jsx';
import RoomateRewind from './components/RoomateRewind.jsx';
import AlumniInduction from './components/AlumniInduction.jsx';
import AlumniSessions from './components/AlumniSessions.jsx';
import MemoirsLane from './components/MemoirsLane.jsx';
import InternBridge from './components/InternBridge.jsx';
import CrackTheCall from './components/CrackTheCall.jsx';
import Gallery from './components/Gallery.jsx';
import FalcultyAdvisor from './components/FacultyAdvisor.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div>404 Not Found - Page does not exist</div>}
    >
      <Route path="" element={<Home />} />
      <Route path="/alumniMap" element={<Alumni_Map />} />
      <Route path="/initiatives" element={<Initiatives />} />
      <Route path="/teams" element={<SAATeam/>}/>
      <Route path="/visitIITJ" element={<VisitIITJ/>}/>
      <Route path="/asmp" element={<ASMP/>}/>
      <Route path="/mi" element={<MockInterviews/>}/>
      <Route path="/legacy" element={<Legacy/>}/>
      <Route path="/rr" element={<RoomateRewind/>}/>
      <Route path="/aid" element={<AlumniInduction/>}/>
      <Route path="/as" element={<AlumniSessions/>}/>
      <Route path="/ib" element={<InternBridge/>}/>
      <Route path="/ml" element={<MemoirsLane/>}/>
      {/* <Route path="/alumniMap" element={<Alumni_Map/>}/> */}
      <Route path="/ctc" element={<CrackTheCall/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/faculty-advisor" element={<FalcultyAdvisor/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);