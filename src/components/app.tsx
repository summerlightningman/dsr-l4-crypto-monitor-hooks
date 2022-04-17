import {FC, useState} from 'react';
import Search from "./search";
import Main from "./styled/main";
import CurrencyList from "./currency-list";
import {CurrencyName} from "../types/currency";


const App: FC = () => {
    const [currencyList, setCurrencyList] = useState<CurrencyName[]>(['DOGE']);

    const addObservableCurrency = (name: CurrencyName) => setCurrencyList([...currencyList, name]);
    const removeObservableCurrency = (name: CurrencyName) => setCurrencyList(
        currencyList.filter(currName => currName !== name)
    );


    return <Main>
        <Search
            onAddCurrency={addObservableCurrency}
        />
        <CurrencyList
            currencyList={currencyList}
            onRemoveCurrency={removeObservableCurrency}
        />
    </Main>

}

export default App;
