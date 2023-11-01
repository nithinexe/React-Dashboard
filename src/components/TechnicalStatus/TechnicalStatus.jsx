import './../Sales/Sales.css';
import MainDash from '../MainDash/MainDash';
import Table from "../Table/Table";
import SalesTable from '../SalesTable/SalesTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TechnicalStatusTable from '../TechnicalStatusTable/TechnicalStatusTable';
import './TechnicalStatus.css'

function TechnicalStatus() {
    return (
        <div className="technicalstatus">
            
            <h1>Technical Status</h1>
            <TechnicalStatusTable/>
        </div>
    )
}

export default TechnicalStatus;