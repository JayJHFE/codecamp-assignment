// import LayoutBanner from "./banner";
// import LayoutFooter from "./footer";
// import LayoutHeader from "./header";
// import LayoutNavigation from "./navigation";

// const SHOW_PAGES_ONE = ["/13/one"];
// const SHOW_PAGES_TWO = ["/13/two"]
// const SHOW_PAGES_THREE = ["/13/three"]

// interface ILayoutProps {
//   children: JSX.Element;
// }

// export default function Layout(props: ILayoutProps) {
//   const router = useRouter();
//   console.log("========");
//   console.log("router.asPath");
//   console.log("========");
  
//   const mystyles = {
//     display: "flex",
//     height: "300px",
//   }
//   const isShowone = SHOW_PAGES_ONE.includes(router.asPath);
//   const isShowtwo =  SHOW_PAGES_TWO.includes(router.asPath);
//   const isShowthree =  SHOW_PAGES_THREE.includes(router.asPath);

//   return (
//     <>
//       {isShowone  && (
//         <>
//        <LayoutHeader />
//        <LayoutBanner />
//        <LayoutNavigation />
//        <div style={{ height: "300px" }}>
//          <div style = {mystyles}>
//          <div style={{ width: "30%", backgroundColor: "skyblue" }}>사이드바 영역</div>
//          <div style={{ width: "70%" }}>one 영역입니다</div>
//          </div>
//        </div>
//        <LayoutFooter />
//        </>)}
//        {isShowtwo  && (
//         <>
//        <LayoutHeader />
//        <LayoutBanner /> 
//        <LayoutNavigation />
//        <div style={{ height: "300px" }}>
//          <div style = {mystyles}>
//          <div style={{ width: "30%", backgroundColor: "skyblue" }}>사이드바 영역</div>
//          <div style={{ width: "70%" }}>two 영역입니다</div>
//          </div>
//        </div>
//        <LayoutFooter />
//        </>)}
//        {isShowthree  && (
//         <>
//        <LayoutHeader />
//        <LayoutBanner />
//        <LayoutNavigation />
//        <div style={{ height: "300px" }}>
//          <div style = {mystyles}>
//          <div style={{ width: "30%", backgroundColor: "skyblue" }}>사이드바 영역</div>
//          <div style={{ width: "70%" }}>three 영역입니다</div>
//          </div>
//        </div>
//        <LayoutFooter />
//        </>)}

//        {!isShowone && !isShowtwo && !isShowthree && (
//         <>
//         <LayoutHeader/>
//         <LayoutBanner />
//         <LayoutNavigation />
//         <div>
//           <div style = {mystyles}>
//           <div style={{ width: "30%", backgroundColor: "skyblue" }}>사이드바 영역</div>
//           <div style={{ width: "70%" }}>바디 영역</div>
//           </div>
//         </div>
//         <LayoutFooter />
//         </>
//        )}
//     </>
//   )
// };
