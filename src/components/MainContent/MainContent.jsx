import './../MainContent/MainContent.css';
import { Route, Routes } from 'react-router-dom';
import MainDash from './../MainDash/MainDash';
import Sales from '../Sales/Sales';
import NotFound from '../NotFound/NotFound';
import SalesForm from '../Forms/Form';
import TechnicalStatus from '../TechnicalStatus/TechnicalStatus';

function MainContent() {
    return (
        <Routes>
            <Route path="/" element={<MainDash/>} />
            <Route path="/dashboard" element={<MainDash/>} />
            <Route path="/sales" element={<Sales/>} />
            <Route path="/technicalstatus" element={TechnicalStatus}/>
            <Route path="/form" element={<SalesForm/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainContent;