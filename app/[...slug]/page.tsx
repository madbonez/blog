import path from 'path';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Mermaid } from '../components/media/Mermaid';
import { SmartImage } from '../components/media/SmartImage';
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
      className="markdown-body p-2"
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
            <SmartImage
              {...props}
              src={`${props.src ? `/${basePath}/${props.src}` : 'unknown.png'}`}
              alt={`${props.alt ?? 'image'}`}
            />
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
