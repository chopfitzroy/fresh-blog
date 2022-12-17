import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Markdown from "https://esm.sh/markdown-to-jsx@7.1.8?alias=react:preact/compat&deps=preact@10.8.2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Markdown>### Hello there old chap!</Markdown>
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
