import 'dotenv/config';
import db from './db';
import { users, posts } from './schema';

async function main() {
  console.log('Starting database seed...');

  try {
    // Clear existing data
    await db.delete(posts);
    await db.delete(users);

    console.log('Seeding users...');
    const insertedUsers = await db.insert(users).values([
      {
        name: 'Alice',
        email: 'alice@example.com',
        username: 'alice',
        imageUrl: 'https://i.pravatar.cc/150?u=alice',
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        username: 'bob',
        imageUrl: 'https://i.pravatar.cc/150?u=bob',
      },
    ]).returning();

    console.log('Seeding posts...');
    await db.insert(posts).values([
      {
        content: 'Just setting up my new social media feed!',
        authorId: insertedUsers[0].id,
      },
      {
        content: 'Loving the design of this new app. #webdev',
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop',
        authorId: insertedUsers[1].id,
      },
      {
        content: 'Drizzle ORM is pretty cool for working with databases in TypeScript.',
        authorId: insertedUsers[0].id,
      },
    ]);

    console.log('Database seed completed successfully!');
  } catch (error) {
    console.error('Error during seed:', error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });

