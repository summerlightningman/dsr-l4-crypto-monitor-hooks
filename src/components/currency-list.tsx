import {CurrencyListProps} from "../types/currency-list";
import {FC} from "react";
import CurrencyContainer from "./styled/currency/currency-container";
import CurrencyItem from "./currency-item";

const CurrencyList: FC<CurrencyListProps> = ({currencyList, onRemoveCurrency}) => {
        return <CurrencyContainer>
            {currencyList.map(currencyName =>
                <CurrencyItem name={currencyName} key={currencyName} onRemoveCurrency={onRemoveCurrency}/>)}
        </CurrencyContainer>
}

export default CurrencyList