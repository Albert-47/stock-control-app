import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'codigoenvio', headerName: 'Código Envío', width: 70 },
    { field: 'fecha', headerName: 'Fecha', width: 130 },
    { field: 'articulo', headerName: 'Articulo', width: 130 },
    { field: 'numerounidades', headerName: 'Nº de unidades', width: 130 }
];

export default function ArticlesTable({ shippings }: any) {
    if (shippings) {
        shippings.forEach((shipping: any) => {
            shipping.id = shipping.codigoenvio + 'muigrid';
        });
    }
    const rows = shippings;
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
