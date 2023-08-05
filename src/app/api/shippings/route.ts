import { get } from '@/services/ShippingService';
import { store } from '@/services/ShippingService';
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
