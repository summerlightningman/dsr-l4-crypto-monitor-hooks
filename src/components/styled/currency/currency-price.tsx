import styled from "styled-components";
import CurrencyText from "./currency-text";

const CurrencyPrice = styled(CurrencyText)`
  font-family: "Arial Rounded MT Bold", serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export default CurrencyPrice;