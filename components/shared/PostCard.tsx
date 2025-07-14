import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Share2, Bookmark } from "lucide-react";
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'


type PostCardProps = {
  post: {
    id: number;
    content: string;
    imageUrl?: string | null;
    author: {
      name: string;
      username: string;
      imageUrl?: string | null;
    };
  };
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.imageUrl || undefined} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">@{post.author.username}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
        {post.imageUrl && (
          <img src={post.imageUrl} alt="Post image" className="mt-4 rounded-lg" />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}

