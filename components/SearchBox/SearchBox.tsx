import css from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onSearch: (searchText: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  return (
    <div className={css.input} onClick={() => onSearch(value)}>
      Search: {value}
    </div>
  );
}
