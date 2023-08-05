import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    try {
        let result =
            await prisma.$executeRaw`INSERT INTO articulos (codigoarticulo, nombre, medidas, fabricante, precioventa, color) VALUES (${body.codigoarticulo}, ${body.nombre}, ${body.medidas}, ${body.fabricante}, ${body.precioventa}, ${body.color})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}

export async function get() {
    try {
        let result = await prisma.$queryRaw`SELECT * FROM articulos`;
        return result;
    } catch (error) {
        console.error(error);
    }
}
