import { Hello } from '../_components/hello/Hello';
import { NoteHead } from '../_components/note-head/NoteHead';

export default function Note() {
  return (
    <>
      <NoteHead />
      <div className={`mt-4 p-6`}>
        <span className={`font-bold`}>
          Programming languages all have built-in data structures, but these
          often differ from one language to another.
        </span>
        <span>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </span>
      </div>
    </>
  );
}
