import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useForm from '@/utils/hooks/userForm';
import axios from '@/libs/axios';
import { MenuItem, Select } from '@mui/material';
import { useState, useEffect } from 'react';

export function ShippingsForm({ setShippings }: any) {
    const [fields, handleChange, setInputs] = useForm({
        codigoenvio: '',
        fecha: '',
        articulo: '',
        numerounidades: '',
        telefono: '',
        formapago: ''
    });

    const [articles, setArticles] = useState([]);

    async function posting(obj: any) {
        const { data } = await axios.post('/shippings', obj);
    }

    async function fetchArticles() {
        const { data } = await axios.get('/articles');
        setArticles(data);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await posting(fields);
        fields.id = fields.envio + 'muigrid';
        setShippings((shippings: any) => [...shippings, fields]);
        setInputs({
            codigoenvio: '',
            fecha: '',
            articulo: '',
            numerounidades: '',
            telefono: '',
            formapago: ''
        });
    }

    useEffect(() => {
        fetchArticles();
    }, []);
    return (
        <Paper sx={{ padding: 4, bgColor: 'secondary' }} elevation={3}>
            <Box
                onSubmit={handleSubmit}
                component='form'
                sx={{ display: 'flex', gap: 2 }}>
                <FormControl>
                    <InputLabel>Codigo de Envío</InputLabel>
                    <Input
                        name='codigoenvio'
                        type='number'
                        onChange={handleChange}
                        value={fields.codigoenvio}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    {/* <InputLabel>Fecha</InputLabel> */}
                    <Input
                        name='fecha'
                        onChange={handleChange}
                        value={fields.fecha}
                        color='primary'
                        type='date'
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
                <FormControl>
                    <InputLabel>Numero de Unidades</InputLabel>
                    <Input
                        name='numerounidades'
                        onChange={handleChange}
                        value={fields.numerounidades}
                        color='primary'
                        type='number'
                    />
                </FormControl>
                <Button type='submit' variant='outlined'>
                    Guardar
                </Button>
            </Box>
        </Paper>
    );
}
