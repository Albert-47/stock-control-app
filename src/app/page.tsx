'use client';
import { useEffect } from 'react';
import axios from '../libs/axios';
export default function HomePage() {
    async function fetching() {
        const { data } = await axios.post('/clients', {
            nombre: 'Eduardo',
            rif: 123,
            direccion: 'Calle 123',
            telefono: '123456789',
            poblacion: 'Bogotá'
        });
    }

    return <div>page</div>;
}

export async function getServerSideProps() {
    const { data } = await axios.post('/clients', {
        nombre: 'Eduardo',
        rif: 123,
        direccion: 'Calle 123',
        telefono: '123456789',
        poblacion: 'Bogotá'
    });
    return {
        props: {}
    };
}
