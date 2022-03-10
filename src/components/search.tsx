import React, {KeyboardEventHandler} from "react";
import {SearchProps, SearchState} from "../types/search";
import SearchContainer from "./styled/search-container";
import SearchInput from "./styled/search-input";
import SearchButton from "./styled/search-button";

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

    search = () => {
        // search
    }

    render() {
        return <SearchContainer>
            <SearchInput onInput={this.handleInput} value={this.state.value} placeholder="Type cryptocurrency name..."/>
            <SearchButton onClick={this.search}>Search</SearchButton>
        </SearchContainer>
    }
}

export default Search