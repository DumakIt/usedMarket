import LayoutHeader from "./header/LayoutHeader";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

interface ILayoutPros {
  children: JSX.Element;
}

export default function Layout(props: ILayoutPros): JSX.Element {
  return (
    <>
      <LayoutHeader />
      {props.children}
    </>
  );
}
