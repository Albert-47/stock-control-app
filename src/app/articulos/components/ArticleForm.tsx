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

export function ArticleForm({ setArticles }: any) {
    const [fields, handleChange, setInputs] = useForm({
        codigoarticulo: '',
        nombre: '',
        color: '',
        medidas: '',
        fabricante: '',
        precioventa: ''
    });

    const [manufacturers, setManufacturers] = useState([]);

    async function posting(obj: any) {
        const { data } = await axios.post('/articles', obj);
    }

    async function fetchManufacturers() {
        const { data } = await axios.get('/manufacturers');
        setManufacturers(data);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(fields);
        await posting(fields);
        fields.id = fields.rif + 'muigrid';
        setArticles((article: any) => [...article, fields]);
        setInputs({
            codigoarticulo: '',
            nombre: '',
            color: '',
            medidas: '',
            fabricante: '',
            precioventa: ''
        });
    }

    useEffect(() => {
        fetchManufacturers();
    }, []);
    return (
        <Paper sx={{ padding: 4, bgColor: 'secondary' }} elevation={3}>
            <Box
                onSubmit={handleSubmit}
                component='form'
                sx={{ display: 'flex', gap: 2 }}>
                <FormControl>
                    <InputLabel>Código de Artículo</InputLabel>
                    <Input
                        name='codigoarticulo'
                        onChange={handleChange}
                        value={fields.codigoarticulo}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Nombre</InputLabel>
                    <Input
                        name='nombre'
                        onChange={handleChange}
                        value={fields.nombre}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Color</InputLabel>
                    <Input
                        name='color'
                        onChange={handleChange}
                        value={fields.color}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Medidas</InputLabel>
                    <Input
                        name='medidas'
                        onChange={handleChange}
                        value={fields.medidas}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Fabricante</InputLabel>
                    <Select
                        name='fabricante'
                        onChange={handleChange}
                        value={fields.fabricante}
                        color='primary'
                        sx={{ width: '7rem', marginRight: '1rem' }}>
                        {manufacturers.map((manufacturer: any) => (
                            <MenuItem
                                key={manufacturer.codigofabricante}
                                value={manufacturer.codigofabricante}>
                                {manufacturer.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Precio de venta</InputLabel>
                    <Input
                        name='precioventa'
                        onChange={handleChange}
                        value={fields.precioventa}
                        color='primary'
                    />
                </FormControl>
                <Button type='submit' variant='outlined'>
                    Guardar
                </Button>
            </Box>
        </Paper>
    );
}
