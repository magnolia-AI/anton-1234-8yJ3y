import PostList from "@/components/shared/PostList";
import CreatePostForm from "@/components/shared/CreatePostForm";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Social Feed</h1>
        <CreatePostForm />
        <PostList />
      </div>
    </main>
  );
}

