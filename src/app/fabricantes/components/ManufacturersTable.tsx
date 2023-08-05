import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'codigofabricante',
        headerName: 'Codigo de Fabricante',
        width: 70
    },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'direccion', headerName: 'Dirección', width: 130 },
    { field: 'poblacion', headerName: 'Poblacion', width: 130 },
    {
        field: 'telefono',
        headerName: 'Teléfono',
        type: 'number',
        width: 90
    },
    { field: 'formapago', headerName: 'Forma de pago', width: 130 }
];

export default function ArticlesTable({ manufacturers }: any) {
    if (manufacturers) {
        manufacturers.forEach((manufacturer: any) => {
            manufacturer.id = manufacturer.rif + 'muigrid';
        });
    }
    const rows = manufacturers;
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
