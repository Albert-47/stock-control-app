'use client';
import { useEffect } from 'react';
import axios from '../libs/axios';
import ArticlesTable from './articles/components/ArticlesTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ArticleForm } from './articles/components/ArticleForm';
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
                Lista de Articulos
            </Typography>
            <Box sx={{}}>
                <ArticlesTable />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Articulos
            </Typography>
            <Box>
                <ArticleForm />
            </Box>
        </Container>
    );
}

export async function getServerSideProps() {
    const { data } = await axios.post('/clients', {
        nombre: 'Eduardo',
        rif: 123,
        direccion: 'Calle 123',
        telefono: '123456789',
        poblacion: 'Bogotá'
    });
    return {
        props: {}
    };
}
