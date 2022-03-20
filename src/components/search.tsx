import React, {KeyboardEventHandler} from "react";
import {SearchProps, SearchState} from "../types/search";
import SearchContainer from "./styled/search/search-container";
import SearchInput from "./styled/search/search-input";
import SearchButton from "./styled/search/search-button";
import {isCryptocurrencyAvailable} from "../http";

class Search extends React.Component<SearchProps, SearchState> {

    constructor(props: SearchProps) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleInput: KeyboardEventHandler<HTMLInputElement> = (e) => {
        this.setState({value: e.currentTarget.value.toUpperCase()});
    }

    handleKeyPress: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === 'Enter')
            this.search();
    };

    search = () => {
        isCryptocurrencyAvailable(this.state.value)
            .then(isAvailable => {
                if (isAvailable) {
                    this.props.onAddCurrency(this.state.value);
                    this.setState({value: ''});
                } else
                    alert('Currency not found');
            })
            .catch(() => alert('Ошибка поиска'));
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