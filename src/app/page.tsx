import { CardsBlog } from '@/components/CardBlog';
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function Home() {
  // app/page.tsx

  // 1) Set blogs directory
  const blogDir = './public/blogs';

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir));

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  console.log(blogs);
  return (
    <div className="h-full">
      <h1 className="font-bold text-gray-700 text-5xl">
        <CardsBlog projects={blogs} />{' '}
      </h1>
    </div>
  );
}

export async function getPosts() {
  const entries = await readdir('../content/', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile('./public/' + dir + '/index.md', 'utf8'))
  );

  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
  // posts.sort((a, b) => {
  //   return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  // });
  return posts;
}
