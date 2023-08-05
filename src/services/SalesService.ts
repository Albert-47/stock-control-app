import { prisma } from '../libs/prisma';

export async function store(req: any) {
    const body = await req.json();

    let date = new Date(body.fecha);

    try {
        let article: any =
            await prisma.$queryRaw`SELECT * FROM articulos WHERE codigoarticulo = ${Number(
                body.codigoarticulo
            )}`;
        let result =
            await prisma.$executeRaw`INSERT INTO ventas (codigoventa, fecha, cliente, preciounidad, preciototal, numeroarticulos, articulo) VALUES (${Number(
                body.codigoventa
            )}, ${date}, ${Number(body.cliente)}, ${Number(
                Number(article.preciounidad)
            )}, ${Number(
                Number(body.preciototal) * Number(article.preciounidad)
            )}, ${Number(body.numeroarticulos)}, ${Number(
                body.codigoarticulo
            )})`;
        return result;
    } catch (error: any) {
        console.error(error);
        throw new Error(error);
    }
}

export async function get() {
    try {
        let result = await prisma.$queryRaw`SELECT * FROM ventas`;
        return result;
    } catch (error) {
        console.error(error);
    }
}
