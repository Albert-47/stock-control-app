import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    try {
        let result =
            await prisma.$executeRaw`INSERT INTO fabricantes (codigofabricante, nombre, direccion, poblacion, telefono, formapago) VALUES (${body.codigofabricante}, ${body.nombre}, ${body.direccion}, ${body.poblacion}, ${body.telefono}, ${body.formapago})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}
