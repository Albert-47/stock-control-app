'use client';
import axios from '@/libs/axios';
import ClientsTable from './components/ClientsTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ClientsForm } from './components/ClientsForm';
export default function HomePage() {
    async function fetching() {
        const { data } = await axios.post('/clients', {
            nombre: 'Eduardo',
            rif: 123,
            direccion: 'Calle 123',
            telefono: '123456789',
            poblacion: 'Bogotá'
        });
    }

    return (
        <Container>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Lista de Clientes
            </Typography>
            <Box sx={{}}>
                <ClientsTable />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Clientes
            </Typography>
            <Box>
                <ClientsForm />
            </Box>
        </Container>
    );
}
