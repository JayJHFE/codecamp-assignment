import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";


interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  router.asPath;
  
  const mystyles = {
    display: "flex",
    height: "500px",
  }
  return (
    <>
        <LayoutHeader/>
        <LayoutBanner />
        <LayoutNavigation />
        <div style={{height: "800px"}}>
          <div style = {mystyles}>
          <div style={{ width: "30%", height: "800px", backgroundColor: "skyblue" }}>사이드바 영역</div>
          <div style={{ width: "70%" }}>{props.children}</div>
          </div>
        </div>
        <LayoutFooter />
    </>
  )
};
