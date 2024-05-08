import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { MDXRemote } from 'next-mdx-remote/rsc';

function BlogPage({ params }: { params: any }) {
  const props = getPost(params);
  return (
    <div className="text-white h-full p-10 max-w-[700px] font-lato">
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto prose-headings:font-bold leading-7">
        <h1 className="text-xl md:text-2xl text-center mb-8 md:mb-12">{props.frontMatter.title}</h1>
        <MDXRemote source={props.content} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('./public/blogs'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);
  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join('./public/blogs', slug + '.mdx'), 'utf-8');

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default BlogPage;
