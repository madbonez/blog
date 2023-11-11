import fs from 'fs/promises';
import { glob } from 'glob';
import matter, { GrayMatterFile } from 'gray-matter';
import { Page } from './Page';

// .join('')
type FullSlug = string;

// not working due to Next uses worker wor static generation
// and nodejs module cache not working
// for optimization need to rewrite to filesystem serialization/deserialization
const cache = new Map<FullSlug, Page>();

export async function fetchNotes(): Promise<Page[]> {
  await fetchSlugs();
  return Array.from(cache.values());
}

export async function fetchNote(slug: FullSlug): Promise<Page> {
  await fetchSlugs();
  return cache.get(slug)!;
}

export async function fetchSlugs(): Promise<{ slug: string }[]> {
  const postsPath: string[] = await glob(`public/notes/**/*.md`, {
    absolute: true,
  });

  const rawPosts: { content: string; path: string }[] = await Promise.all(
    postsPath.map(async (postPath) => {
      const content = await fs.readFile(postPath, 'utf-8');
      return {
        content,
        path: postPath,
      };
    }),
  );

  const parsedPosts: {
    parsed: GrayMatterFile<string>;
    path: string;
  }[] = rawPosts.map((rawPost) => {
    return {
      parsed: matter(rawPost.content),
      path: rawPost.path,
    };
  });

  const pages = parsedPosts.map((post) => ({
    slug: post.parsed.data['slug'],
    description: post.parsed.data['description'],
    keywords: post.parsed.data['keywords'],
    date: post.parsed.data['date'],
    header: post.parsed.data['header'],
    content: post.parsed.content,
    path: post.path,
  }));

  pages.forEach((page) => {
    cache.set(page.slug.join(''), page);
  });

  return pages.map((page) => {
    return {
      slug: page.slug,
    };
  });
}
