import { lazy} from 'react';
/* import { useDispatch, useSelector } from 'react-redux'; */
import { Route, Routes } from 'react-router-dom';

const Hometab = lazy(() => import('../pages/Hometab/Hometab'));
const NotFound = lazy(() => import('../pages/404page/404'));

export default function App() {
    return (
        <Routes>
            <Route index element={<Hometab/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}