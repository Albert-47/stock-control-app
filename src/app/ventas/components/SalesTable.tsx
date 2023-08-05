import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'codigoventa', headerName: 'Código Venta', width: 70 },
    { field: 'fecha', headerName: 'Fecha', width: 130 },
    { field: 'client', headerName: 'Cliente', width: 130 },
    { field: 'numeroarticulos', headerName: 'Nº Articulos', width: 130 },
    { field: 'articulo', headerName: 'Articulo', width: 130 }
];

export default function ArticlesTable({ sales }: any) {
    sales.forEach((sale: any) => {
        sale.id = sale.codigoventa + 'muigrid';
    });
    const rows = sales;
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
