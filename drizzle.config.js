export default {
    dialect: 'postgresql',
    schema: './lib/database/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: process.env.DATABASE_URL,
        connectionString: process.env.DATABASE_URL,
    }
}