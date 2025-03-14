import { setSearchParams } from '../utils/searchParams';
import { pluralize } from '../utils/words';

interface SearchProps {
    totalPackages: number;
    totalResults: number;
    query: string;
    setSearch: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({
    totalPackages,
    totalResults,
    query,
    setSearch,
}) => {
    return (
        <div className="flex w-full flex-col items-center p-6">
            <div className="mx-2 my-4 flex w-full items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 sm:mx-8 md:w-fit">
                <span className="text-xl font-bold select-none">📦</span>
                <input
                    value={query}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSearchParams('search', e.target.value);
                    }}
                    className="w-full focus-visible:outline-0 md:w-96"
                    placeholder="Search for a package"
                />
            </div>
            <p>
                {query.trim() ? (
                    <>
                        {totalResults ? (
                            <span className="font-bold text-blue-700">
                                {totalResults}{' '}
                            </span>
                        ) : (
                            'No '
                        )}
                        {pluralize('result', totalResults)} found from
                        <span className="font-bold text-blue-700">
                            {' '}
                            {totalPackages}{' '}
                        </span>
                        {pluralize('package', totalPackages)}.
                    </>
                ) : (
                    <>
                        {totalPackages ? (
                            <span className="font-bold text-blue-700">
                                {totalPackages}{' '}
                            </span>
                        ) : (
                            'No '
                        )}
                        {pluralize('package', totalPackages)} found.
                    </>
                )}
            </p>
        </div>
    );
};

export default Search;
