import { lazy} from 'react';
/* import { useDispatch, useSelector } from 'react-redux'; */
import { Route, Routes } from 'react-router-dom';

const Hometab = lazy(() => import('../components/Hometab/Hometab'));

export default function App() {
    return (
        <Routes>
            <Route index element={<Hometab/>}/>
        </Routes>
    );
}