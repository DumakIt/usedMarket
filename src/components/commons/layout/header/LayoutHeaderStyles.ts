import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 0 30px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  & > img {
    height: 40%;
  }
`;

export const FuncWrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > a {
    text-decoration: none;
    color: white;
  }
`;

export const SearchWrapper = styled.div`
  height: 70px;
  margin-top: 20px;
  padding: 0 30px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #bdbdbd; */
`;

export const SearchBox = styled.div`
  height: 60px;
  background-color: black;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #757575;
  transition: all 1s ease-in-out;
`;

export const SearchBoxInput = styled.input`
  display: none;
  width: 300px;
  margin-right: 10px;
  border: none;
  font-size: 18px;
  margin-right: 10px;
  transition: all 1s ease-in-out;
`;

export const CustomSearchOutlined = styled(SearchOutlined)`
  margin: 15px;
  color: white;
  font-size: 30px;

  &:focus + input {
    display: block;
    transition: all 1s ease-in-out;
  }
`;
