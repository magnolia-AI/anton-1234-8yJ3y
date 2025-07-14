'use client';

import { useActionState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { createPost } from '@/app/actions/posts';

type FormState = {
  error?: string;
  success?: boolean;
} | null;

export default function CreatePostForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (previousState, formData) => {
      const content = formData.get('content') as string;
      const result = await createPost(content);
      if (result.success) {
        // Resetting form is handled by the browser on successful navigation
        // or can be done manually if needed. Here, we'll just return success.
        return { success: true };
      }
      return { error: result.error };
    },
    null
  );

  return (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            {/* This should be the logged-in user's avatar */}
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <CardTitle>Create Post</CardTitle>
        </div>
      </CardHeader>
      <form action={formAction}>
        <CardContent>
          <Textarea
            name="content"
            placeholder="What's on your mind?"
            className="min-h-[80px]"
            key={state?.success ? Date.now() : 'content-textarea'} // Reset textarea on success
          />
          {state?.error && <p className="text-red-500 text-sm mt-2">{state.error}</p>}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Posting...' : 'Post'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

