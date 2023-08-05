import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useForm from '@/utils/hooks/userForm';
import axios from '@/libs/axios';

export function ManufacturersForm({ setManufacturers }: any) {
    const [fields, handleChange, setInputs] = useForm({
        codigofabricante: '',
        nombre: '',
        direccion: '',
        poblacion: '',
        telefono: '',
        formapago: ''
    });
    async function posting(obj: any) {
        const { data } = await axios.post('/manufacturers', obj);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await posting(fields);
        fields.id = fields.codigofabricantes + 'muigrid';
        setManufacturers((manufacturers: any) => [...manufacturers, fields]);
        setInputs({
            codigofabricante: '',
            nombre: '',
            direccion: '',
            poblacion: '',
            telefono: '',
            formapago: ''
        });
    }
    return (
        <Paper sx={{ padding: 4, bgColor: 'secondary' }} elevation={3}>
            <Box
                onSubmit={handleSubmit}
                component='form'
                sx={{ display: 'flex', gap: 2 }}>
                <FormControl>
                    <InputLabel>Codigo de Fabricante</InputLabel>
                    <Input
                        name='codigofabricante'
                        type='number'
                        onChange={handleChange}
                        value={fields.codigofabricante}
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
                    <InputLabel>Dirección</InputLabel>
                    <Input
                        name='direccion'
                        onChange={handleChange}
                        value={fields.direccion}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Población</InputLabel>
                    <Input
                        name='poblacion'
                        onChange={handleChange}
                        value={fields.poblacion}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Teléfono</InputLabel>
                    <Input
                        name='telefono'
                        onChange={handleChange}
                        value={fields.telefono}
                        color='primary'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Forma de Pago</InputLabel>
                    <Input
                        name='formapago'
                        onChange={handleChange}
                        value={fields.formapago}
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
