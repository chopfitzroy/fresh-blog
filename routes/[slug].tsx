import { Handlers } from "$fresh/server.ts";
import { getPost, Post } from "../utils/posts.ts";
import Markdown from "https://esm.sh/markdown-to-jsx@7.1.8?alias=react:preact/compat&deps=preact@10.8.2";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
      </time>
      <div class="mt-8">
        <Markdown children={post.content} />
      </div>
    </main>
  )
};

