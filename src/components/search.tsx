import React, {KeyboardEventHandler} from "react";
import {SearchProps, SearchState} from "../types/search";
import {TCurrencyList} from "../types/currency-list";

import SearchContainer from "./styled/search/search-container";
import SearchInput from "./styled/search/search-input";
import SearchButton from "./styled/search/search-button";
import {getCryptocurrencyList} from "../http";

class Search extends React.Component<SearchProps, SearchState> {
    cryptocurrencyList: TCurrencyList;

    constructor(props: SearchProps) {
        super(props);

        this.state = {
            value: ''
        };

        this.cryptocurrencyList = [];
        getCryptocurrencyList().then(items => this.cryptocurrencyList = items);
    }

    handleInput: KeyboardEventHandler<HTMLInputElement> = (e) => {
        this.setState({value: e.currentTarget.value.toUpperCase()});
    }

    handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter')
            this.search();
    };

    search = () => {
        if (!this.cryptocurrencyList.includes(this.state.value))
            return alert('Currency not found');

        this.props.onAddCurrency(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return <SearchContainer>
            <SearchInput
                onInput={this.handleInput}
                value={this.state.value}
                placeholder="Type cryptocurrency name..."
                onKeyPress={this.handleKeyPress}
            />
            <SearchButton onClick={this.search}>Add</SearchButton>
        </SearchContainer>
    }
}

export default Search