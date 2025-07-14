import PostList from "@/components/shared/PostList";

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-8">
      <h1 className="text-3xl font-bold mb-8">Social Feed</h1>
      <PostList />
    </main>
  );
}

