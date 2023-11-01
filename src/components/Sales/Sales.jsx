import './../Sales/Sales.css';
import MainDash from '../MainDash/MainDash';
import Table from "../Table/Table";
import SalesTable from '../SalesTable/SalesTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Sales() {
    return (
        <><div className="sales">
            
            <h1>Sales</h1><Button className='createLead' variant="contained"><Link to="/form" >Create</Link></Button>
            {/* <MainDash/> */}
            <div className='sales-table-content'><SalesTable/></div>
        </div>
        </>
    )
}
export default Sales;