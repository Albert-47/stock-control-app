import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function ArticleForm() {
    return (
        <Paper sx={{ padding: 4, bgColor: 'secondary' }} elevation={3}>
            <Box component='form' sx={{ display: 'flex', gap: 2 }}>
                <FormControl>
                    <InputLabel>Nombre</InputLabel>
                    <Input color='primary' />
                </FormControl>
                <FormControl>
                    <InputLabel>Color</InputLabel>
                    <Input color='primary' />
                </FormControl>
                <FormControl>
                    <InputLabel>Medidas</InputLabel>
                    <Input color='primary' />
                </FormControl>
                <FormControl>
                    <InputLabel>Fabricante</InputLabel>
                    <Input color='primary' />
                </FormControl>
                <FormControl>
                    <InputLabel>Precio de venta</InputLabel>
                    <Input color='primary' />
                </FormControl>
                <Button type='submit' variant='outlined'>
                    Guardar
                </Button>
            </Box>
        </Paper>
    );
}
