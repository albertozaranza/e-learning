import useHome from './home.hook';

import SearchBar from '../../components/search-bar';

export default function Home() {
  const { filteredItems, searchedValue, handleField } = useHome();

  return (
    <div className="flex flex-1 flex-col p-6 bg-background rounded-t-3xl ">
      <SearchBar value={searchedValue} onChange={handleField} />
      <div className="flex justify-between items-center m-4">
        <h1 className="text-title text-xl font-secondary">Categorias</h1>
        <p className="text-detail text-base">
          {filteredItems.length} {filteredItems.length > 1 ? 'cursos' : 'curso'}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 md:gap-6 ">
        {filteredItems.map(({ Icon, title, amount }) => (
          <div key={title} className="bg-white p-6 rounded-2xl">
            <div className="mb-6">
              <Icon />
            </div>
            <h1 className="mb-1 font-secondary text-base text-base-darker">
              {title}
            </h1>
            <p className="text-input text-xs">{amount} aulas</p>
          </div>
        ))}
      </div>
    </div>
  );
}
