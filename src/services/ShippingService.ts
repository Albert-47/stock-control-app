import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    try {
        let result =
            await prisma.$executeRaw`INSERT INTO envios (codigoenvio, fecha, articulo, numerounidades) VALUES (${body.codigoenvio}, ${body.fecha}, ${body.articulo}, ${body.numerounidades})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}
