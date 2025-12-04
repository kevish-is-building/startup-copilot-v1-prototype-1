import { db } from '@/db';
import { user } from '@/db/schema';

async function main() {
    const now = Date.now();
    
    const sampleUsers = [
        {
            id: 'user1',
            name: 'John Doe',
            email: 'john@example.com',
            emailVerified: true,
            image: null,
            createdAt: new Date(now),
            updatedAt: new Date(now),
        },
        {
            id: 'user2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            emailVerified: true,
            image: null,
            createdAt: new Date(now),
            updatedAt: new Date(now),
        },
        {
            id: 'user3',
            name: 'Bob Johnson',
            email: 'bob@example.com',
            emailVerified: true,
            image: null,
            createdAt: new Date(now),
            updatedAt: new Date(now),
        },
    ];

    await db.insert(user).values(sampleUsers);
    
    console.log('✅ Users seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});