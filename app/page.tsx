import { Card } from './components/Card';
import { Search } from './components/Search';
import { Hello } from './components/hello/Hello';
import { Page } from './lib/Page';
import { fetchNotes } from './lib/fetchNotes';

export default async function Home() {
  const pages: Page[] = await fetchNotes();

  return (
    <div className={`p-2`}>
      <Hello />
      <div className={`mt-16`}>
        <Search />
        <div className={`mt-6 flex flex-wrap justify-between pb-6 sm:pb-24`}>
          {pages.map((page, index) => (
            <div key={index} className={`mt-4 lg:mt-10`}>
              <Card
                header={page.header}
                description={page.description}
                date={page.date}
                slug={page.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
