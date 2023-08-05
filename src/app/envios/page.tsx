'use client';
import axios from '@/libs/axios';
import ShippingsTable from './components/ShippingsTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ShippingsForm } from './components/ShippingsForm';
import { useEffect, useState } from 'react';
export default function HomePage() {
    const [shppings, setShippings] = useState([]);

    async function fetching() {
        const { data } = await axios.get('/shippings');
        setShippings(data);
    }

    useEffect(() => {
        fetching();
    }, []);

    return (
        <Container>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Lista de Envíos
            </Typography>
            <Box sx={{}}>
                <ShippingsTable shippings={shppings} />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Envíos
            </Typography>
            <Box>
                <ShippingsForm setShippings={setShippings} />
            </Box>
        </Container>
    );
}
