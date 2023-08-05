import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'rif', headerName: 'RIF', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'direccion', headerName: 'Dirección', width: 130 },
    { field: 'poblacion', headerName: 'Poblacion', width: 130 },
    {
        field: 'telefono',
        headerName: 'Teléfono',
        type: 'number',
        width: 90
    }
];

export default function ArticlesTable({ clients }: any) {
    if (clients) {
        clients.forEach((client: any) => {
            client.id = client.rif + 'muigrid';
        });
    }
    const rows = clients;
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 }
                    }
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}
