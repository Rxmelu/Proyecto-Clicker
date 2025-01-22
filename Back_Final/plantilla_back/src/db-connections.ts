import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5433,
    database: 'prueba1'
});

export function query(text: any): any {
        return pool.query(text);
}