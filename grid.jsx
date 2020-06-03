import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './grid.css';
class RocketGrid extends Component{
    constructor(props) {
        super(props);
        this.state = {
          columnDefs: [{
            headerName: "Date", field: "date",sortable: false
          }, {
            headerName: "Region", field: "region",sortable: true
          }, {
            headerName: "Rep", field: "rep",sortable: true
          },
          {
            headerName: "Item", field: "item",sortable: false, filter : true
          },
          {
            headerName: "Unit", field: "unit",sortable: false
          },
          {
            headerName: "UnitCost", field: "unitcost",sortable: false
          },
          {
            headerName: "Total", field: "total",sortable: false
          }
        ],
          rowData: [{
            date: "01/06/2019", region: "East", rep: "Jones",item: "Pencil",unit: "95",unitcost: "1.99",total: "189.05"
          }, {
            date: "01/23/2019", region: "Central", rep: "Kivell",item: "Binder",unit: "50",unitcost: "19.99",total: "999.5"
          }, {
            date: "02/09/2019", region: "Central", rep: "Jardine",item: "Pencil",unit: "36",unitcost: "4.99",total: "179.64"
          }],
          wid :'1000px',
          ok: false,
        }
        this.changetable = this.changetable.bind(this);
      }
      changetable =() =>
    {
        //e.preventDefault();
        this.setState  (
          { wid: '700px' ,ok:true}
        );
    }
      render() {
        return (
        // <div>
            
        //   <div
        //     className="ag-theme-alpine"
        //     style={{
        //         padding:'200px',
        //     height: '300px',
        //     width: this.state.wid ,
            
        // }}
        //   >
        //       <div className = 'wrapper'>
        //         <button className = 'button' onClick = {this.changetable} >Filter</button>
        //     </div>
        //     <AgGridReact
        //       columnDefs={this.state.columnDefs}
        //       rowData={this.state.rowData}
        //       >
        //     </AgGridReact>
        //   </div>
          
            
            
        //   </div>
        <div>
            <table>
                
                <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
       
            </table>
        </div>

        );
      }
}

export default RocketGrid;