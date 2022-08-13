import React from 'react'
import '../Datatable/Datatable.scss'
import { userColumns, userRows } from '../../datasource';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'



const Datatable = () => {
  const actionColumn = [{
    field: "action", headerName: "Action", width: 200, renderCell: () => {
      return (
            <div className="cellAction">
                <Link to="/users/:userid" style={{textDecoration: "none"}}>
                    <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
            </div >
        )
    }}]

return (
  <div className='Datatable'>
    <DataGrid className='data'
      rows={userRows}
      columns={userColumns.concat(actionColumn)}
      pageSize={7}
      rowsPerPageOptions={[7]}
      checkboxSelection
    />
  </div>
)
}

export default Datatable