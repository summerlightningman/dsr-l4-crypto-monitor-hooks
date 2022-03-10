import React, {KeyboardEventHandler} from "react";
import {SearchProps, SearchState} from "../types/search";
import SearchContainer from "./styled/search-container";
import SearchInput from "./styled/search-input";
import SearchButton from "./styled/search-button";

class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);

        this.state = {
            value: 'Dogecoin'
        };
    }

    handleInput: KeyboardEventHandler<HTMLInputElement> = (e) => {
        this.setState({value: e.currentTarget.value});
    }

    render() {
        return <SearchContainer>
            <SearchInput onInput={this.handleInput} value={this.state.value}/>
            <SearchButton>Search</SearchButton>
        </SearchContainer>
    }
}

export default Search