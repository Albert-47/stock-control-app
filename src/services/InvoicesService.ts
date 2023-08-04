import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    try {
        let result =
            await prisma.$executeRaw`INSERT INTO facturas (codigofactura, fecha, cliente, totalfactura, vencimiento, formapago) VALUES (${body.codigofactura}, ${body.fecha}, ${body.cliente}, ${body.totalfactura}, ${body.vencimiento}, ${body.formapago})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}
