import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Note } from '@/types/note';
import { deleteNote } from '@/lib/api';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            {note.tag && <span className={css.tag}>{note.tag}</span>}
            {}
            <a className={css.link} href={`/notes/${note.id}`}>
              View details
            </a>
            <button className={css.button} onClick={() => mutation.mutate(note.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
