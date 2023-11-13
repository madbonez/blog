import { NoteHead } from '../components/note-head/NoteHead';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`p-2 sm:p-0`}>
        <NoteHead />
      </div>
      <div className={`mt-4 p-2`}>{children}</div>
    </div>
  );
}
