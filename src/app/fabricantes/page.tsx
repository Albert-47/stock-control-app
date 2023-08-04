'use client';
import axios from '@/libs/axios';
import ManufacturersTable from './components/ManufacturersTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ManufacturersForm } from './components/ManufacturersForm';
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
                Lista de Fabricantes
            </Typography>
            <Box sx={{}}>
                <ManufacturersTable />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Fabricantes
            </Typography>
            <Box>
                <ManufacturersForm />
            </Box>
        </Container>
    );
}
