import Create from "../assets/Lab_05/create.png";
// import EditUserModal from "./Toggle.jsx";
// import ModalAdd from "./ModalAdd.jsx";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { Button } from "primereact/button";
// import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";


export default function Dashboard() {
   
    return(
        <div className="dashboard">
           <div className="relative h-4"> <button className="absolute right-10 bg-green-600 text-white font-bold  rounded-lg pl-4 pr-4" onClick={() => setIsAddOpen(true)}>Add</button></div>
            <DataTable
                
                paginator
                rows={6}
                className="p-datatable-customers custom-header mt-3"
                dataKey="id"
                responsiveLayout="scroll"
                >
                <Column header=" " selectionMode="multiple"  />
                <Column header="Customer Name"  />               
                <Column field="company" header="Company" />
                <Column header="Order Value" />
                <Column header="Order Date" />
                <Column header="Status"  />
                <Column body={<button><img src={Create} alt="Edit" />
                                    </button> } />
                
            </DataTable>
          
            
            <span className="block ml-7 text-sm text-gray-500"> results</span>
        </div>
    )
}