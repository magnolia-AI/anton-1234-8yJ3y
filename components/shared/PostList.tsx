import db from "@/lib/db";
import { posts, users } from "@/lib/schema";
import { desc } from "drizzle-orm";
import PostCard from "./PostCard";
import { eq } from "drizzle-orm";

export default async function PostList() {
  const postData = await db
    .select({
      id: posts.id,
      content: posts.content,
      imageUrl: posts.imageUrl,
      createdAt: posts.createdAt,
      author: {
        name: users.name,
        username: users.username,
        imageUrl: users.imageUrl,
      },
    })
    .from(posts)
    .innerJoin(users, eq(posts.authorId, users.id))
    .orderBy(desc(posts.createdAt));

  return (
    <div>
      {postData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}


