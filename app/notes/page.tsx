import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

export default async function NotesPage() {
  const data = await fetchNotes('');
  return <NotesClient initialData={data} />;
}
