import React, {FC, KeyboardEventHandler, useEffect, useState} from "react";
import {SearchProps, SearchText} from "../types/search";
import {TCurrencyList} from "../types/currency-list";

import SearchContainer from "./styled/search/search-container";
import SearchInput from "./styled/search/search-input";
import SearchButton from "./styled/search/search-button";
import {getCryptocurrencyList} from "../http";

const Search: FC<SearchProps> = ({onAddCurrency}) => {
    const [value, setValue] = useState<SearchText>('');
    const [cryptocurrencyList, setCryptocurrencyList] = useState<TCurrencyList>([]);
    useEffect(() => {
        getCryptocurrencyList()
            .then(items => setCryptocurrencyList(items));
    }, []);

    const handleInput: KeyboardEventHandler<HTMLInputElement> = (e) =>
        setValue(e.currentTarget.value.toUpperCase());

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e =>
        e.key === 'Enter' && search();

    const search = () => {
        if (!cryptocurrencyList.includes(value))
            return alert('Currency not found');

        onAddCurrency(value);
        setValue('');
    }

    return <SearchContainer>
        <SearchInput
            onInput={handleInput}
            value={value}
            placeholder="Type cryptocurrency name..."
            onKeyDown={handleKeyDown}
        />
        <SearchButton onClick={search}>Add</SearchButton>
    </SearchContainer>

}

export default Search