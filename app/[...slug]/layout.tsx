import { NoteHead } from '../components/note-head/NoteHead';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoteHead />
      <div className={`mt-4 p-6`}>{children}</div>
    </>
  );
}
