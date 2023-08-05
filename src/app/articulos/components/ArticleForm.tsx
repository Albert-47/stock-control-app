import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useForm from '@/utils/hooks/userForm';

export function ArticleForm() {
    const [fields, handleChange] = useForm({
        codigoarticulo: '',
        nombre: '',
        color: '',
        medidas: '',
        fabricante: '',
        precioventa: ''
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(fields);
    }
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
                    <Input
                        name='fabricante'
                        onChange={handleChange}
                        value={fields.fabricante}
                        color='primary'
                    />
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
