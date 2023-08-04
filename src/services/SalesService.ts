import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    try {
        let result =
            await prisma.$executeRaw`INSERT INTO ventas (codigoventa, fecha, cliente, preciounidad, preciototal, numeroarticulos) VALUES (${body.codigoventa}, ${body.fecha}, ${body.cliente}, ${body.preciounidad}, ${body.preciototal}, ${body.numeroarticulos})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}
