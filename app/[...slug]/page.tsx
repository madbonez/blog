import Image from 'next/image';
import path from 'path';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Mermaid } from '../components/Mermaid';
import { Page } from '../lib/Page';
import { fetchNote, fetchSlugs } from '../lib/fetchNotes';

export async function generateStaticParams() {
  return await fetchSlugs();
}

export default async function NotePage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const page: Page = await fetchNote(slug.join(''));
  const content = page.content;

  const basePath = path.relative(
    process.cwd() + '/public',
    path.resolve(page.path, '..'),
  );

  return (
    <Markdown
      className="markdown-body"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-mermaid/.exec(className || '');
          return match ? (
            <Mermaid {...rest} chart={String(children)} />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (props: { src?: string; alt?: string }) => {
          return (
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              alt={`${props.alt ?? 'image'}`}
              {...props}
              src={`${props.src ? `/${basePath}/${props.src}` : 'unknown.png'}`}
            />
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
