import './../Sales/Sales.css';
import MainDash from '../MainDash/MainDash';
import Table from "../Table/Table";
import SalesTable from '../SalesTable/SalesTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function AccountStatus() {
    return (
        <div className="accountstatus">
            
            <h1>Account Status</h1>
            <SalesTable/>
        </div>
    )
}

export default AccountStatus;