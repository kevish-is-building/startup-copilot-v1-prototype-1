import { db } from '@/db';
import { session } from '@/db/schema';

async function main() {
    const now = Date.now();
    const thirtyDaysFromNow = now + 30 * 24 * 60 * 60 * 1000;

    const sampleSessions = [
        {
            id: 'session1',
            expiresAt: new Date(thirtyDaysFromNow),
            token: 'token1',
            createdAt: new Date(now),
            updatedAt: new Date(now),
            ipAddress: '192.168.1.100',
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            userId: 'user1',
        },
        {
            id: 'session2',
            expiresAt: new Date(thirtyDaysFromNow),
            token: 'token2',
            createdAt: new Date(now),
            updatedAt: new Date(now),
            ipAddress: '10.0.0.50',
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            userId: 'user2',
        },
        {
            id: 'session3',
            expiresAt: new Date(thirtyDaysFromNow),
            token: 'token3',
            createdAt: new Date(now),
            updatedAt: new Date(now),
            ipAddress: '172.16.0.20',
            userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            userId: 'user3',
        },
    ];

    await db.insert(session).values(sampleSessions);
    
    console.log('✅ Sessions seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});