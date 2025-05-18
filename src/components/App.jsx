
import { lazy} from 'react';
import { Route, Routes } from 'react-router-dom';

const Hometab = lazy(() => import('../pages/Hometab/Hometab'));
const NotFound = lazy(() => import('../pages/404page/404'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const CarDetails = lazy(()=> import('../pages/CarDetails/CarDetails'));

export default function App() {
    return (
        <Routes>
                <Route index element={<Hometab/>}/>
                <Route path='/catalog' element={<Catalog />}/>
                <Route path='/catalog/:id' element={<CarDetails/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}