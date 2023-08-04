import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useForm from '@/utils/hooks/userForm';

export function SalesForm() {
    const [fields, handleChange] = useForm({
        codigoventa: '',
        fecha: '',
        cliente: '',
        numeroarticulos: '',
        articulo: '',
        formapago: ''
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
                    <InputLabel>Fecha</InputLabel>
                    <Input
                        name='fecha'
                        onChange={handleChange}
                        value={fields.fecha}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Cliente</InputLabel>
                    <Input
                        name='cliente'
                        onChange={handleChange}
                        value={fields.cliente}
                        color='primary'
                    />
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
                    <Input
                        name='articulo'
                        onChange={handleChange}
                        value={fields.articulo}
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
