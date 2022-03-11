import React, {KeyboardEventHandler} from "react";
import {SearchProps, SearchState} from "../types/search";
import SearchContainer from "./styled/search-container";
import SearchInput from "./styled/search-input";
import SearchButton from "./styled/search-button";
import {getCryptocurrencyPrice} from "../http";

class Search extends React.Component<SearchProps, SearchState> {

    constructor(props: SearchProps) {
        super(props);

        this.state = {
            value: ''
        };
    }


    handleInput: KeyboardEventHandler<HTMLInputElement> = (e) => {
        this.setState({value: e.currentTarget.value});

    }

    handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter')
            this.search()
    };

    search = () => {
        getCryptocurrencyPrice('BTC')
            .then(resp => resp.Response ? '???' : resp.USD)
            .then(console.log);
    }

    render() {
        return <SearchContainer>
            <SearchInput onInput={this.handleInput}
                         value={this.state.value}
                         placeholder="Type cryptocurrency name..."
                         onKeyPress={this.handleKeyPress}
            />
            <SearchButton onClick={this.search}>Add</SearchButton>
        </SearchContainer>
    }
}

export default Search