'use client';
import axios from '@/libs/axios';
import SalesTable from './components/SalesTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SalesForm } from './components/SalesForm';
import { useState, useEffect } from 'react';
export default function HomePage() {
    const [sales, setSales] = useState([]);

    async function fetching() {
        const { data } = await axios.get('/sales');
        setSales(data);
    }

    useEffect(() => {
        fetching();
    }, []);

    return (
        <Container>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Lista de Ventas
            </Typography>
            <Box sx={{}}>
                <SalesTable sales={sales} />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Ventas
            </Typography>
            <Box>
                <SalesForm setSales={setSales} />
            </Box>
        </Container>
    );
}
