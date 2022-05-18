import SearchIcon from '../../assets/icons/search';

import type { ChangeEvent } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex justify-center items-center px-6 bg-white rounded-full">
      <SearchIcon className="mr-4" />
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Busque um curso"
        className="bg-white py-3 w-full outline-none placeholder-input placeholder-base"
      />
    </div>
  );
}
