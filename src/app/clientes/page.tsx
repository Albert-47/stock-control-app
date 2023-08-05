'use client';
import axios from '@/libs/axios';
import ClientsTable from './components/ClientsTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ClientsForm } from './components/ClientsForm';
import { useEffect, useState } from 'react';
export default function HomePage() {
    const [clients, setClients] = useState([]);

    async function fetching() {
        const { data } = await axios.get('/clients');
        setClients(data);
    }

    useEffect(() => {
        fetching();
    }, []);

    return (
        <Container>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Lista de Clientes
            </Typography>
            <Box sx={{}}>
                <ClientsTable clients={clients} />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Clientes
            </Typography>
            <Box>
                <ClientsForm setClients={setClients} />
            </Box>
        </Container>
    );
}
