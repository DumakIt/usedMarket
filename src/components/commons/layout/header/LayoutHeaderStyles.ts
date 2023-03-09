import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

interface IProps {
  isScroll: boolean;
}

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
  position: sticky;
  top: 0;
  height: 70px;
  margin-top: 20px;
  padding: 0 30px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: IProps) => (props.isScroll ? "black" : "white")};

  & > div:first-of-type {
    visibility: ${(props: IProps) => (props.isScroll ? "visible" : "hidden")};
  }
`;

export const SearchBox = styled.div`
  padding: 0 15px;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  background-color: black;

  transition: ${(props: IProps) =>
    props.isScroll
      ? "width 0.7s ease, background-color 0.7s ease"
      : "width 0.7s ease"};

  &:focus-within {
    width: 380px;
    background-color: white;
    border: 2px solid black;
  }

  &:focus-within > input {
    background-color: transparent;
    display: block;
    height: 90%;
    width: 100%;
    border-right: 1px solid black;
  }

  &:focus-within > :last-child {
    color: black;
  }
`;

export const SearchBoxInput = styled.input`
  height: 10%;
  padding-right: 10px;
  border: none;
  display: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const CustomSearchOutlined = styled(SearchOutlined)`
  margin-left: 10px;
  color: white;
  font-size: 30px;
`;
