import { get } from '@/services/ClientsService';
import { store } from '@/services/ClientsService';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const res = await store(req);
        return NextResponse.json(res);
    } catch (error) {
        return error;
    }
}

export async function GET() {
    try {
        const res = await get();
        return NextResponse.json(res);
    } catch (error) {
        return error;
    }
}
