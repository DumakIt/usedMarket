import Link from "next/link";
import { useRef } from "react";
import { useSetIsToggle } from "../../hooks/custom/useSetIsToggle";
import * as S from "./LayoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const [isToggle, changeIsToggle] = useSetIsToggle();

  const searchRef = useRef(null);

  const onClickSearch = (): void => {
    searchRef.current.focus();
  };
  return (
    <>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          <img src="/images/layout/logo.svg" />
        </S.LogoWrapper>
        <S.FuncWrapper>
          <Link href="/">
            <a>LOGIN</a>
          </Link>
          <Link href="/">
            <a>JOIN US</a>
          </Link>
        </S.FuncWrapper>
      </S.HeaderWrapper>
      <S.SearchWrapper>
        <S.LogoWrapper>
          <img src="/images/layout/logo.svg" />
        </S.LogoWrapper>
        <S.SearchBox ref={searchRef}>
          <S.CustomSearchOutlined onClick={onClickSearch} />
          <S.SearchBoxInput type="text" />
        </S.SearchBox>
      </S.SearchWrapper>
    </>
  );
}
