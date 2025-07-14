'use server';

import { revalidatePath } from 'next/cache';
import db from '@/lib/db';
import { posts } from '@/lib/schema';

export async function createPost(content: string) {
  if (!content.trim()) {
    return { error: 'Content cannot be empty' };
  }

  try {
    // We'll hardcode the authorId to 1 until we have authentication
    await db.insert(posts).values({
      content,
      authorId: 1, 
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error creating post:', error);
    return { error: 'Failed to create post' };
  }
}

