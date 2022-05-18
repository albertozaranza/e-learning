import { useEffect, useState } from 'react';

import { COURSES } from './constants';

import type { ChangeEvent } from 'react';

type useHomeScreen = {
  filteredItems: typeof COURSES;
  searchedValue: string;
  handleField: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function useHome(): useHomeScreen {
  const [searchedValue, setSearchedValue] = useState('');
  const [filteredItems, setFilteredItems] = useState(COURSES);

  useEffect(() => {
    const result = COURSES.filter(item =>
      item.title
        .toLocaleLowerCase()
        .includes(searchedValue.toLocaleLowerCase()),
    );

    setFilteredItems(result);
  }, [searchedValue]);

  function handleField(e: ChangeEvent<HTMLInputElement>) {
    setSearchedValue(e.target.value);
  }

  return {
    filteredItems,
    searchedValue,
    handleField,
  };
}
