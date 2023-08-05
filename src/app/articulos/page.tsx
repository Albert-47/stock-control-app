'use client';
import { useEffect, useState } from 'react';
import axios from '@/libs/axios';
import ArticlesTable from './components/ArticlesTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ArticleForm } from './components/ArticleForm';
export default function HomePage() {
    const [articles, setArticles] = useState([]);

    async function fetching() {
        const { data } = await axios.get('/articles');
        setArticles(data);
    }

    useEffect(() => {
        fetching();
    }, []);

    return (
        <Container>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Lista de Articulos
            </Typography>
            <Box sx={{}}>
                <ArticlesTable articles={articles} />
            </Box>
            <Typography variant='h3' textAlign={'center'} my={5}>
                Añadir Articulos
            </Typography>
            <Box>
                <ArticleForm setArticles={setArticles} />
            </Box>
        </Container>
    );
}
