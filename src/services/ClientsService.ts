import { StoreOrUpdateClientRequest } from '@/interfaces/Requests/StoreOrUpdateClientRequest';
import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const reqq = await req.json();

    const body: StoreOrUpdateClientRequest = reqq;
    try {
        let result =
            await prisma.$executeRaw`INSERT INTO clientes (rif, nombre, direccion, poblacion, telefono) VALUES (${Number(
                body.rif
            )}, ${body.nombre}, ${body.direccion}, ${body.poblacion}, ${
                body.telefono
            })`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}

export async function get() {
    try {
        let result = await prisma.$queryRaw`SELECT * FROM clientes`;
        return result;
    } catch (error) {
        console.error(error);
    }
}
