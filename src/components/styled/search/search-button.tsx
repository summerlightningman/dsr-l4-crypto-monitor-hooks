import styled from "styled-components";

const SearchButton = styled.button`
  background: deeppink;
  width: 100px;
  color: white;
  border-radius: 0 10px 10px 0;
  height: 52px;
  box-shadow: 10px 5px 20px pink;
  border: 1px solid pink;
  font-size: 16pt;
  padding: 0 10px;
  cursor: pointer;
  
  
  &:hover {
    color: deeppink;
    background: white;
  }
  
  &:active {
    box-shadow: none;
    
  }
`;

export default SearchButton