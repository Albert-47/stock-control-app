import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'codigoarticulo', headerName: 'Código Articulo', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'medidas', headerName: 'Medidas', width: 130 },
    { field: 'fabricante', headerName: 'Fabricante', width: 130 },
    {
        field: 'precioventa',
        headerName: 'Precio de Venta',
        type: 'number',
        width: 90
    }
];

export default function ArticlesTable({ articles }: any) {
    articles.forEach((article: any) => {
        article.id = article.codigoarticulo + 'muigrid';
    });
    const rows = articles;
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
