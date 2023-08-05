import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    let date = new Date(body.fecha);

    try {
        let result =
            await prisma.$executeRaw`INSERT INTO envios (codigoenvio, fecha, articulo, numerounidades) VALUES (${Number(
                body.codigoenvio
            )}, ${date}, ${Number(body.articulo)}, ${Number(
                body.numerounidades
            )})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}

export async function get() {
    try {
        let result = await prisma.$queryRaw`SELECT * FROM envios`;
        return result;
    } catch (error) {
        console.error(error);
    }
}
