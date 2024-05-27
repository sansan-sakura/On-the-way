import matter from 'gray-matter';
import fs from 'fs';

import { HoverEffect } from '@/components/ui/CardHoverEffect';
import { readdir } from 'fs/promises';
import { MetaData } from '@/types/markdown';

export default async function Home() {
  const entries = await readdir('./public/blogs', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir: any) => fs.readFileSync('./public/blogs/' + dir + '/index.mdx', 'utf-8'))
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);

    return { slug, ...data };
  }) as Array<MetaData>;

  posts.sort((a, b) => {
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });

  return (
    <div className="h-full">
      <h1 className="font-bold text-gray-700 text-5xl">
        <HoverEffect items={posts.flat()} />
      </h1>
    </div>
  );
}
