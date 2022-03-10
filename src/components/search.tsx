import React, {KeyboardEventHandler} from "react";
import {SearchProps, SearchState} from "../types/search";
import SearchContainer from "./styled/search-container";
import SearchInput from "./styled/search-input";

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
        </SearchContainer>
    }
}

export default Search