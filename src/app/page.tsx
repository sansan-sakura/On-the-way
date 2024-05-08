import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { HoverEffect } from '@/components/ui/CardHoverEffect';

export default function Home() {
  const blogDir = './public/blogs';
  const files = fs.readdirSync(path.join(blogDir));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <div className="h-full">
      <h1 className="font-bold text-gray-700 text-5xl">
        <HoverEffect items={blogs} />
      </h1>
    </div>
  );
}
