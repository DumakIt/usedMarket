import Link from "next/link";
import { useEffectHandleScroll } from "../../hooks/custom/useEffectHandleScroll";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { useSearch } from "../../hooks/custom/useSearch";
import * as S from "./LayoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const isScroll = useEffectHandleScroll();
  const onChangeSearch = useSearch();
  const { onClickMovePage } = useRouterMovePage();

  return (
    <>
      <S.HeaderWrapper>
        <S.LogoWrapper onClick={onClickMovePage("/")}>
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
      <S.SearchWrapper isScroll={isScroll}>
        <S.LogoWrapper>
          <img src="/images/layout/logo.svg" />
        </S.LogoWrapper>
        <S.SearchBox tabIndex={0} isScroll={isScroll}>
          <S.SearchBoxInput type="text" onChange={onChangeSearch} />
          <S.CustomSearchOutlined />
        </S.SearchBox>
      </S.SearchWrapper>
    </>
  );
}
