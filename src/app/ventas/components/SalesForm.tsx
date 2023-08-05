import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useForm from '@/utils/hooks/userForm';
import axios from '@/libs/axios';
import { useState, useEffect } from 'react';
import { MenuItem, Select } from '@mui/material';

export function SalesForm({ setSales }: any) {
    const [fields, handleChange, setInputs] = useForm({
        codigoventa: '',
        fecha: '',
        cliente: '',
        numeroarticulos: '',
        articulo: '',
        formapago: ''
    });

    const [clients, setClients] = useState([]);
    const [articles, setArticles] = useState([]);

    async function posting(obj: any) {
        const { data } = await axios.post('/sales', obj);
    }

    async function fetchManufacturers() {
        const { data } = await axios.get('/clients');
        setClients(data);
    }

    async function fetchArticles() {
        const { data } = await axios.get('/articles');
        setArticles(data);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(fields);
        await posting(fields);
        fields.id = fields.rif + 'muigrid';
        setSales((article: any) => [...article, fields]);
        setInputs({
            codigoventa: '',
            fecha: '',
            cliente: '',
            numeroarticulos: '',
            articulo: '',
            formapago: ''
        });
    }

    useEffect(() => {
        fetchManufacturers();
        fetchArticles();
    }, []);
    return (
        <Paper sx={{ padding: 4, bgColor: 'secondary' }} elevation={3}>
            <Box
                onSubmit={handleSubmit}
                component='form'
                sx={{ display: 'flex', gap: 2 }}>
                <FormControl>
                    <InputLabel>Codigo de Venta</InputLabel>
                    <Input
                        name='codigoventa'
                        type='number'
                        onChange={handleChange}
                        value={fields.codigoventa}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    {/* <InputLabel>Fecha</InputLabel> */}
                    <Input
                        name='fecha'
                        type='date'
                        onChange={handleChange}
                        value={fields.fecha}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Cliente</InputLabel>
                    <Select
                        name='cliente'
                        onChange={handleChange}
                        value={fields.cliente}
                        color='primary'
                        sx={{ width: '7rem', marginRight: '1rem' }}>
                        {clients.map((client: any) => (
                            <MenuItem
                                key={client.rif + 'ay'}
                                value={client.rif}>
                                {client.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Nº articulos</InputLabel>
                    <Input
                        name='numeroarticulos'
                        onChange={handleChange}
                        value={fields.numeroarticulos}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Artículo</InputLabel>
                    <Select
                        name='articulo'
                        onChange={handleChange}
                        value={fields.articulo}
                        color='primary'
                        sx={{ width: '7rem', marginRight: '1rem' }}>
                        {articles.map((article: any) => (
                            <MenuItem
                                key={article.codigoarticulo}
                                value={article.codigoarticulo}>
                                {article.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button type='submit' variant='outlined'>
                    Guardar
                </Button>
            </Box>
        </Paper>
    );
}
