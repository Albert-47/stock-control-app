'use client';
import axios from '@/libs/axios';
import ManufacturersTable from './components/ManufacturersTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ManufacturersForm } from './components/ManufacturersForm';
import { useState, useEffect } from 'react';
export default function HomePage() {
    const [manufacturers, setManufacturers] = useState([]);

    async function fetching() {
        const { data } = await axios.get('/manufacturers');
        setManufacturers(data);
    }

    useEffect(() => {
        fetching();
    }, []);

    return (
        <Container>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Lista de Fabricantes
            </Typography>
            <Box sx={{}}>
                <ManufacturersTable manufacturers={manufacturers} />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Fabricantes
            </Typography>
            <Box>
                <ManufacturersForm setManufacturers={setManufacturers} />
            </Box>
        </Container>
    );
}
