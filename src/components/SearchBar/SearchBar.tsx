import React, { ChangeEvent } from 'react';
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

interface SearchProps {
    searchValue: string;
    handleSearch: (key: string) => void;
}

const SearchBar = (props: SearchProps) => {

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        props.handleSearch(e.target.value);
    };

    return(
        <InputGroup size="md" w="sm" mb="1rem">
            <Input
                id="search-input"
                value={props.searchValue}
                onChange={handleSearch}
                placeholder="Search..."
                variant="outline"
            />
            <InputRightElement>
                <MdSearch />
            </InputRightElement>
        </InputGroup>
    )
};

export default SearchBar;