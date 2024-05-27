import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import './markdown.css';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { readdir } from 'fs/promises';

function BlogPage({ params }: { params: any }) {
  const props = getPost(params);
  return (
    <div className="text-white h-full sm:p-10 sm:max-w-[700px] font-lato w-full">
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto prose-headings:font-bold leading-7">
        <h1 className="text-xl md:text-3xl text-center my-4 md:my-8 break-words text-gray-100 font-bold">
          {props.frontMatter.title}
        </h1>

        <p className="mt-2 text-[13px] text-grey-200 mb-2">
          {new Date(props.frontMatter.date).toLocaleDateString('en', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
        <div className="markdown">
          <MDXRemote source={props.content} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const entries = await readdir('./public/blogs/', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export function generateMetadata({ params }: any) {
  const file = fs.readFileSync('./public/blogs/' + params.slug + '/index.mdx', 'utf-8');
  let { data } = matter(file);
  return {
    title: data.title + '- On the way',
    description: data.description,
  };
}

function getPost({ slug }: { slug: string }) {
  const filename = './public/blogs/' + slug + '/index.mdx';
  const markdownFile = fs.readFileSync(filename, 'utf-8');

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default BlogPage;
