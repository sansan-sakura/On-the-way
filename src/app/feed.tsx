import { Feed } from "feed";

export function generateFeed(posts: any, metadata: any) {
  const site_url = "http://localhost:3001/";

  const feedOptions = {
    author: {
      name: "Sakura Tanaka",
      email: "sito6496t@gmail.com",
      link: site_url,
    },
    description: metadata.description,
    favicon: `${site_url}/icon.png`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image:
      "https://avatars.githubusercontent.com/u/98739369?s=400&u=e9207f779f9d9063f7576f6fb32a9d01c0000e22&v=4",
    link: site_url,
    title: metadata.title,
    copyright: "Sakura Tanaka",
  };

  const feed = new Feed(feedOptions);

  for (const post of posts) {
    feed.addItem({
      date: new Date(post.date),
      description: post.spoiler,
      id: `${site_url}${post.slug}/`,
      link: `${site_url}${post.slug}/`,
      title: post.title,
    });
  }

  return feed;
}
