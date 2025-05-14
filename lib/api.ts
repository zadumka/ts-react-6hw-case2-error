import axios from 'axios';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (searchText: string, page: number) => {
  const response = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      ...(searchText !== '' && { search: searchText }),
      page,
      perPage: 12,
    },
  });
  return response.data;
};

export const createNote = async (newNote) => {
  const response = await axios.post('/notes', newNote);
  return response.data;
};

export const deleteNote = async (noteId: number) => {
  const response = await axios.delete(`/notes/${noteId}`);
  return response.data;
};
